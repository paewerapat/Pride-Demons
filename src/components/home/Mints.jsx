import { ethers, utils } from 'ethers';
import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import erc721 from '../../utils/prideDemons.json';
import Skeleton from '@mui/material/Skeleton';
import { GLOBALTYPES } from '../../redux/actions/globalTypes';
import CircularProgress from '@mui/material/CircularProgress';
import Showcase from './Showcase';
import LoadingMints from '../LoadingMints';
import QueueModal from '../QueueModal';

function WhitelistMints() {

    const dispatch = useDispatch();
    const { wallet, network } = useSelector(state => state);
    const CURRENCY_URL = '/currency/';

    const contractAddress = "0xeA154bA3413fc424AA4fe5E78F23a8dD2de0dF74";
    const connectNFTs = new ethers.Contract(contractAddress, erc721, wallet.signer ? wallet.signer : network.provider);

    const initialState = {
        maxPerWallet: false, txCappedByMode: false, balanceOf: false, priceByMode: false, salePhase: false, 
        mintedByMode: false, maxSupplyByMode: false, maxSupply: false, totalSupply: false, getState: false
    }
    const [initialData, setInitialData] = useState(initialState)
    const {
        maxPerWallet, txCappedByMode, balanceOf, priceByMode, salePhase, mintedByMode, maxSupply, 
        maxSupplyByMode, totalSupply, getState
    } = initialData;

    const [signature, setSignature] = useState(false);
    const [loading, setLoading] = useState(true);
    const [noMints, setNoMints] = useState(1);
    const [totalAmount, setTotalAmount] = useState(false);
    const [txDetails, setTxDetails] = useState(false);
    const [resultTx, setResultTx] = useState(false);

    const getReadContract = useCallback(async () => {
        setLoading(true);
        // แก้ชื่อ Function
        const txCappedByMode = await connectNFTs.txCappedByMode();
        const balanceOf = await connectNFTs.balanceOf(wallet.address);
        const priceByMode = await connectNFTs.priceByMode();
        const getState = await connectNFTs.getState();
        const salePhase = await connectNFTs.salePhase();
        const mintedByMode = await connectNFTs.mintedByMode();
        const totalSupply = await connectNFTs.totalSupply();
        const maxSupplyByMode = await connectNFTs.maxSupplyByMode();
        const maxSupply = await connectNFTs.maxSupply();
        let maxPerWallet = false;
        if(salePhase === 1){
            maxPerWallet = await connectNFTs.maxPrivatePerWallet();
        }else if(salePhase === 2){
            maxPerWallet = await connectNFTs.maxPublicPerWallet();
        }
        setInitialData({
            balanceOf: parseInt(balanceOf, 16), 
            maxPerWallet: parseInt(maxPerWallet._hex, 16),
            txCappedByMode: parseInt(txCappedByMode._hex, 16),
            priceByMode: utils.formatEther(parseInt(priceByMode._hex, 16)),
            salePhase: salePhase,
            mintedByMode: parseInt(mintedByMode._hex, 16),
            maxSupplyByMode: parseInt(maxSupplyByMode._hex, 16),
            maxSupply: parseInt(maxSupply._hex, 16),
            totalSupply: parseInt(totalSupply._hex, 16),
            getState: getState,
        })
        setLoading(false);
    }, [wallet.address])


    async function submitMints() {
        if((noMints > txCappedByMode) || ((balanceOf + noMints) > maxPerWallet)){
            return dispatch({
                type: GLOBALTYPES.NOTIFY, payload: {error: "You mints over a certain amount."}
            })
        } else if(salePhase === 0) {
            dispatch({type: GLOBALTYPES.NOTIFY, payload : {error: 'Mints does closed.'}})
        } else if(salePhase === 1) {
            setLoading(true)
            await connectNFTs.mintToken(noMints, signature, {
                value: utils.parseEther(`${totalAmount}`)
            }).then((tx) => {
                setTxDetails(tx);
                tx.wait().then((res) => {
                    if(res.status === 1){
                        setLoading(false)
                        setResultTx({message: 'Transaction successful.'})
                        getReadContract();
                    }
                    console.log(res)
                }).catch((err) => {
                    setResultTx(err)
                    console.log("err tx >>", err)
                    setLoading(false)
                })
            }).catch((err) => {
                let message = err.message.substring(err.message.indexOf('\{\"code\"'))
                console.log("message", message)
                // message = message.substring(0, message.indexOf('\,\"data\"')) + '}';
                message = message.substring(0, message.indexOf('\,\ method\='));
                console.log("message", message)
                let msg = JSON.parse(message) 
                console.log("msg.message", msg.message)
                setResultTx(msg)
            })
        } else if(salePhase === 2){
            // setLoading(true)
            // await connectNFTs.mintToken(noMints, {
            //     value: totalAmount
            // }).then((tx) => {
            //     setTxDetails(tx);
            //     tx.wait().then((res) => {
            //         if(res.status === 1){
            //             setLoading(false)
            //             setResultTx({message: 'Transaction successful.'})
            //         }
            //     })
            // }).catch((err) => {
            //     setResultTx(err)
            //     console.log(err)
            //     setLoading(false)
            // })
        }
    }


    const decreaseHandler = () => {
        if(noMints <= 1) return noMints;
        else return setNoMints(noMints - 1)
    }
    const increaseHandler = () => {
        if(noMints >= txCappedByMode) return noMints;
        else return setNoMints(noMints + 1)
    }

    useEffect(() => {
        if(wallet) return getReadContract();
    },[wallet])
    
    useEffect(() => {
        if(priceByMode) return setTotalAmount(noMints * priceByMode);
    }, [priceByMode, noMints])


    return (
        <>
        <LoadingMints />
        <div className='mints-page' id="mints">
            <section className="headers">
                <div data-aos="flip-left" data-aos-duration="1000">
                    <h1>
                        Pride Demons
                    </h1>
                    <h2>
                    { salePhase === 1 ? "Private Mints" : salePhase === 2 ? "Public Mints" : "Comming Soon..."}
                    </h2>
                </div>
            </section>
            
            <section className="modal-mints"  
                data-aos="fade-up"
                data-aos-duration="1000"
            >
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="input-mints">
                            <div className="title">
                                <h2>LET'S MINTS SOME GREAT!</h2>
                            </div>
                            <div className="info-mints">
                                {loading ? <Skeleton style={{width: '200px', background: 'var(--theme-red1)'}}/> : 
                                    <>
                                    <h2>
                                        { salePhase === 1 ? "Private Mints" : salePhase === 2 ? "Public Mints" : "Comming Soon..."}
                                    </h2>
                                    <h3>
                                        {mintedByMode} Minted / {maxSupplyByMode} { salePhase === 1 ? "Private Capped" : salePhase === 2 ? "Public Capped" : "Capped"}
                                    </h3>
                                    <hr />
                                    <h3>{totalSupply} Total / {maxSupply} Max</h3>
                                    </>
                                } 
                            </div>
                            <hr/>
                            <div className="mints-token">
                                <h3>mintToken: </h3>
                                <div className="group-mints-token">
                                    <button type='button' className='decrease-mints' onClick={decreaseHandler}
                                    disabled={noMints <= 1 && 'disabled'}>
                                        <i className="fa-solid fa-circle-minus" style={noMints <= 1 ? {opacity: '0.5'} : {opacity: '1'}}/>
                                    </button>
                                    <input type="text" value={noMints} readOnly/>
                                    <button type='button' className='increase-mints' onClick={increaseHandler}
                                    disabled={noMints >= txCappedByMode && 'disabled'}>
                                        <i className="fa-solid fa-circle-plus" style={noMints >= txCappedByMode ? {opacity: '0.5'} : {opacity: '1'}}/>
                                    </button>
                                </div>
                            </div>
                            <hr/>
                            <div className="total-amounts">
                                <h3>Amount: </h3>
                                <div className="group-amounts">
                                    {loading ? <Skeleton style={{width: '120px', background: 'var(--theme-red1)', marginRight: '10px'}}/> : <input type="text" value={totalAmount} readOnly/>}
                                    <img src={CURRENCY_URL + 'eth.svg'} alt="" />
                                </div>
                            </div>
                            <hr/>

                            <div className="transaction-detail">
                                <div className="loading-transaction gap-3">
                                    { loading && <CircularProgress style={{color: 'var(--theme-red1)', marginRight: '10px', marginLeft: 'auto'}}/>}

                                    { txDetails && 
                                        <a href={`https://${wallet?.network?.name}.etherscan.io/tx/${txDetails?.hash}`}
                                        target="_blank">
                                            <i className="fa-solid fa-up-right-from-square"/> VIEW TRANSACTION DETAILS
                                        </a>
                                    }
                                </div>

                                { resultTx && 
                                    <span>
                                        <i className="fa-solid fa-bell"/> {resultTx.message}
                                    </span>
                                }
                            </div>

                            {
                                loading ? (
                                <button type="button"
                                disabled='disabled' className="btn-submit-mints"
                                style={{opacity: '0.7', background: '#777'}}>
                                    <i className="fa-solid fa-gifts"/>&nbsp; Waiting...
                                </button>
                                // Check SalePhase || getState to get signature
                                ) : (getState === 1 || getState === 2) ? 
                                signature ? (
                                    <button type="button" onClick={submitMints}
                                    disabled={signature ? '' : 'disabled'} className="btn-submit-mints"
                                    style={signature ? {opacity: '1'} : {opacity: '0.7', background: '#777'}}>
                                        <i className="fa-solid fa-gifts"/>&nbsp; MINTS
                                    </button>
                                ) : (
                                    <button type="button" className="btn-submit-mints" 
                                    data-bs-toggle="modal" data-bs-target="#queueModal">
                                        <i className="fa-solid fa-user-clock"/>&nbsp; Get queue
                                    </button> 
                                ) : (
                                    <button type="button" className="btn-submit-mints" data-bs-toggle="modal" data-bs-target="#queueModal"
                                    style={{opacity: '0.7', background: '#777'}}>
                                        <i className="fa-solid fa-circle-xmark"/>&nbsp; Closed
                                    </button>
                                )
                            }
                        </div>
                    </div>
                </div>
            </section>
            <Showcase />

        </div>

        { <QueueModal setSignature={setSignature} signature={signature} wallet={wallet} /> }
        </>
    )
}

export default WhitelistMints