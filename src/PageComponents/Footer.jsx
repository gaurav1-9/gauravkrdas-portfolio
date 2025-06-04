import React from 'react'
import { FaHeart } from "react-icons/fa";
import { LiaCopyright } from "react-icons/lia";

const Footer = () => {
    const year = new Date().getFullYear()

    return (
        <div className='bg-primary h-1/12 p-4 flex justify-center items-center'>
            <div className='flex items-center gap-1 text-primaryAccent'>
                <LiaCopyright className='text-xs lg:text-base'/>
                <p className='text-xs lg:text-base'>{year}, built with</p>
                <FaHeart className='text-secondary text-xs lg:text-base' aria-label='love' />
                <p className='text-xs lg:text-base'>by GAURAV KUMAR DAS</p>
            </div>
        </div>
    )
}

export default Footer