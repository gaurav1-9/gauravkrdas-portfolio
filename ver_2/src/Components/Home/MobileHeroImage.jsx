import React from 'react'
import Location from './Location'

const MobileHeroImage = ({ image }) => {
    return (
        <div className="w-full bg-carbonBlack h-30 md:h-80 rounded-full relative flex justify-start items-center lg:hidden px-4.5 md:px-15 inset-shadow-[0_0_15px_rgba(222,222,222,0.4)]">
            <Location
                textColor={'text-alabasterGrey'}
            />
            <div className="absolute bottom-0 left-0 w-full h-40 md:h-100 rounded-br-[60px] md:rounded-br-[160px] flex justify-end overflow-hidden">
                <img
                    src={image}
                    className=' mr-5 z-10 absolute -top-10 md:-top-35 left-17 md:left-50'
                    fetchPriority='high'
                    draggable='false'
                />
            </div>
        </div>
    )
}

export default MobileHeroImage