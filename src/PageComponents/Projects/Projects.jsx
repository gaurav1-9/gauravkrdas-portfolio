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
            <ProjectList projList={visibleProjects} />

            {
                visibleCount < projectList.length &&
                <div className='text-primaryAccent text-right px-15 pt-2 lg:pt-0 font-semibold lg:relative'>
                    <button
                        className='lg:absolute -top-6 right-45 cursor-pointer'
                        onClick={() => setVisibleCount(prev => prev + 3)}
                    >
                        view more
                    </button>
                </div>
            }
        </div>
    )
}

export default Projects
