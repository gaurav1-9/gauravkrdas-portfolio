import React, { useRef, useState } from 'react'
import TabExperience from './TabExperience';
import TabSkills from './TabSkills';
import TabEducation from './TabEducation';

const TabbedInfo = () => {
    const tabs = ['Experience', 'Skills', 'Education']
    const [tabNum, setTabNum] = useState(0)
    const rightTabInfo = useRef(null);

    function handleTab(index) {
        setTabNum(index);
        rightTabInfo.current?.scrollTo({top:0})
    }
    return (
        <div className='w-full lg:w-3xl 2xl:w-4xl h-80 2xl:h-102 mt-6 flex flex-col md:flex-row lg:flex-row md:scale-90 lg:scale-100 2xl:scale-107 2xl:mt-20 2xl:ml-7'>
            <div className='w-full md:w-1/5 lg:w-1/5 flex md:flex-col lg:flex-col'>
                {
                    tabs.map((entry, index) => (
                        <div
                            key={index}
                            className={`pointer md:h-1/3 lg:h-1/3 w-full ${(tabNum === index) ? "bg-back" : "bg-tabbedAccent"} flex flex-col md:flex-row lg:flex-row`}
                            onClick={() => handleTab(index)}
                        >
                            <div className={`pointer h-2 md:h-full lg:h-full md:w-2 lg:w-2 ${(tabNum === index) ? "bg-secondary shadow-[0_2px_4px_rgba(0,0,0,0.25)] md:shadow-[2px_0_4px_rgba(0,0,0,0.25)] lg:shadow-[2px_0_4px_rgba(0,0,0,0.25)]" : "bg-tabbedAccent"}`}></div>
                            <p className={`
                                md:text-lg lg:text-lg font-light uppercase pointer w-full flex justify-center items-center pb-3 py-1 md:pt-0 lg:pt-0 md:pb-0 lg:pb-0
                                ${(tabNum === index) ? "font-semibold text-secondary"
                                    : "hover:scale-[1.03] ease-in duration-100 text-primary"}
                            `}>
                                {entry}
                            </p>
                        </div>
                    ))
                }
            </div>
            <div className='w-full md:w-4/5 lg:w-4/5 p-4 overflow-y-scroll overflow-x-hidden text-left' ref={rightTabInfo}>
                {
                    (tabNum === 0) ? <TabExperience />
                        : (tabNum === 1) ? <TabSkills />
                            : <TabEducation />
                }
            </div>
        </div>
    )
}

export default TabbedInfo