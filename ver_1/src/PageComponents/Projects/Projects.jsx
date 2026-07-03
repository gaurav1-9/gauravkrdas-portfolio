import React, { useEffect, useState } from 'react'
import GithubChart from './GithubChart'
import ProjectList from './ProjectList'
import projectList from '../../../../shared/data/projects.json'

const Projects = () => {
    const [visibleCount, setVisibleCount] = useState(5);
    useEffect(() => {
        if(window.innerWidth<768)
            setVisibleCount(4)
        else
            setVisibleCount(5)
    }, [])
    

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
