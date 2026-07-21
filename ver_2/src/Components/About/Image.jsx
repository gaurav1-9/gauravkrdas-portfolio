import React from 'react'
import about_grey from '../../assets/about_grey.png'
import about_HTgrey from '../../assets/about_HTgrey.png'
import about_paprica from '../../assets/about_paprica.png'
import about_pic from '../../assets/about_pic.png'
import about_sign from '../../assets/about_sign.png'
import LinkIcons from '../LinkIcons'

const Image = () => {
    return (
        <div className="mx-5">
            <div className="flex relative w-full md:w-3/10 h-110 overflow-clip rounded-4xl">
                <img
                    src={about_paprica}
                    className='-bottom-5 absolute z-10'
                    draggable='false'
                />
                <img
                    src={about_grey}
                    className='-bottom-5 absolute z-20'
                    draggable='false'
                />
                <img
                    src={about_HTgrey}
                    className='-bottom-5 absolute z-30 opacity-50'
                    draggable='false'
                />
                <img
                    src={about_pic}
                    className='-bottom-5 absolute z-40'
                    draggable='false'
                />
            </div>

            <div className="relative">
                <img
                    src={about_sign}
                    className='left-22 md:-left-32 absolute -bottom-2 md:-bottom-20 -rotate-15 z-50 scale-70 md:scale-30'
                />
            </div>
            <div className="relative">
                <p className='text-center text-carbonBlack font-semibold pt-3 pb-1'>gauravkrdas19@gmail.com</p>
                <div className="flex justify-center">
                    <LinkIcons
                        idName={1}
                        toolTipLocation={'bottom'}
                        iconSize={'text-3xl md:text-5xl lg:text-3xl msi:text-4xl'}
                        gap='gap-8 md:gap-5 lg:gap-4 msi:gap-5'
                    />
                </div>
            </div>
        </div>
    )
}

export default Image