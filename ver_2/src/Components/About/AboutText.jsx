import React from 'react'

const AboutText = () => {
    function calculateAge(dobString) {
        const birthDate = new Date(dobString);
        const today = new Date();

        let age = today.getFullYear() - birthDate.getFullYear();

        const monthDiff = today.getMonth() - birthDate.getMonth();

        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }

        return age;
    }

    return (
        <div className='py-4 mt-1 lg:mt-0 lg:py-3 msi:mt-1 msi:py-4 text-lg msi:text-xl 2xl:text-2xl flex flex-col gap-5 lg:gap-3 msi:gap-5 text-carbonBlack'>
            <p>
                Hey there! I'm <span className='font-semibold text-crimsonCarrot'>Gaurav Kumar Das</span>, a {calculateAge("2001-11-19")}-year-old passionate coder from Guwahati, Assam. With a strong background in full-stack web development, as well as experience in Android development, I love creating meaningful and interactive projects. I'm also experienced in building REST APIs and enjoy tackling challenging coding problems that push my skills further.
            </p>
            <p>
                I'm especially passionate about backend development, creative 3D modeling, and turning ideas into real-world solutions.
            </p>
        </div>
    )
}

export default AboutText