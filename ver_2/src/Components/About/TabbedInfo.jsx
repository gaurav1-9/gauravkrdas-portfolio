import React, { useState } from 'react'
import Sections from './Sections'

const TabbedInfo = () => {
    const [tabSection, setTabSection] = useState(0)
    console.log(tabSection)
    return (
        <div className='w-full md:h-80 flex flex-col md:flex-row'>
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

export default TabbedInfo