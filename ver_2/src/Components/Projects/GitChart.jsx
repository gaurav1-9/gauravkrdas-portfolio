import React from 'react'
import { Tooltip } from 'react-tooltip'

const GitChart = () => {
    return (
        <div className="relative flex flex-col justify-center items-center">
            <img
                data-tooltip-id='gitChart'
                src="https://ghchart.rshah.org/171717/gaurav1-9"
                className=' md:scale-125 lg:scale-150 md:py-5 lg:py-8 cursor-pointer'
                onClick={() => window.open('https://github.com/gaurav1-9', '_blank', 'noopener,noreferrer')}
            />
            <p className='text-sm md:text-xl font-regular tracking-[5px] md:tracking-[20px] w-full text-center pt-3 text-carbonBlack'>code contributions</p>

            <Tooltip
                id='gitChart'
                openOnClick={false}
                place='bottom'
                content="Github Contribution Chart"
                className={`text-xl! rounded-md! z-10! hidden! lg:flex!`}
            />
        </div>
    )
}

export default GitChart