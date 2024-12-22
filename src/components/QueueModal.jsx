import React, { useCallback, useEffect, useRef, useState } from 'react'
import Queueing from './Queueing'
import Booked from './Booked'
import { useDispatch } from 'react-redux'
import { GLOBALTYPES } from '../redux/actions/globalTypes';
import axios from 'axios';
import LoadingMints from './LoadingMints';
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion'
import InformationQueue from './InformationQueue';
import $ from 'jquery'
import Warning from './Warning';


function QueueModal({setSignature, signature, wallet}) {

    const dispatch = useDispatch();
    const success = useRef();
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState(false);

    const closeModal = useCallback(() => {
        setTimeout(() => {
            // Hide Modal bootstrap
            $("#queueModal").hide();
            // Remove Backdrop
            $('.modal-backdrop').remove();
            // Remove CSS overflow from bootstrap css modal
            $('body').css({"overflow" : '', 'paddingRight': ''})
        }, 3000)
    }, [signature])

    async function getQueue(e) {
        e.preventDefault();
        setLoading(true)
        const body = { address: wallet.address }
        const res = await fetch("/api/queue", {
            method: 'POST',
            body: body
        })
        const data = await res.json();
        console.log("Data ---> ", data)
        if(data.signature){
            setLoading(false)
            setSignature(data.signature)
            closeModal()
        }else if(data.status === "failed"){
            setLoading(false)
            setMessage(data.status)
        }
    }

    useEffect(() => {
        if(signature) return closeModal()
    }, [closeModal, signature])

    return (
        <div className="modal fade" id="queueModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={1} aria-labelledby="staticBackdropLabel" aria-hidden="true"
        ref={success} >
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content" style={{position: 'relative', zIndex: '100'}}>
                    <LoadingMints />
                    <div className="modal-header">
                        <h5 className="modal-title" id="connectModalLabel">Queuing system</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div className="modal-body">
                        { 
                            loading ? 
                            <Queueing /> : 
                            signature ?  
                            <Booked /> : 
                            message ?
                            <Warning /> :
                            <InformationQueue /> 
                        }
                        <div className="requeuing">
                            {
                                loading ? (
                                    <>
                                    <h6>Please wait in your queue for a moment.</h6>
                                    <p>The system will automatically check the queue.</p>
                                    </>
                                ) : signature ? (
                                    <>
                                    <h6>Your queue is up. Now you can mints.</h6>
                                    <p>You can close this popup now. Please do not refresh. Otherwise, you'll have to re-queue.</p>
                                    </>
                                ) : message ? (
                                    <>
                                    <h6>Queuing error occurred. Please try again.</h6>
                                    <p>If it is whitelist mint, please check your metamask wallet address.</p>
                                    </>
                                ) : (
                                    <>
                                    <h6>Please press the button GET QUEUE to queueing.</h6>
                                    <p>The system will check your information after queuing.</p>
                                    </>
                                )
                            }
                        </div>
                    </div>
                    <div className="modal-footer">
                        <motion.button type="button" onClick={getQueue} disabled={(signature || loading) && 'disable'}
                            animate={{
                                scale: [0.9, 1, 0.9]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity
                            }}
                        >
                            {
                                loading ? (
                                    <Typewriter 
                                        onInit={(typewriter) => {
                                            typewriter.typeString('Pending . . .')
                                            .pauseFor(2500)
                                            .deleteChars(5)
                                            .start()
                                        }}
                                        options={{
                                            loop: true,
                                        }}
                                    />
                                ) : signature ? (
                                    'Success'
                                ) : (
                                    'Get queue'
                                )
                            }
                        </motion.button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QueueModal