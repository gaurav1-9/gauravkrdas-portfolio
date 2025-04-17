import React, { useRef } from 'react'
import Home from './PageComponents/Home/Home'
import Navbar from './PageComponents/Navbar'
import Projects from './PageComponents/Projects/Projects'
import About from './PageComponents/About/About'
import Footer from './PageComponents/Footer/Footer'

const App = () => {
    const homePageRef = useRef(null);
    const projectPageRef = useRef(null);
    const aboutPageRef = useRef(null);

    const scrollToSection = (section) => {
        section.current?.scrollIntoView({ behavior: 'smooth' });
    }
    return (
        <div className='bg-back'>
            <div ref={homePageRef} className='w-0 h-0'></div>
            <Navbar scrollToSection={scrollToSection} refs={{ homePageRef, projectPageRef, aboutPageRef }} />
            <Home />
            <div ref={projectPageRef}><Projects /></div>
            <div ref={aboutPageRef}><About /></div>
            <Footer />
        </div>
    )
}

export default App