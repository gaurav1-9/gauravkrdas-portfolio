import React from 'react'


const GithubChart = () => {
    return (
        <div className='flex justify-center pt-20 lg:pt-30'>
            <div className=' bg-tabbedAccent p-4 w-80 md:w-fit lg:w-fit rounded-2xl shadow-[0_0_8px_rgba(0,0,0,0.25)] lg:scale-[1.3] pointer'>
                <a href="https://github.com/gaurav1-9" target='_blank' className='flex justify-center flex-col gap-2'>
                    <img src="https://ghchart.rshah.org/D12E2E/gaurav1-9" alt="" className='scale-[1.06] md:scale-100 lg:scale-100 pointer' />
                    <p className='pointer text-center text-primary font-light text-sm md:text-base lg:text-base'>Code Contributions in GitHub</p>
                </a>
            </div>
        </div>
    )
}

export default GithubChart