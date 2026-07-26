import React from 'react'

const MarqueeTag = () => {
    return (
        <div className="w-25 flex justify-center items-center relative h-6">
            <div className="w-full h-full absolute top-0 left-0 bg-linear-to-r from-alabasterGrey via-transparent to-alabasterGrey z-10"></div>
            <marquee className='text-crimsonCarrot font-bold z-1 tracking-wider'>WHO I AM!</marquee>
        </div>
    )
}

export default MarqueeTag