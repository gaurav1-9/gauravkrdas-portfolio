import React from 'react'
import { FaLocationDot } from "react-icons/fa6";

const Location = ({ textColor='text-carbonBlack', fontSize = 'text-base'}) => {
    return (
        <div className={`${textColor} flex justify-center items-center gap-1 ${fontSize} cursor-default`}>
            <FaLocationDot/>
            <span>Guwahati, Assam</span>
        </div>
    )
}

export default Location