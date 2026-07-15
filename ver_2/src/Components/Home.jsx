import React from 'react'
import landingImage from '../assets/Profile_HTimage.png'
import mobileRect from '../assets/mobile_rect.png'
import MobileHeroImage from './Home/MobileHeroImage'
import Typing from './Home/Typing';
import cv from '../../../shared/CV_GauravKrDas.pdf'
import LinkIcons from './LinkIcons';

const Home = () => {
    return (
        <div className='px-5 md:px-10 lg:px-30 mt-8'>
            <MobileHeroImage image={landingImage} />

            <div className="relative flex flex-col justify-center items-center mt-8 text-carbonBlack">
                <img
                    src={mobileRect}
                    className='absolute top-8.5 scale-130'
                    fetchPriority='high'
                    loading='eager'
                    draggable='false'
                />
                <p className='font-extrabold text-[69px] z-2 leading-8'>GAURAV</p>
                <p className='text-3xl tracking-[13px] pl-2 leading-14 z-2'>KUMAR DAS</p>
            </div>

            <Typing />

            <button
                className='bg-carbonBlack text-alabasterGrey w-full py-3 rounded-lg mt-2 mb-4 font-semibold lowercase text-lg'
                onClick={() => window.open(cv)}
            >
                DOWNLOAD MY RESUME
            </button>

            <LinkIcons
            idName={1}
            toolTipLocation={'bottom'}
            iconSize={'text-3xl'}
            />
        </div>
    )
}

export default Home