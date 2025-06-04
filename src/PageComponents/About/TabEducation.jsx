import React from 'react'

const TabEducation = () => {
  const eduList = [
    {
      imgAlt: "TU Logo",
      imgSrc: "https://www.tezu.ernet.in/images/tulogo.png",
      name: "Tezpur University",
      course: "Master of Technology - MTech, Computer Science",
      duration: "2024 - 2026",
    },
    {
      imgAlt: "GCU Logo",
      imgSrc: "/GCU-Logo-transparent.png",
      name: "Girijananda Chowdhury Institute of Management & Technology",
      course: "Bachelor of Technology - BTech, Computer Science",
      duration: "2020 - 2024",
    },
    {
      imgAlt: "DPSG Logo",
      imgSrc: "/DPSG_logocolor.png",
      name: "Delhi Public School - Guwahati",
      course: "School",
      duration: "2009 - 2020",
    },
  ]
  return (
    <div>
      {
        eduList.map((item, index) => (
          <div key={index} className='flex mb-5 flex-col'>
            <div className='flex justify-start'>
              <img src={item.imgSrc} alt={item.imgAlt} className={`w-17 md:w-20 lg:w-20 ${(item.imgAlt.startsWith('D'))?'h-19 md:h-22 lg:h-22':'h-17 md:h-20 lg:h-20'}`} draggable='false'/>
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