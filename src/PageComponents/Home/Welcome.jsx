import React from 'react'
import Typing from './Typing'
import LinkIcons from '../LinkIcons';

function Welcome() {
    return (
        <>
            <div className='mx-24 pt-18'>
                <p className='font-light text-primary mb-5 text-5xl'>Hello,</p>
                <p className='text-7xl font-extralight text-primary leading-16'>I'm <span className='text-secondary font-semibold'>GAURAV.</span></p>
                <Typing />
                <p className='text-5xl font-light text-primary leading-12'>based in Assam</p>
            </div>
            <div className='mx-24 mt-24'>
                <div className='w-66 leading-2 flex justify-between items-center'>
                    <span className='text-primary text-2xl font-semibold'>LET'S TALK</span>
                    <LinkIcons iconSize='text-2xl' toolTipLocation="top" idName='0'/>
                </div>
                <a href="/CV_of_Gaurav_Kumar_Das.pdf" download="Gaurav_CV.pdf">
                    <button className='rounded-lg px-6 py-2 text-back text-xl font-semibold pointer bg-primary hover:bg-primary/90 hover:scale-[1.02] ease-in duration-200 selection:text-primary'>DOWNLOAD MY RESUME</button>
                </a>
            </div>
        </>
    )
}

export default Welcome