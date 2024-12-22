import React from 'react'

function Contract() {

    const ICON_URL = '/icon/'

    return (
        <div className='container-contract'>
            <div className="wrapper" 
            data-aos="zoom-in" 
            data-aos-duration="1000" 
            >
                <div className="grid-column">
                    <img src={ICON_URL + 'twt.svg'} alt="icon-twitter" />
                    <a href="https://twitter.com/PrideDemonsNFT" target="_blank">TWITTER</a>
                </div>
                <div className="grid-column">
                    <img src={ICON_URL + 'discord.svg'} alt="icon-discord" />
                    <a href="https://twitter.com/PrideDemonsNFT" target="_blank">DISCORD</a>
                </div>
                <div className="grid-column">
                    <img src={ICON_URL + 'looksrare.svg'} alt="icon-looksrare" />
                    <a href="#">LOOKSRARE</a>
                </div>
                <div className="grid-column">
                    <img src={ICON_URL + 'opensea.svg'} alt="icon-opensea" />
                    <a href="#">OPENSEA</a>
                </div>
            </div>
        </div>
    )
}

export default Contract