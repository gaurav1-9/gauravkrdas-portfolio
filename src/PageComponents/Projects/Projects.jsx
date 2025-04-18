import React from 'react'
import GithubChart from './GithubChart'
import ProjectList from './ProjectList'


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
            <ProjectList projList = {projectList}/>
        </div>
    )
}

export default Projects