import React from 'react'
import Home from './Sections/Home';
import Project from './Sections/Project';
import About from './Sections/About';
import Footer from './Sections/Footer';

export const App = () => {
  return (
    <div className='bg-alabasterGrey'>
      <Home />
      <Project />
      <About />
      <Footer />
    </div>
  )
}

export default App;