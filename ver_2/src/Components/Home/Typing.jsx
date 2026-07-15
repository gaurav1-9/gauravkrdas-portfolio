import React from 'react'
import { TypeAnimation } from 'react-type-animation';

const Typing = () => {
    return (
        <div className='mt-12'>
            <h2 className='text-xl flex gap-1'>
                <span>//</span>
                <TypeAnimation
                    sequence={[
                        'FULL STACK DEVELOPER',
                        1000,
                        'MOBILE APP DEVELOPER',
                        1000,
                        'BLENDER 3D ARTIST',
                        1000,
                    ]}
                    wrapper="span"
                    speed={60}
                    repeat={Infinity}
                />
            </h2>
        </div>
    )
}

export default Typing