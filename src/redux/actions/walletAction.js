import { GLOBALTYPES } from "./globalTypes"
import { ethers, providers } from "ethers";
import WalletConnectProvider from "@walletconnect/web3-provider";


export const connectMetaMask = () => async (dispatch) => {
    try {
        if(!window.ethereum){
            return dispatch({type: GLOBALTYPES.NOTIFY, payload: {warning: 'Please install metamask first.'}})
        }
        dispatch({type: GLOBALTYPES.NOTIFY, payload: {loading: true} })
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        // MetaMask requires requesting permission to connect users accounts
        await provider.send("eth_requestAccounts", [])
        // Get Accounts
        const signer = await provider.getSigner();
        const signerAddress = await signer.getAddress();
        // Get balance
        const balance = await signer.getBalance();
        const etherBalance = ethers.utils.formatEther(balance)
        // Get Network
        const network = await provider.getNetwork();
        // Payload for redux
        const payload = {
            signer: signer,
            address: signerAddress,
            balance: etherBalance,
            network: network
        }
        // Save at localstorage
        localStorage.setItem("metamask", true)
        dispatch({ type: GLOBALTYPES.NOTIFY, payload: { success: 'MetaMask Connected!'}})
        dispatch({type: GLOBALTYPES.NOTIFY, payload: {loading: false} })
        return dispatch({ type: GLOBALTYPES.WALLET, payload: payload})
    } catch (err) {
        dispatch({
            type: GLOBALTYPES.NOTIFY,
            payload: {error: err}
        })
    }
}

export const connectNetwork = () => async (dispatch) => {
    try {
        dispatch({type: GLOBALTYPES.NOTIFY, payload: {loading: true} })
        // Connect node Infura or local server
        const provider = new ethers.providers.JsonRpcProvider("https://eth-rinkeby.alchemyapi.io/v2/o3XPBwQ-Ryitl7h5LzVqk6lUIhJ6SfIu");
        const signer = provider.getSigner();
        const network = await provider.getNetwork();
        dispatch({type: GLOBALTYPES.NOTIFY, payload: {loading: false} })
        return dispatch({
            type: GLOBALTYPES.NETWORK,
            payload: {
                provider,
                signer,
                network
            }
        })
    } catch (err) {
        dispatch({
            type: GLOBALTYPES.NOTIFY,
            payload: { error: err }
        })
    }
}

export const connectWallet = () => async (dispatch) => {
    try {
        //  Create WalletConnect Provider
        const walletConnectProvider  = new WalletConnectProvider({
            infuraId: "94198b4f40954bb9b30c91ec5ac274e6",
            qrcode: true
        });
        
        //  Enable session (triggers QR Code modal)
        await walletConnectProvider.enable();
        const provider = new providers.Web3Provider(walletConnectProvider)

        // Get Accounts
        const signer = await provider.getSigner();
        const signerAddress = await signer.getAddress();
        // Get balance
        const balance = await signer.getBalance();
        const etherBalance = ethers.utils.formatEther(balance)
        // Get Network
        const network = await provider.getNetwork();
        // Payload for redux
        const payload = {
            signer: signer,
            address: signerAddress,
            balance: etherBalance,
            network: network
        }
        // Save at localstorage
        localStorage.setItem("walletconnect", true)
        await dispatch({ type: GLOBALTYPES.WALLET, payload})
        dispatch({ type: GLOBALTYPES.NOTIFY, payload: { success: 'Wallet Connected!'}})
        dispatch({type: GLOBALTYPES.NOTIFY, payload: {loading: false} })
    } catch (err) {
        dispatch({
            type: GLOBALTYPES.NOTIFY,
            payload: {error: err}
        })
    }
}