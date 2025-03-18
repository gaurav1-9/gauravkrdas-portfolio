import React, { useState } from 'react'

function Navbar() {
    const [selectedTab,setSelectedTab] = useState(0);
  return (
    <nav className='flex justify-center items-center'>
        <ul className='flex gap-12 bg-secondaryAccent mt-6 px-4 py-2 z-10 rounded-2xl shadow-[0_0_6px_rgba(0,0,0,0.25)]'>
            <li className={`text-2xl ease-in duration-100 cursor-pointer ${(selectedTab===0)? "text-secondary":"text-primary"} hover:scale-[1.03]`} 
            onClick={()=> setSelectedTab(0)}
            >
                HOME
            </li>
            <li className={`text-2xl ease-in duration-100 cursor-pointer ${(selectedTab===1)? "text-secondary":"text-primary"} hover:scale-[1.03]`} 
            onClick={()=> setSelectedTab(1)}
            >
                PROJECTS
            </li>
            <li className={`text-2xl ease-in duration-100 cursor-pointer ${(selectedTab===2)? "text-secondary":"text-primary"} hover:scale-[1.03]`} 
            onClick={()=> setSelectedTab(2)}
            >
                ABOUT
            </li>
        </ul>
    </nav>
  )
}

export default Navbar