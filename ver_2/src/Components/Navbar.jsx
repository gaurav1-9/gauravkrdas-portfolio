import React from 'react'

const Navbar = ({ selectedTab, setSelectedTab, handleClick }) => {

    return (
        <nav className='flex justify-center items-center sticky top-0 z-100 bg-transparent'>
            <ul className='flex gap-8 lg:gap-12 mt-6 px-4 py-2 z-10'>
                <li
                    className={`text-lg lg:text-2xl ease-in duration-100 cursor-pointer ${selectedTab === 0 ? "text-crimsonCarrot font-semibold underline underline-offset-4" : "text-carbonBlack hover:scale-[1.03]"}`}
                    onClick={() => handleClick(0)}
                >
                    home
                </li>
                <li
                    className={`text-lg lg:text-2xl ease-in duration-100 cursor-pointer ${selectedTab === 1 ? "text-crimsonCarrot font-semibold underline underline-offset-4" : "text-carbonBlack hover:scale-[1.03]"}`}
                    onClick={() => handleClick(1)}>
                    projects
                </li>
                <li
                    className={`text-lg lg:text-2xl ease-in duration-100 cursor-pointer ${selectedTab === 2 ? "text-crimsonCarrot font-semibold underline underline-offset-4" : "text-carbonBlack hover:scale-[1.03]"}`}
                    onClick={() => handleClick(2)}
                >
                    about
                </li>
            </ul>
        </nav>
    )
}

export default Navbar