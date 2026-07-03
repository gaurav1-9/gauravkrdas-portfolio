import React from 'react'
import eduList from '../../data/education.json'

const TabEducation = () => {
  return (
    <div>
      {
        eduList.map((item, index) => (
          <div key={index} className='flex mb-5 flex-col'>
            <div className='flex justify-start'>
              <img src={item.imgSrc} alt={item.imgAlt} className={`w-17 md:w-20 lg:w-20 ${(item.imgAlt.startsWith('D')) ? 'h-19 md:h-22 lg:h-22' : 'h-17 md:h-20 lg:h-20'}`} draggable='false' />
              <div className='ml-6'>
                <p className='text-primary font-semibold text-xl md:text-2xl lg:text-2xl leading-6'>{item.name}</p>
                <p className='text-primary text-xs md:text-sm lg:text-md font-light'>{item.course}</p>
                <p className='text-primaryAccent text-sm md:text-base lg:text-base pt-1 font-light '>{item.duration}</p>
              </div>
            </div>
            {
              (index < eduList.length - 1) ?
                <div className='w-full h-0.5 bg-tabbedAccent rounded-lg mb-3 mt-2'></div>
                : null
            }
          </div>
        ))
      }
    </div>
  )
}

export default TabEducation