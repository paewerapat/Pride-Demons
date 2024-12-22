import React from 'react'
import { motion } from 'framer-motion'

function Roadmap() {
    return (
        <div className="container roadmap">
            <h2 data-aos="flip-right" 
            data-aos-easing="ease-out-cubic" 
            data-aos-duration="1000"
            >
                <motion.div
                animate={{ 
                    y: 0,
                    translateY: [-5, -20, -5],
                }}
                transition={{ duration: 2, repeat: Infinity}}
                >
                    <i className="fa-solid fa-road"/><br/>
                </motion.div>
                ROADMAP
            </h2>
            <div className="timeline">
                <div className="timeline-row"
                    data-aos="fade-right"
                >
                    <div className="timeline-time">
                        Phase 1
                        <small>2022</small>
                    </div>
                    <div className="timeline-content">
                        <i className="icon-attachment" />
                        <h4>Pride Demon NFT Launch.</h4>
                        <p>
                            A Collection of genarative NFT profile picture from a shadow artist. This collection will be the main past of the NFT related platform {`{w3}`} will develop.
                        </p>
                        {/* <div className="thumbs">
                            <img className="img-fluid rounded" src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="Maxwell Admin" />
                            <img className="img-fluid rounded" src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="Maxwell Admin" />
                            <img className="img-fluid rounded" src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="Maxwell Admin" />
                        </div> */}
                    </div>
                </div>

                <div className="timeline-row"
                    data-aos="fade-left"
                >
                    <div className="timeline-time">
                        Phase 2
                        <small>2022</small>
                    </div>
                    <div className="timeline-content">
                        <i className="icon-code" />
                        <h4>
                            Airdrop
                        </h4>
                        <p>
                            Something related to the pride demons airdrop to all Pride Demons NFT holder.
                        </p>
                        {/* <div className="thumbs">
                            <div className="thumbs">
                                <img className="img-fluid rounded" src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="Maxwell Admin" />
                                <img className="img-fluid rounded" src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="Maxwell Admin" />
                                <img className="img-fluid rounded" src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="Maxwell Admin" />
                            </div>
                        </div> */}
                    </div>
                </div>

                <div className="timeline-row"
                    data-aos="fade-right"
                >
                    <div className="timeline-time">
                        Phase 3
                        <small>2022 - 2023</small>
                    </div>
                    <div className="timeline-content">
                        <i className="icon-turned_in_not" />
                        <h4>
                            {`{w3} G U I L D ;`} opening
                        </h4>
                        <p >
                            {`{w3}`} formming new parties to join the guild and explore more into web3 world.
                        </p>
                    </div>
                </div>

                <div className="timeline-row"
                    data-aos="fade-left"
                >
                    <div className="timeline-time">
                        Phase 4
                        <small>2023</small>
                    </div>
                    <div className="timeline-content">
                        <i className="icon-directions" />
                        <h4>
                            NFT platforms launch
                        </h4>
                        <p className='text-end'>
                            {`{w3}`} will luanch our NFT platforms and provide more utilities for Pride Demons NFT holder.
                        </p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Roadmap