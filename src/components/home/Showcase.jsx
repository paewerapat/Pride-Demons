import React from 'react'
import cryptoPunk from '../../images/cryptopunks.png'
import { Pagination, Navigation } from "swiper";
// core version + navigation, pagination modules:
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ReadMore from '../ReadMore';
import Image from 'next/image'

function Showcase() {
    return (
        <section className="showcase">
            <svg className='top' style={{transform: 'rotate(180deg) translateY(1px)'}} viewBox="0 0 1440 300" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="sw-gradient-0" x1={0} x2={0} y1={1} y2={0}>
                        <stop stopColor="var(--theme-black1)" offset="0%" />
                        <stop stopColor="var(--theme-red1)" offset="100%" />
                    </linearGradient>
                </defs>
                <path style={{opacity: 1}} fill="url(#sw-gradient-0)" d="M0,270L60,90L120,240L180,270L240,240L300,60L360,210L420,120L480,0L540,180L600,60L660,0L720,150L780,90L840,240L900,120L960,90L1020,210L1080,270L1140,90L1200,120L1260,210L1320,30L1380,60L1440,0L1440,300L1380,300L1320,300L1260,300L1200,300L1140,300L1080,300L1020,300L960,300L900,300L840,300L780,300L720,300L660,300L600,300L540,300L480,300L420,300L360,300L300,300L240,300L180,300L120,300L60,300L0,300Z" />
            </svg>
            <div className="row justify-content-center">
                <div className="title" data-aos="flip-left" data-aos-duration="1000" >
                    <h2>Showcase of</h2>
                    <h3><i className="fa-solid fa-images collection-icon" /> Collection</h3>
                </div>
                <div className="col-md-8" 
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-easing="linear"
                >
                    <div className="modal-showcase">
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={30}
                            loop={true}
                            pagination={{
                            clickable: true,
                            }}
                            navigation={true}
                            modules={[Pagination, Navigation]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <Image src={cryptoPunk} alt="cryptoPunk" layout='responsive' />
                                <h4>
                                    <ReadMore limit={100}>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt odio nihil accusantium minima consequatur rem repudiandae aliquid tenetur praesentium consectetur!
                                    </ReadMore>
                                </h4>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image src={cryptoPunk} alt="cryptoPunk" layout='responsive' />
                                <h4>
                                    <ReadMore limit={120}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, corrupti.
                                    </ReadMore>
                                </h4>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image src={cryptoPunk} alt="cryptoPunk" layout='responsive' />
                                <h4>
                                    <ReadMore limit={150}>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, dicta.
                                    </ReadMore>
                                </h4>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>

            <div className="row justify-content-center text-center pb-5 gap-2 align-items-center">
                <div className="col-md-4">
                    <div className="total-info" data-aos="fade-up">
                        <h1>1000</h1>
                        <h3>
                            Total Demon Prides NFTs
                        </h3>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="total-info" data-aos="fade-up">
                        <h1>0.0001 ETH</h1>
                        <h3>
                            Price per Mint
                        </h3>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="total-info" data-aos="fade-up">
                        <h1>100K++</h1>
                        <h3>
                            Potential Trait Combinations
                        </h3>
                    </div>
                </div>
            </div>
            <svg className='bottom' style={{transform: 'rotate(0deg)', transition: '0.3s'}} viewBox="0 0 1440 300" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="sw-gradient-0" x1={0} x2={0} y1={1} y2={0}>
                        <stop stopColor="var(--theme-black1)" offset="0%" />
                        <stop stopColor="var(--theme-red1)" offset="100%" />
                    </linearGradient>
                </defs>
                <path style={{opacity: 1}} fill="url(#sw-gradient-0)" d="M0,270L60,90L120,240L180,270L240,240L300,60L360,210L420,120L480,0L540,180L600,60L660,0L720,150L780,90L840,240L900,120L960,90L1020,210L1080,270L1140,90L1200,120L1260,210L1320,30L1380,60L1440,0L1440,300L1380,300L1320,300L1260,300L1200,300L1140,300L1080,300L1020,300L960,300L900,300L840,300L780,300L720,300L660,300L600,300L540,300L480,300L420,300L360,300L300,300L240,300L180,300L120,300L60,300L0,300Z" />
            </svg>
        </section>
    )
}

export default Showcase