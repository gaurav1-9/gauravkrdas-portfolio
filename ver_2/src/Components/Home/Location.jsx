import React from 'react'
import { FaLocationDot } from "react-icons/fa6";

const Location = ({ textColor='text-carbonBlack', fontSize = 'text-base md:text-5xl'}) => {
    return (
        <div className={`${textColor} flex justify-center items-center gap-1 md:gap-3 ${fontSize} cursor-default`}>
            <FaLocationDot/>
            <span>Guwahati, Assam</span>
        </div>
    )
}

export default Location