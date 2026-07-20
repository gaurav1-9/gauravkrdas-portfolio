import React, { useEffect, useState } from 'react'
import GitChart from './Projects/GitChart'
import ProjectList from './Projects/ProjectList';
import projectLists from '../../../shared/data/projects.json'

const Project = () => {

    const [visibleCount, setVisibleCount] = useState(5);
    const visibleProjects = projectLists.slice(0, visibleCount);
    useEffect(() => {
        if (window.innerWidth < 768)
            setVisibleCount(4)
        else
            setVisibleCount(5)
    }, [])

    return (
        <div className='flex flex-col justify-start items-center -mt-11 md:mt-0 xl:mt-19 msi:mt-25 2xl:mt-48 pt-25 px-5 h-screen'>
            <GitChart />
            <ProjectList
                projList={visibleProjects}
                setVisibleCount={setVisibleCount}
                visibleCount={visibleCount}
                totalProject={projectLists.length}
            />
        </div>
    )
}

export default Project