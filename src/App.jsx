import React, { useRef } from 'react'
import Home from './PageComponents/Home/Home'
import Navbar from './PageComponents/Navbar'
import Projects from './PageComponents/Projects/Projects'
import About from './PageComponents/About/About'

const App = () => {
    const homePageRef = useRef(null);
    const projectPageRef = useRef(null);
    const aboutPageRef = useRef(null);

    const scrollToSection = (section) => {
        section.current?.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <div className='bg-back'>
            <Navbar scrollToSection = {scrollToSection} refs = {{homePageRef, projectPageRef, aboutPageRef}}/>
            <div ref={homePageRef}><Home /></div>
            <div ref={projectPageRef}><Projects /></div>
            <div ref={aboutPageRef}><About /></div>
        </div>
    )
}

export default App