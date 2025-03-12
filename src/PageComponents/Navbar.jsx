import React, { useState } from 'react'

function Navbar() {
    var [selectedTab,setSelectedTab] = useState(0);
  return (
    <nav className='flex justify-center items-center'>
        <ul className='flex gap-4 bg-secondaryAccent mt-2 px-2 py-0.5 rounded-md shadow-[0_0_4px_rgba(0,0,0,0.25)]'>
            <li className={`text-[10px] cursor-pointer ${(selectedTab===0)? " text-secondary":"text-primary"}`} 
            onClick={()=> setSelectedTab(0)}
            >
                HOME
            </li>
            <li className={`text-[10px] cursor-pointer ${(selectedTab===1)? " text-secondary":"text-primary"}`} 
            onClick={()=> setSelectedTab(1)}
            >
                PROJECTS
            </li>
            <li className={`text-[10px] cursor-pointer ${(selectedTab===2)? " text-secondary":"text-primary"}`} 
            onClick={()=> setSelectedTab(2)}
            >
                ABOUT
            </li>
        </ul>
    </nav>
  )
}

export default Navbar