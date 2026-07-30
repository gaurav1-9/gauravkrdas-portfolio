import React from 'react'
import Gif404 from './assets/404.gif'

const App = () => {
  return (
    <div className='relative flex flex-col justify-start items-center h-screen overflow-hidden text-onyx pt-15 md:pt-50 lg:pt-5'>
      <p className='text-6xl md:text-8xl font-semibold absolute top-25 md:top-55 lg:top-15 tracking-[20px]'>404</p>
      <img src={Gif404} className='mt-15 lg:mt-17 z-10' />

      <p className='text-3xl md:text-5xl font-semibold pt-3'>Looks like you're lost</p>
      <p className='text-base md:text-3xl lg:text-2xl font-light lg:py-2'>The page you are looking for is not available</p>

      <a
        href="https://gauravkrdas-portfolio.vercel.app/"
        className='text-xl md:text-3xl lg:text-2xl bg-onyx text-white py-2 md:py-5 lg:py-3 px-5 md:px-10 rounded-xl mt-10 hover:bg-onyx/95'
      >
        <span>Let's go to a safe place</span>
      </a>
    </div>
  )
}

export default App