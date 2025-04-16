import React from 'react'

const TabExperience = () => {
  const exList = [
    {
      imgAlt: "APDCL Logo",
      imgSrc: "https://www.apdcl.org/website/img/apdcl_logo.b56b6858.png",
      comName: "Assam Power Distribution Company Limited",
      duration: "Jul 2023 - Aug 2023 • 2 mos",
      role: 'Intern',
      desc: 'Built a Chatbot Service using HTML, CSS, JavaScript and Python',
      place: 'Guwahati, Assam, India',
      jobMode: 'Hybrid',
      jobType: "Internship",
    },
    {
      imgAlt: "TU Logo",
      imgSrc: "https://www.tezu.ernet.in/images/tulogo.png",
      comName: "Tezpur University",
      duration: "Aug 2022 - Sep 2022 • 2 mos",
      role: 'Intern',
      desc: 'Speech Processing project using PRAAT and Python',
      place: 'Tezpur, Assam, India',
      jobMode: 'On-site',
      jobType: "Internship",
    },
  ]

  return (
    <div>
      {
        exList.map((item, index) => (
          <div key={index} className='flex mb-5 flex-col'>
            <div className='flex justify-start'>
              <img src={item.imgSrc} alt={item.imgAlt} className='w-20 h-20' />
              <div className='ml-6'>
                <p className='text-primary font-semibold text-2xl leading-3'>{item.role}</p>
                <p className='text-primary font-light'>{item.comName} • {item.jobType}</p>
                <p className='text-primaryAccent pt-1 font-light'>{item.duration}</p>
                <p className='text-primaryAccent leading-3 font-light'>{item.place} • {item.jobMode}</p>
                <p className='text-primary text-md pt-3 font-light'>{item.desc}</p>
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