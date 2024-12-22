import React from 'react'
import { useDispatch, useSelector } from 'react-redux'


function WalletCard() {

    const { wallet } = useSelector(state => state);

    return (
        <div className="button-navbar">
            {
                wallet
                ?
                <button type='button' className='connect-wallet' data-bs-toggle="modal" data-bs-target="#accountModal">
                    <i className="fa-solid fa-wallet"/> { '...' + wallet.address.slice(0,5) }
                </button>
                :
                <button type='button' className='connect-wallet' data-bs-toggle="modal" data-bs-target="#connectModal">
                    <i className="fa-solid fa-wallet"/> { 'Connect' }
                </button>
            }
        </div>
    )
}

export default WalletCard