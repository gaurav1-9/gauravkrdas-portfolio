import React from 'react'

const TabSkills = () => {
  const skillList = [
    {
      type: "Programming Languages",
      list: [
        {
          class: 'devicon-c-plain',
          name: 'C',
        },
        {
          class: 'devicon-cplusplus-plain',
          name: 'C++',
        },
        {
          class: 'devicon-python-plain',
          name: 'Python',
        },
        {
          class: 'devicon-html5-plain',
          name: 'HTML',
        },
        {
          class: 'devicon-css3-plain',
          name: 'CSS',
        },
        {
          class: 'devicon-php-plain',
          name: 'PHP',
        },
        {
          class: 'devicon-javascript-plain',
          name: 'JavaScript',
        },
        {
          class: 'devicon-dart-plain',
          name: 'Dart',
        },
        {
          class: 'devicon-java-plain',
          name: 'Java',
        },
        {
          class: 'devicon-csharp-plain',
          name: 'C#',
        },
      ]
    },
    {
      type: "Frameworks / Runtime / Libraries",
      list: [
        {
          class: "devicon-nodejs-plain",
          name: "Node.js",
        },
        {
          class: "devicon-express-original",
          name: "Express",
        },
        {
          class: "devicon-react-plain",
          name: "React",
        },
        {
          class: "devicon-flutter-plain",
          name: "Flutter",
        },
        {
          class: "devicon-tailwindcss-plain",
          name: "TailwindCSS",
        },
      ],
    },
    {
      type: "Databases",
      list: [
        {
          class: "devicon-mysql-plain",
          name: "MySQL",
        },
        {
          class: "devicon-firebase-plain",
          name: "Firebase",
        },
        {
          class: "devicon-mongodb-plain",
          name: "MongoDB",
        },
      ],
    },
    {
      type: "Source Control",
      list: [
        {
          class: "devicon-github-plain",
          name: "GitHub",
        },
      ],
    },
    {
      type: "Creative Development",
      list: [
        {
          class: "devicon-blender-original",
          name: "Blender 3D",
        },
        {
          class: "devicon-unity-plain",
          name: "Unity",
        },
      ],
    },
  ]
  return (
    <div className='flex flex-col'>
      {
        skillList.map((item, index) => (
          <div key={index} className='flex mb-5 flex-col'>
            <p className='text-secondary font-semibold text-2xl'>{item.type}</p>
            <div className='flex flex-wrap gap-2.5 mt-3'>
              {
                item.list.map((itemListIcon, idx) => (
                  <div key={idx} className='flex flex-col justify-center items-center w-25 h-30 bg-tabbedAccent rounded-2xl'>
                    <i className={`${itemListIcon.class} text-6xl text-primary`}></i>
                    <p className='text-primary font-light mt-3'>{itemListIcon.name}</p>
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