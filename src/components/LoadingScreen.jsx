import React from 'react'
import FadeIn from 'react-fade-in';
import Lottie from "lottie-react";
import loadingJSON from '../lotties/lightning.json'


function LoadingScreen() {
    return (
        <FadeIn className='loading-screen'>
            <Lottie animationData={loadingJSON} loop={true} />
        </FadeIn>
    )
}

export default LoadingScreen