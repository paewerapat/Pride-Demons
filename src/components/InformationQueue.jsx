import React from 'react'
import FadeIn from 'react-fade-in';
import Lottie from "lottie-react";
import information from '../lotties/information.json'

function InformationQueue() {
    return (
        <FadeIn style={{objectFit: 'cover'}}>
            <Lottie 
                animationData={information} 
                loop={true} 
                height={'200px'}
                width={'200px'}
            />
        </FadeIn>
    )
}

export default InformationQueue