import React from 'react'
import Typing from './Typing'
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Tooltip } from 'react-tooltip';

function Welcome() {
  return (
    <>
        <div className='mx-8 mt-6'>
            <p className='font-light text-primary mb-2'>Hello,</p>
            <p className='text-3xl font-extralight text-primary leading-5'>I'm <span className='text-secondary font-semibold'>GAURAV.</span></p>
            <Typing/>
            <p className='text-xl font-light text-primary leading-3'>based in Assam</p>
        </div>
        <div className='mx-8 mt-10'>
            <div className='w-26 leading-1 flex justify-between items-center'>
                <span className='text-primary text-[10px] font-semibold'>LET'S TALK</span>
                <div className='flex gap-1 text-primary text-xs'>
                    <a href="https://www.instagram.com/gaurav1_9/">
                        <FaInstagram data-tooltip-id="insta" className='cursor-pointer hover:text-secondary'/>
                    </a>
                    <a href="https://github.com/gaurav1-9">
                        <FaGithub data-tooltip-id="github" className='cursor-pointer hover:text-secondary'/>
                    </a>
                    <a href="https://www.linkedin.com/in/gaurav-kumar-das/">
                        <FaLinkedinIn data-tooltip-id="linkedin" className='cursor-pointer hover:text-secondary'/>
                    </a>
                    <Tooltip
                        id="insta"
                        place="top"
                        content="Instagram"
                        className='!text-[10px] !px-1 !py-0.5 !pb-1'
                    />
                    <Tooltip
                        id="github"
                        place="top"
                        content="Github"
                        className='!text-[10px] !px-1 !py-0.5 !pb-1'
                    />
                    <Tooltip
                        id="linkedin"
                        place="top"
                        content="LinkedIn"
                        className='!text-[10px] !px-1 !py-0.5 !pb-1'
                    />
                </div>
            </div>
            <button className='rounded-sm px-2 py-1 text-back text-[8px] font-semibold cursor-pointer bg-primary hover:bg-primary/90 hover:scale-[1.02] ease-in duration-200'>DOWNLOAD MY RESUME</button>
        </div>
    </>
  )
}

export default Welcome