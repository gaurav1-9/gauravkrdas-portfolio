import React from 'react'
import profilePic from "../../assets/profilePic.png"

function DashboardImg() {
  return (
    <div className='absolute -right-20 -bottom-31 scale-65 z-0'>
        <img src={profilePic} draggable="false"/>
    </div>
  )
}

export default DashboardImg