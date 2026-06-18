import React, { useState } from 'react'
import GithubChart from './GithubChart'
import ProjectList from './ProjectList'
import projectList from '../../data/projects.json'

const Projects = () => {
    const [visibleCount, setVisibleCount] = useState(5);

    const visibleProjects = projectList.slice(0, visibleCount);
    return (
        <div className="w-full h-fit">
            <GithubChart />
            <ProjectList
                projList={visibleProjects}
                setVisibleCount={setVisibleCount}
                visibleCount={visibleCount}
                totalProject={projectList.length}
            />
        </div>
    )
}

export default Projects
