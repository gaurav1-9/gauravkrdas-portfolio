import React, { useState } from 'react'
import DesktopTabbed from './DesktopTabbed'
import MobileTabbed from './MobileTabbed'

const TabbedInfo = () => {
    const [tabSection, setTabSection] = useState(0)
    return (
        <div>
            <DesktopTabbed tabSection={tabSection} setTabSection={setTabSection} />
            <MobileTabbed />
        </div>
    )
}

export default TabbedInfo