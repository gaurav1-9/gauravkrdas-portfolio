import React from 'react'
import LeftInfo from './LeftInfo'
import RightInfo from './RightInfo'

const About = () => {
    return (
        <div className="w-full h-fit lg:h-screen flex flex-col lg:flex-row mb-5">
            <LeftInfo />
            <RightInfo />
        </div>
    )
}

export default About