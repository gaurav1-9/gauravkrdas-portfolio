import React from 'react'
import profilePic from "../../assets/profilePic.png"

function DashboardImg() {
  return (
    <div className='absolute md:-right-40 md:-bottom-70 lg:-right-20 lg:-bottom-31 2xl:-right-5 2xl:-bottom-8 md:scale-40 lg:scale-65 2xl:scale-85 z-0'>
        <img src={profilePic} draggable="false"/>
    </div>
  )
}

export default DashboardImg