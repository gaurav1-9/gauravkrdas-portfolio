import React from 'react'
import Sections from './Sections'

const DesktopTabbed = ({ tabSection, setTabSection }) => {
    return (
        <div className='w-full md:h-80 lg:h-70 msi:h-80 2xl:h-120 flex flex-col md:flex-row 2xl:mt-10 md:my-10 md:mt-5 lg:my-0'>
            <Sections tabSection={tabSection} setTabSection={setTabSection} />
            <div className={`hidden md:flex w-8/10 bg-tabbedOrange rounded-2xl
                ${(tabSection === 0)
                    ? 'rounded-tl-none'
                    : (tabSection === 1)
                        ? ''
                        : 'rounded-bl-none'
                }`}>
            </div>
        </div>
    )
}

export default DesktopTabbed