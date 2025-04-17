import React from 'react'
import { MdOutlineScreenshotMonitor } from "react-icons/md";

const Footer = () => {

    return (
        <div className='relative bg-primary h-40 p-4 flex'>
            <div className='h-full w-1/4 bg-green-300'></div>
            <div className='h-full w-2/4 bg-blue-400'></div>
            <div className='h-full w-1/4 relative'>
                <div className='text-primaryAccent text-sm absolute bottom-0 right-0 flex items-center'>
                    <MdOutlineScreenshotMonitor />
                    <span className='pl-1'>{window.innerWidth}x{window.innerHeight}</span>
                </div>
            </div>
        </div>
    )
}

export default Footer