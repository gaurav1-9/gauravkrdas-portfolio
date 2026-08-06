import React from 'react'
import Sections from './Sections'
import Experience from './Sections/Experience'
import Skills from './Sections/Skills'
import Education from './Sections/Education'

const DesktopTabbed = ({ tabSection, setTabSection }) => {
    return (
        <div className='w-full md:h-80 lg:h-70 msi:h-80 2xl:h-120 flex flex-col md:flex-row 2xl:mt-10 md:my-10 md:mt-5 lg:my-0'>
            <Sections tabSection={tabSection} setTabSection={setTabSection} />
            <div className={`hidden md:flex w-8/10 bg-tabbedOrange rounded-2xl p-4
                ${(tabSection === 0)
                    ? 'rounded-tl-none'
                    : (tabSection === 1)
                        ? ''
                        : 'rounded-bl-none'
                }`}>
                <div className="w-full h-full overflow-y-auto scroll-color">
                    {
                        (tabSection === 0)
                            ? <Experience />
                            : (tabSection === 1)
                                ? <Skills />
                                : <Education />
                    }
                    <div className=" pointer-events-none sticky bottom-0 left-0 bg-linear-to-t from-tabbedOrange to-transparent z-30 w-full h-8" />

                </div>
            </div>
        </div>
    )
}

export default DesktopTabbed