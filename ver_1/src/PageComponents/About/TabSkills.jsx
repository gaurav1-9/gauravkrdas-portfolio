import React from 'react'
import skillList from '../../data/skills.json'

const TabSkills = () => {
  return (
    <div className='flex flex-col'>
      {
        skillList.map((item, index) => (
          <div key={index} className='flex mb-5 flex-col'>
            <p className='text-secondary font-semibold text-xl md:text-2xl lg:text-2xl'>{item.type}</p>
            <div className='flex flex-wrap gap-1.5 md:gap-2.5 lg:gap-2.5 mt-3'>
              {
                item.list.map((itemListIcon, idx) => (
                  <div key={idx} className='flex flex-col justify-center items-center w-20 h-19 md:w-25 md:h-30 lg:w-25 lg:h-30 bg-tabbedAccent rounded-lg md:rounded-2xl lg:rounded-2xl'>
                    <i className={`${itemListIcon.class} text-4xl md:text-6xl lg:text-6xl text-primary`}></i>
                    <p className='text-primary text-xs md:text-base lg:text-base font-light mt-1 md:mt-3 lg:mt-3'>{itemListIcon.name}</p>
                  </div>
                ))
              }
            </div>
            {
              (index < skillList.length - 1) ?
                <div className='w-full h-0.5 bg-tabbedAccent rounded-lg mb-3 mt-2'></div>
                : null
            }
          </div>
        ))
      }
    </div>
  )
}

export default TabSkills