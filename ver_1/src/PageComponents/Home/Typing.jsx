import React from 'react'
import { TypeAnimation } from 'react-type-animation';

function Typing() {
  return (
    <div className='text-primary lg:max-h-max'>
      <h2 className='text-3xl lg:text-5xl font-light leading-8 lg:leading-12'>A&nbsp;
      <TypeAnimation className='font-semibold'
      sequence={[
        'FULL STACK DEVELOPER',
        1000,
        'MOBILE APP DEVELOPER',
        1000,
        'BLENDER 3D ARTIST',
        1000,
      ]}
      wrapper="span"
      speed={60}
      repeat={Infinity}
    /></h2>
    </div>
  )
}

export default Typing