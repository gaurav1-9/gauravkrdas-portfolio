import React from 'react'
import GithubChart from './GithubChart'
import ProjectList from './ProjectList'
import projectList from '../../data/projects.json'

const Projects = () => {
    return (
        <div className="w-full h-fit">
            <GithubChart />
            <ProjectList projList={projectList} />
        </div>
    )
}

export default Projects
