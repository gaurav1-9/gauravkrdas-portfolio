import React from 'react'
import Typing from './Typing'

function Welcome() {
  return (
    <div className='mx-8 mt-6'>
        <h3 className='font-light text-primary mb-2'>Hello,</h3>
        <h1 className='text-3xl font-extralight text-primary leading-5'>I'm <span className='text-secondary font-semibold'>GAURAV.</span></h1>
        <Typing/>
        <h2 className='text-xl font-light text-primary leading-3'>based in Assam</h2>
    </div>
  )
}

export default Welcome