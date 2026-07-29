import React from 'react'
import MarqueeTag from './MarqueeTag'
import AboutText from './AboutText'

const Right = () => {
  return (
    <div className="mt-3 md:mt-20 lg:mt-10 px-5 md:px-10 lg:pl-10 lg:pr-0 2xl:pl-5 lg:w-7/10">
      <MarqueeTag />
      <AboutText />
    </div>
  )
}

export default Right