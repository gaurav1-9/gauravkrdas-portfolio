import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";

const ProjectList = ({ projList }) => {
    return (
        <div className='flex flex-wrap px-10 pt-12 gap-4 justify-center w-full'>
            {projList.map((item, index) => (
                <div key={index} className='w-2/7 bg-tabbedAccent h-65 rounded-2xl flex flex-col items-center py-4 relative'>
                    <div className='flex gap-2 items-center'>
                        <p className='text-secondary font-semibold text-xl'>{item.name}</p>
                        {
                            (item.hostLink!==null)?
                                <a href={item.hostLink} target='_blank' className='text-secondary text-2xl bg-transparent'>
                                    <FaLink className='pointer'/>
                                </a>
                            : null
                        }
                    </div>
                    <p className='text-primary font-light text-center pt-3 px-6'>{item.desc}</p>
                    <div className='flex flex-wrap gap-2 justify-center pt-2'>
                        {
                            item.techStack.map((techItem, idx) => (
                                <div key={idx} className='flex w-fit bg-secondary rounded-xl justify-between px-3 items-center py-1'>
                                    <i className={`${techItem.icon} pr-2 text-sm`}></i>
                                    <p className='uppercase font-light text-sm'>{techItem.techName}</p>
                                </div>
                            ))
                        }
                    </div>
                    <a href={item.link} className='bottom-4 absolute'>
                        <div className='flex items-center pointer'>
                            <FaGithub className='text-secondary pointer' />
                            <p className='pl-1 pointer font-light text-secondary'>Source code</p>
                        </div>
                    </a>
                </div>
            ))}
        </div>
    )
}

export default ProjectList