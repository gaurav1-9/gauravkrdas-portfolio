import React from 'react'
import about_sign from '../../assets/about_sign.png'

const Sign = () => {
    return (
        <div className='relative md:w-30 lg:w-full'>
            <img
                src={about_sign}
                className='absolute left-22 md:-left-17 lg:left-20 2xl:left-25 -bottom-2 md:bottom-3 lg:-bottom-3 2xl:-bottom-13 -rotate-15 z-50 scale-70 md:scale-210 lg:scale-70 2xl:scale-100'
                draggable='false'
            />
        </div>
    )
}

export default Sign