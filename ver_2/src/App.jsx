import React, { useEffect, useRef, useState } from 'react'
import Home from './Components/Home';
import Project from './Components/Project';
import About from './Components/About';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';

export const App = () => {
  const homePageRef = useRef(null);
  const homeTopPageRef = useRef(null);
  const projectPageRef = useRef(null);
  const aboutPageRef = useRef(null);

  const [navSelect, setNavSelect] = useState(0)

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

      if (currentSectionIndex !== -1 && currentSectionIndex !== navSelect) {
        setNavSelect(currentSectionIndex);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navSelect]);

  function handleClick(index) {
    setNavSelect(index);
    switch (index) {
      case 0:
        scrollToSection(homeTopPageRef);
        break;
      case 1:
        scrollToSection(projectPageRef);
        break;
      case 2:
        scrollToSection(aboutPageRef);
        break;
      default:
        break;
    }
  }

  return (
    <div className='bg-alabasterGrey overflow-x-clip'>
      <div ref={homeTopPageRef} className='w-0 h-0'></div>
      
      <Navbar
        selectedTab={navSelect}
        setSelectedTab={setNavSelect}
        handleClick={handleClick}
      />

      <div ref={homePageRef}><Home /></div>
      <div ref={projectPageRef}><Project /></div>
      <div ref={aboutPageRef}><About /></div>

      <Footer
        handleClick={handleClick}
      />
    </div>
  )
}

export default App;