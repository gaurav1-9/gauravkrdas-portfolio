import React from 'react'
import landingImage from '../assets/Profile_HTimage.png'
import mobileRect from '../assets/mobile_rect.png'
import desktopRect from '../assets/desktop_rect.png'
import MobileHeroImage from './Home/MobileHeroImage'
import Typing from './Home/Typing';
import cv from '../../../shared/CV_GauravKrDas.pdf'
import LinkIcons from './LinkIcons';
import Name from './Home/Name'
import Location from './Home/Location'

const Home = () => {
    return (
        <div className='px-5 md:px-10 lg:px-30 mt-8 md:mt-30'>

            <MobileHeroImage image={landingImage} />

            <div className='hidden lg:flex absolute left-0 w-full h-full top-0 overflow-clip pointer-events-none'>
                <div className="absolute top-6 md:left-10 lg:left-30">
                    <Location
                        textColor={'text-carbonBlack'}
                        fontSize='lg:text-xl msi:text-2xl'
                    />
                </div>
                <img
                    src={landingImage}
                    className='z-100 scale-110 2xl:scale-120 absolute -top-6 2xl:-top-10 lg:-right-40 msi:-right-50 h-screen'
                />
            </div>

            <Name
                mobileRect={mobileRect}
                desktopRect={desktopRect}
            />

            <Typing
                textSize={'text-xl md:text-5xl lg:text-4xl'}
                margin={'mt-12 md:mt-17 lg:-mt-10 msi:-mt-6 2xl:mt-0'}
            />

            <button
                className='bg-carbonBlack text-alabasterGrey w-full lg:w-150 py-3 md:py-8 lg:py-3 rounded-lg md:rounded-xl lg:rounded-lg mt-2 mb-4 font-semibold lowercase text-lg md:text-3xl lg:text-2xl cursor-pointer hover:bg-carbonBlack/92'
                onClick={() => window.open(cv)}
            >
                DOWNLOAD MY RESUME
            </button>

            <LinkIcons
                idName={1}
                toolTipLocation={'bottom'}
                iconSize={'text-3xl md:text-5xl lg:text-3xl msi:text-4xl'}
                gap='gap-3 md:gap-5 lg:gap-4 msi:gap-5'
            />
        </div>
    )
}

export default Home