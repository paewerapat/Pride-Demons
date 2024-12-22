import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify';
import { GLOBALTYPES } from '../redux/actions/globalTypes';

function AccountModal() {

    const { wallet } = useSelector(state => state);
    const dispatch = useDispatch();

    function signOutWalletHandler() {
        localStorage.removeItem("wallet")
        dispatch({type: GLOBALTYPES.WALLET, payload: false })
        toast("Wallet Disconnected")
    }

    return (
        <div className="modal fade" id="accountModal" tabIndex={-1} aria-labelledby="accountModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="accountModalLabel">
                        <i className="fa-solid fa-user-injured"/> Account
                        </h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div className="modal-body">
                        <div className="network">
                            <h6>
                            <i className="fa-solid fa-circle-nodes"/> Connected with {wallet?.signer?.provider.connection.url}
                            </h6>
                            <button type="button" data-bs-toggle="modal" data-bs-target="#connectModal">
                                Change
                            </button>
                        </div>
                        <div className="address">
                            <img src="" alt="" />
                            <h5>Address: {wallet?.address?.slice(0,5) + '...' + wallet?.address?.slice(36, 41)} </h5>
                        </div>
                        <div className="group-span">
                            <span><i className="fa-solid fa-copy"/> Copy to clipboard</span>
                            <span><i className="fa-solid fa-arrow-up-right-from-square"/> View on Explorer</span>
                        </div>
                        <button type="button" className='signout' onClick={signOutWalletHandler}
                        data-bs-dismiss="modal" aria-label="Close" >
                            <i className="fa-solid fa-right-from-bracket"/> Sing out
                        </button>
                    </div>
                    <div className="modal-footer">
                        <h5>Your transactions will appear here...</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AccountModal