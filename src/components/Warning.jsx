import React from 'react'
import FadeIn from 'react-fade-in';
import warningJSON from '../lotties/warning.json'
import Lottie from "lottie-react";

function Warning() {
    return (
        <FadeIn>
            <Lottie 
                animationData={warningJSON}
                loop={true}
                height={200} 
                width={200} 
            />
        </FadeIn>
    )
}

export default Warning