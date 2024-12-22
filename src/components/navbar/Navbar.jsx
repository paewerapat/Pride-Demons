import React from 'react'
import { Link } from 'react-router-dom'
import WalletCard from '../WalletCard';
import ConnectModal from '../ConnectModal';
import AccountModal from '../AccountModal';
import ThemeModal from '../ThemeModal';
import { motion } from 'framer-motion'
import QueueModal from '../QueueModal';

function Navbar() {

    function reloadPage() {
        window.location.reload();
    }

    // listen for account changes
    if(typeof window !== 'undefined'){
        window?.ethereum?.on('accountsChanged', reloadPage);
        window?.ethereum?.on('chainChanged', reloadPage);
        window?.ethereum?.on('disconnect', reloadPage)
    }

    return (
        <>
            <nav className="navbar navbar-expand-xl fixed-top">
                <div className="container-fluid">

                    <a className="navbar-brand" href="#">
                        <span></span>
                    </a>

                    <WalletCard />

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" 
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon">
                            <i className="fa-solid fa-bars"></i>
                        </span>
                    </button>

                    <div className="collapse navbar-collapse text-center justify-content-center no-transition" 
                    id="navbarSupportedContent">
                        <ul className="navbar-nav"
                        style={{fontSize: '18px', fontWeight: '600'}}>

                            <li className="nav-item mx-2">
                                <a className="nav-link" href="#">Home</a>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link" href='#roadmap'>RoadMap</a>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link" href="#team">Team</a>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link" href="#contract">Contract</a>
                            </li>

                        </ul>
                        <button className="lets-mints mx-2">
                            <i className="fa-solid fa-hand-holding-heart"/><a href="/#mints" style={{textDecoration: 'inherit', color: 'inherit'}}> MINTS</a>
                        </button>
                        <motion.button className='change-theme' type="button"
                        whileTap={{scale: 0.95}}
                        data-bs-toggle="modal" data-bs-target="#themeModal">
                            <i className="fa-solid fa-fill-drip"/> 
                        </motion.button>
                    </div>
                </div>
            </nav>
            { <ThemeModal /> }
            { <ConnectModal /> }
            { <AccountModal /> }
        </>
    )
}

export default Navbar