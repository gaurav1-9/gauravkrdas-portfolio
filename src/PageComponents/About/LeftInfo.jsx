import React from 'react'
import LinkIcons from '../LinkIcons'
import aboutPic from '../../assets/aboutPic.jpg'


const LeftInfo = () => {
    return (
        <div className='w-1/3 h-full flex justify-center items-center flex-col pl-15 pt-4'>
            <div className='rounded-full w-80 h-80 overflow-hidden border-8 border-secondary shadow-[0_0_6px_rgba(0,0,0,0.8)] relative'>
                <img
                    src={aboutPic}
                    alt="Profile"
                    className="absolute left-32 bottom-25 w-full h-full object-cover scale-350"
                    draggable="false"
                />
            </div>
            <div className='mt-6 mb-4'>
                <p className='text-secondary font-semibold text-center text-3xl'>Gaurav Kumar Das</p>
                <p className='text-primaryAccent font-light text-center text-md'>gauravkrdas19@gmail.com</p>
                <p className='text-primaryAccent leading-2 font-semibold text-center'>Assam, India</p>
            </div>
            <LinkIcons iconSize='text-3xl' toolTipLocation="bottom" idName='1' />
        </div>
    )
}

export default LeftInfo