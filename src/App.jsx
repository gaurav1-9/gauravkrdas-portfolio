import React from 'react'
import Home from './PageComponents/Home/Home'
import Navbar from './PageComponents/Navbar'
import Projects from './PageComponents/Projects/Projects'
import About from './PageComponents/About/About'

const App = () => {
  return (
    <div className='bg-back'>
        <Navbar/>
        <Home/>
        <Projects/>
        <About/>
    </div>
  )
}

export default App