import React from 'react'
import TabbedInfo from './TabbedInfo'

const RightInfo = () => {
    return (
        <div className='lg:h-full w-full lg:w-2/3 pt-6 md:pt-0 lg:pt-26 px-6 md:px-20 lg:pl-12 text-center lg:text-justify'>
            <div className="lg:w-3xl">
                <p className="font-light text-md lg:text-xl leading-4 lg:leading-6 text-primary">
                    Hey there! I'm <span className="text-secondary font-semibold">Gaurav Kumar Das</span>, a 23-year-old passionate coder from Assam, India. I specialize in <span className="font-medium italic">Python</span>, <span className="font-medium italic">full-stack web development</span>, and <span className="font-medium italic">Android development</span>.
                    I love building meaningful, interactive projects and have hands-on experience with <span className="italic font-medium">REST APIs, building Chatbots</span> and solving <span className="italic font-medium">challenging coding problems</span> that push my skills.
                </p>
                <p className="font-light text-lg lg:text-xl leading-4 lg:leading-6 mt-2 text-primary">
                    I'm especially passionate about backend development, creative 3D modeling, and turning ideas into real-world solutions that make a difference.
                </p>
            </div>
            <TabbedInfo/>
        </div>
    )
}

export default RightInfo