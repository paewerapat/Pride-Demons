import React from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import Image from 'next/image'

function Banner() {

    const valueX = useMotionValue(2000)
    const valueY = useMotionValue(2000)

    const rotateX = useTransform(valueY, [0, 1920], [24, -24])
    const rotateY = useTransform(valueX, [0, 1080], [-24, 24])

    function handleMouse(event) {
        valueX.set(event.pageX)
        valueY.set(event.pageY)
    }

    return (
        <div className='banner'
        onMouseMove={handleMouse} style={{perspective: 1500}}>
            <div className="text-header">
                <motion.img
                    style={{
                        rotateX: rotateX,
                        rotateY: rotateY
                    }}
                    className='left-mockup'
                    whileHover={{ scale: 1.2 }} transition={{ duration: 1 }}
                    src={'/images/pd-logo.png'} alt="pd-logo" 
                >
                </motion.img>
                
                <h1>PRIDEEE</h1>
                <h2>DEMONS</h2>
            </div>

            <motion.img
                style={{
                    rotateX: rotateX,
                    rotateY: rotateY
                }}
                whileHover={{ scale: 1.2 }} transition={{ duration: 1 }}
                src={'/images/sneakpeak.svg'} alt="pd-logo" 
                    className='mockup-banner' 
            >
            </motion.img>

            <div className="text-title"
            >
                <h2>WHO WE ARE?</h2>
                <h5>
                Pride Demons NFT is #DevDriven NFT project, an NFT collection of generative demon profile picture arts from a shadow artist and {`{w3}`} G U I L D ; team;
                </h5>
                <motion.button type='button' className='read-more' 
                    onClick={() => window.location.href = "#roadmap"}
                    whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9}}
                >
                    <i className="fa-solid fa-angles-down"/> Read more
                </motion.button>
            </div>
        </div>
    )
}

export default Banner