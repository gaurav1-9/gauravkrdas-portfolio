import React from 'react'
import { FaGithub, FaLink } from 'react-icons/fa6'

const ProjectList = ({ projList, setVisibleCount, visibleCount, totalProject }) => {
    return (
        <div className='flex flex-wrap lg:px-10 pt-5 lg:pt-12 gap-2 md:gap-3 lg:gap-4 justify-center w-full cursor-default text-carbonBlack'>
            {
                projList.map((item, index) => (
                    <div
                        key={index}
                        className='w-full md:w-3/7 lg:w-2/7 h-fit md:h-70 lg:h-65 rounded-2xl flex flex-col items-center py-4 px-4 md:px-5 lg:px-0 relative bg-crimsonCarrot'
                    >
                        <div className='flex gap-2 items-center'>
                            <p className='text-center font-semibold text-xl leading-6 lg:leading-7 md:px-7'>{item.name}</p>
                            {
                                (item.hostLink !== null) ?
                                    <a href={item.hostLink} target='_blank' className='text-xl lg:text-2xl bg-transparent'>
                                        <FaLink className='pointer' />
                                    </a>
                                    : null
                            }
                        </div>
                        <p className='text-primary font-regular text-center pt-3 lg:px-6'>{item.desc}</p>
                        <div className='flex flex-wrap gap-2 justify-center pt-2 pb-10 md:pb-10 lg:pb-0'>
                            {
                                item.techStack.map((techItem, idx) => (
                                    <div key={idx} className='flex w-fit rounded-xl justify-between px-2 lg:px-3 items-center py-1'>
                                        <i className={`${techItem.icon} pr-2 text-xs lg:text-sm`}></i>
                                        <p className='uppercase font-light text-xs lg:text-sm'>{techItem.techName}</p>
                                    </div>
                                ))
                            }
                        </div>
                        <a href={item.link} target='_blank' className='bottom-4 absolute'>
                            <div className='flex items-center pointer'>
                                <FaGithub className='pointer' />
                                <p className='pl-1 pointer font-light'>Source code</p>
                            </div>
                        </a>
                    </div>
                ))
            }
            {
                visibleCount &&
                <div className='flex justify-center lg:justify-start items-center text-carbonBlack text-right font-semibold'>
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