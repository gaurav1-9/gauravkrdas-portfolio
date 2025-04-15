import React from 'react'
import aboutPic from '../../assets/aboutPic.jpg'
import LeftInfo from './LeftInfo'

const About = () => {
    return (
        <div className="w-full h-screen flex">
            <LeftInfo/>
            <div className='bg-green-600 h-full w-2/3'></div>
        </div>
    )
}

export default About