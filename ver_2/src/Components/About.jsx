import React from 'react'
import Image from './About/Image'

const About = () => {
    return (
        <div className='flex flex-col lg:flex-row gap-4 pt-20 md:pt-30 px-5 h-fit'>
            <Image />
            <div className="">right</div>
        </div>
    )
}

export default About