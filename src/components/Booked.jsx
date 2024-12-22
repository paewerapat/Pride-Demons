import React from 'react'
import FadeIn from 'react-fade-in';
import Lottie from "lottie-react";
import booked from '../lotties/booked.json'

function Booked() {
    return (
        <FadeIn className='booked-success'>
            <Lottie 
                animationData={booked} 
                loop={false}
                height={200} 
                width={200} 
            />
        </FadeIn>
    )
}

export default Booked