import React from 'react'
import LinkIcons from './LinkIcons'
import { IoIosMail } from "react-icons/io";
import { FaHeart } from 'react-icons/fa';
import { LiaCopyright } from "react-icons/lia";
import version1 from "../../../shared/data/version_history.json"
import sign from "../assets/footer_sign.png"

const Footer = ({ handleClick }) => {

    return (
        <div className='bg-carbonBlack px-5 md:px-10 lg:px-30 text-alabasterGrey selection:text-carbonBlack'>
            <div className="flex flex-col md:flex-row-reverse md:justify-between">
                <img
                    src={sign}
                    draggable='false'
                    className='aspect-auto w-30 md:w-85 md:scale-75 size pt-10'
                    loading='lazy'
                    fetchPriority='low'
                />

                <div className='mt-2 md:mt-10 2xl:mr-130'>
                    <p className='font-semibold text-lg lg:text-2xl'>Connect with me</p>
                    <div className='h-0.5 w-61 rounded-xl bg-alabasterGrey' />
                    <p className='flex gap-2 items-center pt-2 pb-1 text-lg lg:text-2xl'>
                        <IoIosMail className='text-lg lg:text-2xl' />
                        gauravkrdas19@gmail.com
                    </p>
                    <LinkIcons
                        iconSize='text-2xl'
                        toolTipLocation="bottom"
                        idName='0'
                        iconColor='text-alabasterGrey'
                        toolTipColor='bg-alabasterGrey! text-carbonBlack!'
                    />
                </div>

                <div className='flex items-start mt-10'>
                    <div>
                        <p className='font-semibold text-lg lg:text-2xl'>Site Map</p>
                        <div className='h-0.5 w-22 md:w-28 rounded-xl bg-alabasterGrey' />
                        <ui className="flex flex-col p-2 text-lg lg:text-2xl ">
                            <li onClick={() => handleClick(0)} className='cursor-pointer list-none'>Home</li>
                            <li onClick={() => handleClick(1)} className='cursor-pointer list-none'>Projects</li>
                            <li onClick={() => handleClick(2)} className='cursor-pointer list-none'>About</li>
                        </ui>
                    </div>
                    <div className='ml-15 xl:ml-20'>
                        <p className='font-semibold text-lg lg:text-2xl'>Version</p>
                        <div className='h-0.5 w-19.5 md:w-25 rounded-xl bg-alabasterGrey text-lg lg:text-2xl' />
                        <a href={version1.v_1}>
                            <p className='p-2'>1.0</p>
                        </a>
                    </div>
                </div>
            </div>

            <div className='py-5 md:pt-7 flex justify-center items-center gap-1 font-semibold'>
                <LiaCopyright className='text-xs md:text-base' />
                <p className='text-xs md:text-base'>2026, built with</p>
                <FaHeart className='text-secondary text-xs md:text-base' aria-label='love' />
                <p className='text-xs md:text-base'>by GAURAV KUMAR DAS</p>
            </div>
        </div>
    )
}

export default Footer