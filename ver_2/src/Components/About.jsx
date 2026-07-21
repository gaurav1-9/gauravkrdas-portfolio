import React from 'react'
import Image from './About/Image'
import LinkIcons from './LinkIcons'
import Sign from './About/Sign'

const About = () => {
    return (
        <div className='flex flex-col lg:flex-row pt-20 md:pt-30 px-5 h-screen lg:h-screen'>
            <div className='flex flex-col md:flex-row lg:flex-col'>
                <Image />
                <Sign />
                <div className="relative flex flex-col justify-center items-center md:-ml-3">
                    <p className='text-crimsonCarrot font-semibold text-2xl md:text-4xl py-2'>Gaurav Kumar Das</p>
                    <p className='text-carbonBlack/60 font-semibold text-base md:text-xl leading-2'>gauravkrdas19@gmail.com</p>
                    <p className='text-carbonBlack font-semibold text-base md:text-xl pt-1 pb-3'>Guwahati, Assam</p>
                    <div className="flex justify-center">
                        <LinkIcons
                            idName={1}
                            toolTipLocation={'bottom'}
                            iconSize={'text-3xl md:text-5xl lg:text-3xl msi:text-4xl'}
                            gap='gap-5'
                        />
                    </div>
                </div>
            </div>

            <div className="mt-5 md:mt-20 px-5 md:px-10 lg:px-30">right</div>
        </div>
    )
}

export default About