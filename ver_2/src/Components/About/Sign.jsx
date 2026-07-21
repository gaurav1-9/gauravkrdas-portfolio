import React from 'react'
import about_sign from '../../assets/about_sign.png'

const Sign = () => {
    return (
        <div className='relative md:w-30 lg:w-full'>
            <img
                src={about_sign}
                className='left-22 md:-left-17 absolute -bottom-2 md:bottom-3 -rotate-15 z-50 scale-70 md:scale-210 lg:scale-100'
                draggable='false'
            />
        </div>
    )
}

export default Sign