import React from 'react'
import landingImage from '../assets/Profile_HTimage.png'
import MobileHeroImage from './Home/MobileHeroImage'

const Home = () => {
    return (
        <div className='px-5 md:px-10 lg:px-30 mt-8'>
            <MobileHeroImage image={landingImage} />
        </div>
    )
}

export default Home