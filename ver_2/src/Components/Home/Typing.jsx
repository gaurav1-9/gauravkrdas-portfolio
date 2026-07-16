import React from 'react'
import { TypeAnimation } from 'react-type-animation';

const Typing = ({ textSize, margin }) => {
    return (
        <div className={`${margin}`}>
            <h2 className={`${textSize} flex gap-1`}>
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