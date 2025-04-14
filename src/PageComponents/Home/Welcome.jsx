import React from 'react'
import Typing from './Typing'
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { BiLogoBlender } from "react-icons/bi";
import { Tooltip } from 'react-tooltip';

function Welcome() {
  return (
    <>
        <div className='mx-24 pt-18'>
            <p className='font-light text-primary mb-5 text-5xl'>Hello,</p>
            <p className='text-7xl font-extralight text-primary leading-16'>I'm <span className='text-secondary font-semibold'>GAURAV.</span></p>
            <Typing/>
            <p className='text-5xl font-light text-primary leading-12'>based in Assam</p>
        </div>
        <div className='mx-24 mt-24'>
            <div className='w-66 leading-2 flex justify-between items-center'>
                <span className='text-primary text-2xl font-semibold'>LET'S TALK</span>
                <div className='flex gap-2 text-primary text-xs'>
                    <a href="https://www.instagram.com/gaurav1_9/" target="_blank" rel="noopener noreferrer">
                        <FaInstagram data-tooltip-id="insta" className='outline-none text-2xl cursor-pointer hover:text-secondary'/>
                    </a>
                    <a href="https://github.com/gaurav1-9" target="_blank" rel="noopener noreferrer">
                        <FaGithub data-tooltip-id="github" className='outline-none text-2xl cursor-pointer hover:text-secondary'/>
                    </a>
                    <a href="https://www.linkedin.com/in/gaurav-kumar-das/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedinIn data-tooltip-id="linkedin" className='outline-none text-2xl cursor-pointer hover:text-secondary'/>
                    </a>
                    <a href="https://www.instagram.com/argkd_/" target="_blank" rel="noopener noreferrer">
                        <BiLogoBlender data-tooltip-id="argkd" className='outline-none text-2xl cursor-pointer hover:text-secondary'/>
                    </a>
                    <Tooltip
                        id="insta"
                        place="top"
                        content="Instagram"
                        className='!text-xl !rounded-lg'
                    />
                    <Tooltip
                        id="github"
                        place="top"
                        content="Github"
                        className='!text-xl !rounded-lg'
                    />
                    <Tooltip
                        id="linkedin"
                        place="top"
                        content="LinkedIn"
                        className='!text-xl !rounded-lg'
                    />
                    <Tooltip
                        id="argkd"
                        place="top"
                        content="3D Renders"
                        className='!text-xl !rounded-lg'
                    />
                </div>
            </div>
            <button className='rounded-lg px-6 py-2 text-back text-xl font-semibold cursor-pointer bg-primary hover:bg-primary/90 hover:scale-[1.02] ease-in duration-200 selection:text-primary'>DOWNLOAD MY RESUME</button>
        </div>
    </>
  )
}

export default Welcome