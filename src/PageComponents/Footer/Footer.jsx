import React from 'react'
import { MdOutlineScreenshotMonitor } from "react-icons/md";
import { FaMobileScreen } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { LiaCopyright } from "react-icons/lia";

const Footer = () => {
    const width = window.innerWidth;
    const height = window.innerHeight
    const year = new Date().getFullYear()

    return (
        <div className='relative bg-primary h-1/12 p-4 flex items-center'>
            <div className='flex items-center gap-1 text-primaryAccent'>
                <LiaCopyright />
                <p>{year}, built with</p>
                <FaHeart className='text-secondary' aria-label='love' />
                <p>by GAURAV KUMAR DAS</p>
            </div>

            <div className='text-primaryAccent text-sm absolute right-5 flex items-center'>
                {(width > 640) ? <MdOutlineScreenshotMonitor /> : <FaMobileScreen />}
                <span className='pl-1'>{width}x{height}</span>
            </div>
        </div>
    )
}

export default Footer