import React from 'react'
import EduList from '../../../../../shared/data/education.json'
import dpsg from '../../../../../shared/DPSG_logocolor.png'


const Education = () => {
  return (
    <div className='text-carbonBlack py-3'>
      {
        EduList.map((item, index) => (
          <div
            key={index}
            className={`relative flex md:gap-6 select-none
                                ${(index !== (EduList.length - 1))
                ? 'md:pb-10'
                : 'md:pb-0'
              }
            `}
          >
            <img
              src={
                (item.imgSrc.startsWith('D'))
                  ? dpsg
                  : item.imgSrc
              }
              alt={item.imgAlt}
              className='md:size-20'
              draggable='false'
            />
            <div className="flex flex-col">
              <p className='font-extrabold md:text-2xl md:leading-6 md:pb-2'>{item.name}</p>

              <p className='flex justify-start items-center font-medium md:gap-2 md:leading-5'>{item.course}</p>

              {
                (item.grade)
                  ? <p className='flex justify-start items-center font-medium md:gap-1 text-olive-700  md:pb-3'>
                    <span>Grade:</span>
                    <span>{item.grade}</span>
                  </p>
                  : null
              }

              <p className='flex justify-start items-center text-olive-700'>{item.duration}</p>
            </div>

            {
              (index !== (EduList.length - 1))
                ? <div className="absolute bottom-5 w-full h-0.5 bg-linear-to-r from-tabbedOrange via-carbonBlack/10 to-tabbedOrange" />
                : null
            }

          </div>
        ))
      }
    </div>
  )
}

export default Education