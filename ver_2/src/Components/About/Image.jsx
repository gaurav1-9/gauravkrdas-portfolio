import React from 'react'
import about_grey from '../../assets/about_grey.png'
import about_HTgrey from '../../assets/about_HTgrey.png'
import about_paprica from '../../assets/about_paprica.png'
import about_pic from '../../assets/about_pic.png'

const Image = () => {
    return (
        <div className="mx-5 2xl:mt-15 lg:mx-0 md:w-3/10 lg:w-8/10 md:justify-center md:ml-15 h-110 md:scale-110 lg:scale-100 2xl:scale-130">
            <div className="flex relative w-full h-full md:mx-10 lg:mx-0 overflow-clip rounded-4xl">
                <img
                    src={about_paprica}
                    className='-bottom-5 lg:bottom-0 absolute z-10'
                    draggable='false'
                />
                <img
                    src={about_grey}
                    className='-bottom-5 lg:bottom-0 absolute z-20'
                    draggable='false'
                />
                <img
                    src={about_HTgrey}
                    className='-bottom-5 lg:bottom-0 absolute z-30 opacity-50'
                    draggable='false'
                />
                <img
                    src={about_pic}
                    className='-bottom-5 lg:bottom-0 absolute z-40'
                    draggable='false'
                />
            </div>
        </div>
    )
}

export default Image