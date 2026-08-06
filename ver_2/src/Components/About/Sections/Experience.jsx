import React from 'react'
import ExpList from '../../../../../shared/data/experiences.json'

const Experience = () => {
    return (
        <div className='text-carbonBlack py-3'>
            {
                ExpList.map((item, index) => (
                    <div
                        key={index}
                        className={`relative flex md:gap-6 select-none
                                ${
                                    (index!== (ExpList.length-1))
                                    ? 'md:pb-15 lg:pb-8 msi:pb-15'
                                    : 'md:pb-0'
                                }
                                `}
                    >
                        <img
                            src={item.imgSrc}
                            alt={item.imgAlt}
                            className='md:size-20'
                            draggable='false'
                        />
                        <div className="flex flex-col">
                            <p className='font-extrabold md:text-2xl'>{item.role}</p>

                            <p className='flex flex-wrap justify-start items-center font-medium md:gap-2 md:leading-2 md:pb-5'>
                                <span>{item.comName}</span>
                                <span className='w-1.5 h-1.5 bg-carbonBlack/80 rounded-full' />
                                <span>{item.jobType}</span>
                            </p>

                            <p className='flex justify-start items-center md:gap-2 text-olive-700 leading-4'>
                                <span>{item.duration.split('•')[0]}</span>
                                <span className='w-1.5 h-1.5 bg-carbonBlack/80 rounded-full' />
                                <span>{item.duration.split('•')[1]}</span>
                            </p>

                            <p className='flex justify-start items-center md:gap-2 text-olive-700 md:pb-4'>
                                <span>{item.place}</span>
                                <span className='w-1.5 h-1.5 bg-carbonBlack/80 rounded-full' />
                                <span>{item.jobMode}</span>
                            </p>

                            <p className=''>{item.desc}</p>
                        </div>

                        {
                            (index !== (ExpList.length - 1))
                                ? <div className="absolute md:bottom-7.5 lg:bottom-4 msi:bottom-7.5 w-full h-0.5 bg-linear-to-r from-tabbedOrange via-carbonBlack/10 to-tabbedOrange" />
                                : null
                        }

                    </div>
                ))
            }
        </div>
    )
}

export default Experience