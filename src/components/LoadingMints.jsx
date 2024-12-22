import React from 'react'
import FadeIn from 'react-fade-in';
import Lottie from "lottie-react";
import randomJSON from '../lotties/random.json'


function LoadingMints() {
    return (
        <FadeIn className='loading-mints'>
            <Lottie animationData={randomJSON} loop={true} />
        </FadeIn>
    )
}

export default LoadingMints