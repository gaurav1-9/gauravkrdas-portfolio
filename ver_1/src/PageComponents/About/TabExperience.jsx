import React from 'react'
import exList from '../../data/experiences.json'

const TabExperience = () => {
  return (
    <div>
      {
        exList.map((item, index) => (
          <div key={index} className='flex mb-5 flex-col'>
            <div className='flex justify-start'>
              <img src={item.imgSrc} alt={item.imgAlt} className={`${(item.imgAlt.startsWith('A'))?'w-15 h-15 lg:w-18 md:w-18 lg:h-18 md:h-18':'w-17 h-17 lg:w-20 md:w-20 lg:h-20 md:h-20'}`} draggable='false'/>
              <div className='ml-6'>
                <p className='text-primary font-semibold text-xl md:text-2xl lg:text-2xl leading-5 lg:leading-3'>{item.role}</p>
                <p className='text-primary font-light md:text-sm lg:text-base mt-2 leading-4'>{item.comName} • {item.jobType}</p>
                <p className='text-primaryAccent pt-1 font-light text-xs md:text-base lg:text-base'>{item.duration}</p>
                <p className='text-primaryAccent leading-3 font-light text-xs md:text-base lg:text-base'>{item.place} • {item.jobMode}</p>
                <p className='text-primary text-md pt-3 leading-4 text-sm md:text-base lg:text-base font-light'>{item.desc}</p>
              </div>
            </div>
            {
              (index < exList.length - 1) ?
                <div className='w-full h-0.5 bg-tabbedAccent rounded-lg mb-3 mt-2'></div>
                : null
            }
          </div>
        ))
      }
    </div>
  )
}

export default TabExperience