import React from 'react'
import LinkIcons from './LinkIcons'
import { IoIosMail } from "react-icons/io";
import { FaHeart } from 'react-icons/fa';
import { LiaCopyright } from "react-icons/lia";
import version1 from "../../../shared/data/version_history.json"

const Footer = () => {

    return (
        <div className='bg-carbonBlack px-5 lg:px-30 text-alabasterGrey selection:text-carbonBlack'>
            <div className="flex flex-col lg:flex-row-reverse lg:justify-between">
                <img
                    src="footer_sign.png"
                    draggable='false'
                    className='w-30 lg:w-80 pt-10'
                />

                <div className='mt-2 lg:mt-10 xl:mr-25 2xl:mr-130'>
                    <p className='font-semibold text-xl'>Connect with me</p>
                    <div className='h-0.5 w-61 rounded-xl bg-alabasterGrey' />
                    <p className='flex gap-2 items-center pt-2 pb-1'>
                        <IoIosMail className='text-xl' />
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
                        <p className='font-semibold text-xl'>Site Map</p>
                        <div className='h-0.5 w-23 rounded-xl bg-alabasterGrey' />
                        <div className="flex flex-col p-2">
                            <p>Home</p>
                            <p>Projects</p>
                            <p>About</p>
                        </div>
                    </div>
                    <div className='ml-15 xl:ml-25'>
                        <p className='font-semibold text-xl'>Version</p>
                        <div className='h-0.5 w-19.5 rounded-xl bg-alabasterGrey' />
                        <a href={version1.v_1}>
                            <p className='p-2'>1.0</p>
                        </a>
                    </div>
                </div>
            </div>

            <div className='py-5 lg:pt-7 flex justify-center items-center gap-1 font-semibold'>
                <LiaCopyright className='text-xs lg:text-base' />
                <p className='text-xs lg:text-base'>2026, built with</p>
                <FaHeart className='text-secondary text-xs lg:text-base' aria-label='love' />
                <p className='text-xs lg:text-base'>by GAURAV KUMAR DAS</p>
            </div>
        </div>
    )
}

export default Footer