import React from 'react'
import Location from './Location'

const MobileHeroImage = ({ image }) => {
    return (
        <div className="w-full bg-carbonBlack h-30 rounded-full relative flex justify-start items-center md:hidden px-4.5 inset-shadow-[0_0_15px_rgba(222,222,222,0.4)]">
            <Location
                textColor={'text-alabasterGrey'}
            />
            <div className="absolute bottom-0 left-0 w-full h-40 rounded-br-[60px] flex justify-end overflow-hidden">
                <img
                    src={image}
                    className='scale-100 mr-5 z-10 absolute -top-10 left-17'
                    fetchPriority='high'
                    loading='eager'
                    draggable='false'
                />
            </div>
        </div>
    )
}

export default MobileHeroImage