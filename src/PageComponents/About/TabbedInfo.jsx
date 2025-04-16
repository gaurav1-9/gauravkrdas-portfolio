import React, { useState } from 'react'
import TabExperience from './TabExperience';
import TabSkills from './TabSkills';
import TabEducation from './TabEducation';

const TabbedInfo = () => {
    const tabs = ['Experience', 'Skills', 'Education']
    const [tabNum, setTabNum] = useState(0)

    function handleTab(index) {
        setTabNum(index);
    }
    return (
        <div className=' w-3xl h-80 mt-6 flex'>
            <div className='w-1/5'>
                {
                    tabs.map((entry, index) => (
                        <div
                            key={index}
                            className={`pointer h-1/3 w-full ${(tabNum === index) ? "bg-back" : "bg-tabbedAccent"} flex`}
                            onClick={() => handleTab(index)}
                        >
                            <div className={`pointer w-2 ${(tabNum === index) ? "bg-secondary shadow-[2px_0_4px_rgba(0,0,0,0.25)]" : "bg-tabbedAccent"}`}></div>
                            <p className={`
                                text-lg font-light uppercase pointer w-full flex justify-center items-center 
                                ${(tabNum === index) ? "font-semibold text-secondary" 
                                : "hover:scale-[1.03] ease-in duration-100 text-primary"}
                            `}>
                                {entry}
                            </p>
                        </div>
                    ))
                }
            </div>
            <div className='w-4/5 p-4 overflow-y-scroll overflow-x-hidden'>
                {
                    (tabNum===0)? <TabExperience/>
                    :(tabNum===1)? <TabSkills/>
                    : <TabEducation/>
                }
            </div>
        </div>
    )
}

export default TabbedInfo