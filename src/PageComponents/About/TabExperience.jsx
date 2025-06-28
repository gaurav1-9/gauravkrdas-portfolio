import React from 'react'

const TabExperience = () => {
  const exList = [
    {
      imgAlt: "Unified Mentor Pvt Ltd Logo",
      imgSrc: "https://media.licdn.com/dms/image/v2/D4D0BAQFqhNYYc-J88w/company-logo_200_200/company-logo_200_200/0/1694669130240?e=1756339200&v=beta&t=uXPvxFhqRvrGZcaxYsYymNTW7CqNd_Aoj_MQo96_eKk",
      comName: "Unified Mentor Private Limited",
      duration: "Jul 2025 - Sept 2025 • 3 mos",
      role: 'Full Stack Web Developer Intern',
      desc: '',
      place: '',
      jobMode: 'Remote',
      jobType: "Internship",
    },
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