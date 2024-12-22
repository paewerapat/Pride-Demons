import React from 'react'
import { motion } from 'framer-motion'

function Team() {

    const ICON_SOCIAL = '/social/'
    const GROUP_TEAM = '/images/'
    const TEAM_AVATAR = '/teams/'

    return (
        <div className='container-team'>
            <div className="title"
                data-aos="fade-down"
                data-aos-duration="1000"
                data-aos-anchor-placement="top-bottom"
            >
                <motion.div 
                    animate={{ 
                        y: 0,
                        translateY: [0, -15, 0],
                    }}
                    transition={{ duration: 2, repeat: Infinity}}
                >
                    <img  src={GROUP_TEAM + 'group-team.svg'} alt="group_team" />
                </motion.div>
                <h2>
                    MEET OUR TEAM
                </h2>
                <h4>
                    Guild of Web3 Adventurers
                </h4>
            </div>
            <div className="wrapper">

                <div className="card-team"
                    data-aos="flip-up" 
                    data-aos-duration="1000"
                    >
                        <img src={TEAM_AVATAR + 'demon-shadow.jpg'} alt="mockup-avatar" />
                        <div className="content">
                            <h4>
                                Shadow
                            </h4>
                            <h6>
                                Artist
                            </h6>
                            <div className="icon-social">
                                <img src={ICON_SOCIAL + 'twt.svg'} alt="icon_twitter" />
                                <a href='https://twitter.com/w3_moscato' target="_blank"></a>
                            </div>
                        </div>
                    </div>

                    
                <div className="card-team"
                    data-aos="flip-down" 
                    data-aos-duration="1000"
                >
                    <img src={TEAM_AVATAR + 'w3guild-nobg.png'} alt="mockup-avatar" />
                    <div className="content">
                        <h4>
                            {`{w3} G U I L D ;`} Team
                        </h4>
                        <h6>
                            Web3 enablement & technology team, a group of experienced software developers who belive in web3 and decentralized.
                        </h6>
                        <div className="icon-social">
                            <img src={ICON_SOCIAL + 'twt.svg'} alt="icon_twitter" />
                            <a href='https://twitter.com/w3guild' target="_blank">@w3guild</a>
                        </div>
                    </div>
                </div>

                <div className="card-team" 
                data-aos="flip-up" 
                data-aos-duration="1000"
                >
                    <img src={TEAM_AVATAR + 'demon-tbv.jpg'} alt="mockup-avatar" />
                    <div className="content">
                        <h4>
                            Bexurys
                        </h4>
                        <h6>
                            Founder of {`{w3}`} G U I L D ; and Pride Demons NFT Project / Smart Contract Developer. 
                        </h6>
                        <div className="icon-social">
                            <img src={ICON_SOCIAL + 'twt.svg'} alt="icon_twitter" />
                            <a href='https://twitter.com/w3agmi' target="_blank">@bexurys</a>
                        </div>
                    </div>
                </div>

                <div className="card-team"
                data-aos="flip-down" 
                data-aos-duration="1000"
                >
                    <img src={TEAM_AVATAR + 'demon-gsm.jpg'} alt="mockup-avatar" />
                    <div className="content">
                        <h4>
                            Latte
                        </h4>
                        <h6>
                            Co-Founder of {`{w3}`} G U I L D ; and Pride Demons NFT Project / Back-end Developer.
                        </h6>
                        <div className="icon-social">
                            <img src={ICON_SOCIAL + 'twt.svg'} alt="icon_twitter" />
                            <a href='https://twitter.com/w3_latte' target="_blank">@w3_latte</a>
                        </div>
                    </div>
                </div>

                <div className="card-team"
                data-aos="flip-up" 
                data-aos-duration="1000"
                >
                    <img src={TEAM_AVATAR + 'demon-xsc.jpg'} alt="mockup-avatar" />
                    <div className="content">
                        <h4>
                            n3eutrin0120ev
                        </h4>
                        <h6>
                            Co-Founder of {`{w3}`} G U I L D ; and Pride Demons NFT Project.
                        </h6>
                        <div className="icon-social">
                            <img src={ICON_SOCIAL + 'twt.svg'} alt="icon_twitter" />
                            <a href='https://twitter.com/w3_120neutrin0' target="_blank">@w3_120neutrin0</a>
                        </div>
                    </div>
                </div>

                <div className="card-team"
                data-aos="flip-down" 
                data-aos-duration="1000"
                style={{justifySelf: 'center'}}
                >
                    <img src={TEAM_AVATAR + 'demon-pwp.jpg'} alt="mockup-avatar" />
                    <div className="content">
                        <h4>
                            iemonasdam
                        </h4>
                        <h6>
                            Front-end Developer
                        </h6>
                        <div className="icon-social">
                            <img src={ICON_SOCIAL + 'twt.svg'} alt="icon_twitter" />
                            <a href='https://twitter.com/iemonasdam' target="_blank">@iemonasdam</a>
                        </div>
                    </div>
                </div>

                <div className="card-team"
                data-aos="flip-up" 
                data-aos-duration="1000"
                >
                    <img src={TEAM_AVATAR + 'demon-nta.jpg'} alt="mockup-avatar" />
                    <div className="content">
                        <h4>
                            moscatoz
                        </h4>
                        <h6>
                            Back-end Developer
                        </h6>
                        <div className="icon-social">
                            <img src={ICON_SOCIAL + 'twt.svg'} alt="icon_twitter" />
                            <a href='https://twitter.com/w3_moscato' target="_blank">@w3_moscato</a>
                        </div>
                    </div>
                </div>

                <div className="card-team"
                data-aos="flip-down" 
                data-aos-duration="1000"
                >
                    <img src={TEAM_AVATAR + 'demon-tpp.jpg'} alt="mockup-avatar" />
                    <div className="content">
                        <h4>
                            Hello world
                        </h4>
                        <h6>
                            Back-end Developer
                        </h6>
                        <div className="icon-social">
                            <img src={ICON_SOCIAL + 'twt.svg'} alt="icon_twitter" />
                            <a href='https://twitter.com/w3_Hello_World' target="_blank">@w3_Hello_World</a>
                        </div>
                    </div>
                </div>

                <div className="card-team"
                data-aos="flip-up" 
                data-aos-duration="1000"
                >
                    <img src={TEAM_AVATAR + 'demon-tww.jpg'} alt="mockup-avatar" />
                    <div className="content">
                        <h4>
                            startingrule
                        </h4>
                        <h6>
                            System Engineer
                        </h6>
                        <div className="icon-social">
                            <img src={ICON_SOCIAL + 'twt.svg'} alt="icon_twitter" />
                            <a href='https://twitter.com/rulestarting' target="_blank">@rulestarting</a>
                        </div>
                    </div>
                </div>


                
            </div>
        </div>
    )
}

export default Team