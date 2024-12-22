import React from 'react'
import Avatar from '../../images/avatar/avatar1.png';

function TopMember() {

    const PUBLIC_URL = process.env.PUBLIC_URL + '/icon/'

    return (
        <div className='container-topmember'>
            <div className="wrapper">
                <div className="title">
                    <h2>Top Members</h2>
                    <img src={PUBLIC_URL + 'king.svg'} alt="" 
                        data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom"
                        data-aos-duration="1500"
                    />
                </div>
                <div className="member"
                    data-aos="zoom-in"
                >
                    <div className="card-member">
                        <h5>
                            1.
                        </h5>
                        <img src={Avatar} alt="mockup-avatar" />
                        <div className="detail-member">
                            <h6>Lorem ipsum dolor sit amet.</h6>
                            <p>5.2 ETH</p>
                        </div>
                    </div>
                    <div className="card-member">
                        <h5>
                            2.
                        </h5>
                        <img src={Avatar} alt="mockup-avatar" />
                        <div className="detail-member">
                            <h6>Lorem ipsum dolor sit amet.</h6>
                            <p>5.2 ETH</p>
                        </div>
                    </div>
                    <div className="card-member">
                        <h5>
                            3.
                        </h5>
                        <img src={Avatar} alt="mockup-avatar" />
                        <div className="detail-member">
                            <h6>Lorem ipsum dolor sit amet.</h6>
                            <p>5.2 ETH</p>
                        </div>
                    </div>
                    <div className="card-member">
                        <h5>
                            4.
                        </h5>
                        <img src={Avatar} alt="mockup-avatar" />
                        <div className="detail-member">
                            <h6>Lorem ipsum dolor sit amet.</h6>
                            <p>5.2 ETH</p>
                        </div>
                    </div>
                    <div className="card-member">
                        <h5>
                            5.
                        </h5>
                        <img src={Avatar} alt="mockup-avatar" />
                        <div className="detail-member">
                            <h6>Lorem ipsum dolor sit amet.</h6>
                            <p>5.2 ETH</p>
                        </div>
                    </div>
                    <div className="card-member">
                        <h5>
                            6.
                        </h5>
                        <img src={Avatar} alt="mockup-avatar" />
                        <div className="detail-member">
                            <h6>Lorem ipsum dolor sit amet.</h6>
                            <p>5.2 ETH</p>
                        </div>
                    </div>
                    <div className="card-member">
                        <h5>
                            7.
                        </h5>
                        <img src={Avatar} alt="mockup-avatar" />
                        <div className="detail-member">
                            <h6>Lorem ipsum dolor sit amet.</h6>
                            <p>5.2 ETH</p>
                        </div>
                    </div>
                    <div className="card-member">
                        <h5>
                            8.
                        </h5>
                        <img src={Avatar} alt="mockup-avatar" />
                        <div className="detail-member">
                            <h6>Lorem ipsum dolor sit amet.</h6>
                            <p>5.2 ETH</p>
                        </div>
                    </div>
                    <div className="card-member">
                        <h5>
                            9.
                        </h5>
                        <img src={Avatar} alt="mockup-avatar" />
                        <div className="detail-member">
                            <h6>Lorem ipsum dolor sit amet.</h6>
                            <p>5.2 ETH</p>
                        </div>
                    </div>
                    <div className="card-member">
                        <h5>
                            10.
                        </h5>
                        <img src={Avatar} alt="mockup-avatar" />
                        <div className="detail-member">
                            <h6>Lorem ipsum dolor sit amet.</h6>
                            <p>5.2 ETH</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopMember