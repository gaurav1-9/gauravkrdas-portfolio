import React from 'react'
import { FaGithub } from 'react-icons/fa6'
import { TbWorld } from "react-icons/tb";
import { Tooltip } from 'react-tooltip';

const ProjectList = ({ projList, setVisibleCount, visibleCount, totalProject }) => {
    return (
        <div className='flex flex-wrap lg:px-10 pt-5 lg:pt-12 gap-2 md:gap-3 lg:gap-4 justify-center w-full cursor-default text-carbonBlack'>
            {
                projList.map((item, index) => (
                    <div
                        key={index}
                        className='w-full md:w-3/7 lg:w-2/7 md:h-70 lg:h-93 msi:h-85 rounded-3xl flex flex-col items-center p-2 relative bg-crimsonCarrot'
                    >
                        <div className="rounded-[22px] shadow-2xl shadow-alabasterGrey/60 min-h-fit max-h-9/10 md:h-9/10 p-4 flex flex-col items-center justify-between bg-alabasterGrey">
                            <p className='text-center font-semibold text-xl leading-6 lg:leading-7 md:px-7'>{item.name}</p>
                            <p className='text-primary font-regular text-center pt-3 lg:px-6'>{item.desc}</p>
                            <div className='flex flex-wrap gap-2 justify-center pt-2 lg:pb-0'>
                                {
                                    item.techStack.map((techItem, idx) => (
                                        <div key={idx} className='flex w-fit rounded-xl justify-between px-2 lg:px-3 items-center py-1 border-3 border-crimsonCarrot'>
                                            <i className={`${techItem.icon} pr-2 text-xs lg:text-sm`}></i>
                                            <p className='uppercase font-light text-xs lg:text-sm'>{techItem.techName}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="w-full flex flex-row-reverse justify-between items-center px-10 py-2 md:h-2/10 xl:h-1/10 msi:h-2/10">
                            <a href={item.link} target='_blank' className=' hover:underline underline-offset-2 text-carbonBlack hover:text-carbonBlack/80' >
                                <div className='flex items-center cursor-pointer'>
                                    <FaGithub />
                                    <p className='pl-1'>Source code</p>
                                </div>
                            </a>
                            {
                                (item.hostLink !== null) ?
                                    <a
                                        href={item.hostLink}
                                        target='_blank'
                                        className='text-xl lg:text-2xl bg-transparent'
                                        data-tooltip-id={`live-${index}`}
                                    >
                                        <TbWorld className='hover:text-carbonBlack/70' />
                                        <Tooltip
                                            id={`live-${index}`}
                                            openOnClick={false}
                                            place={'right'}
                                            content="Live demo"
                                            className={`text-xl! rounded-lg! z-10! hidden! lg:flex!`}
                                        />
                                    </a>
                                    : null
                            }
                        </div>
                    </div>
                ))
            }
            {
                visibleCount &&
                <div className='flex justify-center lg:justify-start items-center text-carbonBlack text-right font-semibold md:mr-10'>
                    <button
                        className='cursor-pointer hover:underline underline-offset-2'
                        onClick={() => visibleCount >= totalProject
                            ? setVisibleCount(5)
                            : setVisibleCount(prev => prev + 3)
                        }
                    >

                        {visibleCount >= totalProject
                            ? 'view less'
                            : 'view more'
                        }
                    </button>
                </div>
            }
        </div>
    )
}

export default ProjectList