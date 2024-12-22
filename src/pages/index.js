import React from 'react'
import Roadmap from '../components/home/Roadmap'
import Team from '../components/home/Team';
import Contract from '../components/home/Contract';
import Banner from '../components/home/Banner';
import Mints from '../components/home/Mints';

function Home() {
    return (
        <div className='home-page' id="home">
            {/* INTRO SECTION */}
            <section className="intro">
                <Banner />

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

            <section className="mints">
                <Mints />
            </section>

            {/* ROAD MAP SECTION */}
            <section className="roadmap" id="roadmap">
                <Roadmap />
            </section>

            {/* INFO SECTION */}
            <section className="teams" id="team">
                <svg className='top' style={{transform: 'rotate(180deg) '}} viewBox="0 0 1440 300" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient id="sw-gradient-0" x1={0} x2={0} y1={1} y2={0}>
                            <stop stopColor="var(--theme-black1)" offset="0%" />
                            <stop stopColor="var(--theme-red1)" offset="100%" />
                        </linearGradient>
                    </defs>
                    <path style={{opacity: 1}} fill="url(#sw-gradient-0)" d="M0,270L60,90L120,240L180,270L240,240L300,60L360,210L420,120L480,0L540,180L600,60L660,0L720,150L780,90L840,240L900,120L960,90L1020,210L1080,270L1140,90L1200,120L1260,210L1320,30L1380,60L1440,0L1440,300L1380,300L1320,300L1260,300L1200,300L1140,300L1080,300L1020,300L960,300L900,300L840,300L780,300L720,300L660,300L600,300L540,300L480,300L420,300L360,300L300,300L240,300L180,300L120,300L60,300L0,300Z" />
                </svg>

                <Team />

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

            <section className="contract" id="contract">
                <Contract />
            </section>
        </div>
    )
}

export default Home