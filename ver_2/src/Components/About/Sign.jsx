import React from 'react'
import about_sign from '../../assets/about_sign.png'

const Sign = () => {
    return (
        <div className='relative md:w-30 lg:w-full'>
            <img
                src={about_sign}
                className='absolute left-22 md:-left-17 lg:left-20 2xl:left-28 -bottom-2 md:bottom-3 lg:-bottom-4 2xl:-bottom-20 -rotate-15 z-50 scale-70 md:scale-210 lg:scale-60 2xl:scale-60'
                draggable='false'
            />
        </div>
    )
}

export default Sign