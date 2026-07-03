import React from 'react'
import LinkIcons from '../LinkIcons'
import aboutPic from '../../assets/aboutPic.jpg'


const LeftInfo = () => {
    return (
        <div className='w-full lg:w-1/3 lg:h-full flex justify-center items-center flex-col md:flex-row lg:flex-col lg:pl-15 pt-8 lg:pt-4'>
            <div className='rounded-full scale-70 lg:scale-100 w-80 h-80 overflow-hidden border-8 border-secondary shadow-[0_0_6px_rgba(0,0,0,0.8)] relative'>
                <img
                    src={aboutPic}
                    alt="Profile"
                    className="absolute left-2 w-full h-full object-cover scale-110"
                    draggable="false"
                />
            </div>
            <div className='-mt-8 lg:mt-6'>
                <p className='text-secondary font-semibold text-center text-3xl'>Gaurav Kumar Das</p>
                <p className='text-primaryAccent font-light text-center text-md'>gauravkrdas19@gmail.com</p>
                <p className='text-primaryAccent leading-2 font-semibold text-center mb-4'>Assam, India</p>
                <div className='flex justify-center'>
                    <LinkIcons iconSize='text-3xl' toolTipLocation="bottom" idName='1' />
                </div>
            </div>
        </div>
    )
}

export default LeftInfo