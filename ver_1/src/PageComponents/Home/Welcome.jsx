import React from 'react'
import Typing from './Typing'
import LinkIcons from '../LinkIcons';

function Welcome() {
    return (
        <div className='scale-100 m-0 2xl:scale-140 2xl:ml-85 2xl:pt-20'>
            <div className='mx-10 pt-10 md:mx-20 lg:mx-24 lg:pt-18'>
                <p className='font-light text-primary mb-0 text-3xl lg:mb-5 lg:text-5xl'>Hello,</p>
                <p className='text-5xl lg:text-7xl font-extralight text-primary lg:leading-16'>I'm <span className='text-secondary font-semibold'>GAURAV.</span></p>
                <div className='h-24 lg:max-h-max'>
                    <Typing />
                    <p className='text-3xl lg:text-5xl font-light text-primary leading-7 lg:leading-12'>based in Assam</p>
                </div>
            </div>
            <div className='mx-10 md:mx-20 lg:mx-24 mt-15 md:mt-20 lg:mt-24'>
                <div className='w-66 md:w-63 lg:w-66 leading-2 flex justify-between items-center'>
                    <span className='text-primary text-xl lg:text-2xl font-semibold'>LET'S TALK</span>
                    <LinkIcons iconSize='text-xl lg:text-2xl' toolTipLocation="top" idName='0' />
                </div>
                {/* <a href="/CV_GauravKrDas.pdf" download="Gaurav_CV.pdf"> */}
                    <button 
                    className='rounded-md max-w-max md:max-w-max lg:max-w-max lg:rounded-lg px-6 py-2 text-back text-xl font-semibold pointer bg-primary hover:bg-primary/90 hover:scale-[1.02] ease-in duration-200 selection:text-primary'
                    onClick={()=>window.open('/CV_GauravKrDas.pdf')}
                    >
                        DOWNLOAD MY RESUME
                    </button>
                {/* </a> */}
            </div>
        </div>
    )
}

export default Welcome