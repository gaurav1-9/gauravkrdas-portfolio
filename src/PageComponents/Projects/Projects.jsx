import React from 'react'
import GithubChart from './GithubChart'
import { FaGithub } from "react-icons/fa";


const Projects = () => {
    const projectList = [
        {
            name: "React Notes App",
            techStack: [
                {
                    icon: "devicon-react-original",
                    techName: "React"
                },
                {
                    icon: "devicon-nodejs-plain",
                    techName: "Node.js"
                },
                {
                    icon: "devicon-express-original",
                    techName: "Express"
                },
                {
                    icon: "devicon-tailwindcss-original",
                    techName: "TailwindCSS"
                },
            ],
            desc: "A responsive user friendly Notes management app made in React and TailwindCSS with draggable notes card",
            link: "https://github.com/gaurav1-9/react-notes-app",
        },
    ]
    return (
        <div className="w-full h-fit">
            <GithubChart />
            <div className='flex flex-wrap px-10 pt-12 gap-4 justify-center w-full relative'>
                {projectList.map((item, index) => (
                    <div key={index} className='w-2/7 bg-tabbedAccent h-65 rounded-2xl flex flex-col items-center py-4'>
                        <p className='text-secondary font-semibold text-xl'>{item.name}</p>
                        <p className='text-primary font-light text-center pt-3 px-6'>{item.desc}</p>
                        <div className='flex flex-wrap gap-2 justify-center pt-2'>
                            {
                                item.techStack.map((techItem, idx) => (
                                    <div className='flex w-fit bg-secondary rounded-xl justify-between px-3 items-center py-1'>
                                        <i className={`${techItem.icon} pr-2 text-sm`}></i>
                                        <p className='uppercase font-light text-sm'>{techItem.techName}</p>
                                    </div>
                                ))
                            }
                        </div>
                        <a href={item.link} className='bottom-4 absolute'>
                            <div className='flex items-center pointer'>
                                <FaGithub className='text-secondary pointer'/>
                                <p className='pl-1 pointer font-light text-secondary'>Source code</p>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects