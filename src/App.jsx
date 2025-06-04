import React, { useRef, useEffect, useState } from 'react';
import Home from './PageComponents/Home/Home';
import Navbar from './PageComponents/Navbar';
import Projects from './PageComponents/Projects/Projects';
import About from './PageComponents/About/About';
import Footer from './PageComponents/Footer';

const App = () => {
    const homePageRef = useRef(null);
    const homeTopPageRef = useRef(null);
    const projectPageRef = useRef(null);
    const aboutPageRef = useRef(null);

    const [selectedTab, setSelectedTab] = useState(0);

    const scrollToSection = (section) => {
        section.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        const handleScroll = () => {
            const sections = [homePageRef, projectPageRef, aboutPageRef];
            const scrollPosition = window.scrollY + window.innerHeight / 2;

            const currentSectionIndex = sections.findIndex((ref) => {
                const el = ref.current;
                if (!el) return false;
                const { top, height } = el.getBoundingClientRect();
                const elTop = window.scrollY + top;
                return scrollPosition >= elTop && scrollPosition < elTop + height;
            });

            if (currentSectionIndex !== -1 && currentSectionIndex !== selectedTab) {
                setSelectedTab(currentSectionIndex);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [selectedTab]);

    return (
        <div className='bg-back'>
            <div ref={homeTopPageRef} className='w-0 h-0'></div>
            <Navbar
                scrollToSection={scrollToSection}
                refs={{ homeTopPageRef, projectPageRef, aboutPageRef }}
                selectedTab={selectedTab}
                setSelectedTab={setSelectedTab}
            />
            <div ref={homePageRef}><Home /></div>
            <div ref={projectPageRef}><Projects /></div>
            {/* <div ref={aboutPageRef}><About /></div> */}
            <Footer />
        </div>
    );
};

export default App;
