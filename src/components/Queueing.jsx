import React from 'react'
import FadeIn from 'react-fade-in';
import Lottie from "lottie-react";
import queueing from '../lotties/queueing.json'

function Queueing() {
    return (
        <FadeIn className='queueing-loading'>
            <Lottie 
                animationData={queueing} 
                loop={true} 
                height={200}
                width={200}
            />
        </FadeIn>
    )
}

export default Queueing