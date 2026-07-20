import React from 'react'

const Name = ({mobileRect, desktopRect}) => {
    return (
        <div className="relative flex flex-col justify-center items-center lg:items-start mt-8 md:mt-25 lg:mt-35 msi:mt-40 2xl:mt-50 text-carbonBlack">
            <img
                src={mobileRect}
                className='absolute top-8.5 md:top-22 scale-130 md:scale-x-250 md:scale-y-200 lg:hidden'
                fetchPriority='high'
                loading='eager'
                draggable='false'
            />
            <img
                src={desktopRect}
                className='absolute hidden lg:flex -left-10 lg:top-2.5 msi:top-7 scale-x-105'
                fetchPriority='high'
                loading='eager'
                draggable='false'
            />
            <p className='font-extrabold text-[69px] md:text-[150px] lg:text-[205px] msi:text-[230px] 2xl:text-[280px] z-2 leading-8 lg:leading-0 msi:leading-8 lg:tracking-[17px] msi:tracking-[25px] cursor-default'>GAURAV</p>
            <p className='text-3xl md:text-[80px] lg:text-[70px] msi:text-[85px] 2xl:text-[100px] tracking-[13px] md:tracking-[17px] lg:tracking-[45px] msi:tracking-[50px] 2xl:tracking-[60px] pl-2 z-2 leading-14 md:leading-38 lg:leading-60 2xl:leading-75 cursor-default'>KUMAR DAS</p>
        </div>
    )
}

export default Name