import React from 'react'
import Gif404 from './assets/404.gif'

const App = () => {
  return (
    <div className='relative flex flex-col justify-start items-center h-screen overflow-hidden text-onyx pt-15 md:pt-50 lg:pt-5'>
      <p className='text-xl md:text-3xl font-light lg:font-extralight absolute top-18 md:top-47 lg:top-7 msi:top-12 tracking-[20px]'>ERROR</p>
      <p className='text-6xl md:text-8xl font-semibold absolute top-25 md:top-55 lg:top-15 msi:top-20 tracking-[20px]'>404</p>
      <img
        src={Gif404}
        draggable='false'
        loading='eager'
        fetchPriority='high'
        className='mt-15 lg:mt-17 msi:mt-22 z-10'
      />

      <p className='text-3xl md:text-5xl lg:text-4xl msi:text-5xl font-semibold pt-3'>Looks like you're lost</p>
      <p className='text-base md:text-3xl lg:text-xl msi:text-2xl font-light msi:py-2'>The page you are looking for is not available</p>

      <a
        href="https://gauravkrdas-portfolio.vercel.app/"
        className='text-xl md:text-3xl lg:text-2xl bg-onyx text-white py-2 md:py-5 lg:py-3 px-5 md:px-10 rounded-xl mt-10 lg:mt-5 msi:mt-10 hover:bg-onyx/95'
      >
        <span>Let's go to a safe place</span>
      </a>
    </div>
  )
}

export default App