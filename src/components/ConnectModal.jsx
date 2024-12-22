import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import connectWalletLogo from '../images/walletconnect.svg'
import metamaskLogo from '../images/metamask.svg'
import Image from 'next/image'
import { connectMetaMask, connectWallet } from '../redux/actions/walletAction';


function ConnectModal() {

    const dispatch = useDispatch();

    function connectMetaMaskHandler() {
        dispatch(connectMetaMask());
    }

    function connectWalletHandler() {
        dispatch(connectWallet());
    }

    return (
        <div className="modal fade" id="connectModal" tabIndex={-1} aria-labelledby="connectModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="connectModalLabel">Connect Wallet</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div className="modal-body">
                        <motion.div className="metamask" onClick={connectMetaMaskHandler}
                        whileTap={{scale: 0.95}} whileHover={{scale: 1.05}}>
                            <Image src={metamaskLogo} alt="metamask_logo" layout="responsive" />
                            <span></span>
                            <h5>MetaMask</h5>
                        </motion.div>
                        <motion.div className="walletconnect" onClick={connectWalletHandler}
                        whileTap={{scale: 0.95}} whileHover={{scale: 1.05}}>
                            <Image src={connectWalletLogo} alt="walletconnect_logo" layout="responsive" />
                            <span></span>
                            <h5>WalletConnect</h5>
                        </motion.div>
                    </div>
                    <div className="modal-footer">
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConnectModal