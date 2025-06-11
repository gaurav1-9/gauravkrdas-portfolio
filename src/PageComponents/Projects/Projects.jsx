import React from 'react'
import GithubChart from './GithubChart'
import ProjectList from './ProjectList'


const Projects = () => {
    const projectList = [
        {
            name: "janim.ai",
            techStack: [
                {
                    icon: "devicon-react-original",
                    techName: "React"
                },
                {
                    icon: "devicon-tailwindcss-original",
                    techName: "TailwindCSS"
                },
                {
                    icon: "devicon-nodejs-plain",
                    techName: "NodeJs"
                },
                {
                    icon: "devicon-express-original",
                    techName: "Express"
                },
                {
                    icon: "devicon-mongodb-plain",
                    techName: "MongoDB"
                },
            ],
            desc: "A web based user friendly AI driven quiz application.",
            link: "https://github.com/gaurav1-9/janim.ai",
            hostLink: null,
        },
        {
            name: "READORA - Book Exchange Social Media",
            techStack: [
                {
                    icon: "devicon-react-original",
                    techName: "React"
                },
                {
                    icon: "devicon-tailwindcss-original",
                    techName: "TailwindCSS"
                },
                {
                    icon: "devicon-nodejs-plain",
                    techName: "NodeJs"
                },
                {
                    icon: "devicon-express-original",
                    techName: "Express"
                },
                {
                    icon: "devicon-mongodb-plain",
                    techName: "MongoDB"
                },
            ],
            desc: "A web based social network platform to exchange books.",
            link: "https://github.com/gaurav1-9/readora-BookExchange-SocialMedia",
            hostLink: null,
        },
        {
            name: "My Portfolio",
            techStack: [
                {
                    icon: "devicon-react-original",
                    techName: "React"
                },
                {
                    icon: "devicon-tailwindcss-original",
                    techName: "TailwindCSS"
                },
            ],
            desc: "The page you are currently browsing is also one of my projects.",
            link: "https://github.com/gaurav1-9/gauravkrdas-portfolio",
            hostLink: "https://gauravkrdas-portfolio.vercel.app/",
        },
        {
            name: "React Notes App",
            techStack: [
                {
                    icon: "devicon-react-original",
                    techName: "React"
                },
                {
                    icon: "devicon-nodejs-plain",
                    techName: "Node.js"
                },
                {
                    icon: "devicon-express-original",
                    techName: "Express"
                },
                {
                    icon: "devicon-tailwindcss-original",
                    techName: "TailwindCSS"
                },
            ],
            desc: "A responsive user friendly Notes management app made in React and TailwindCSS with draggable notes card.",
            link: "https://github.com/gaurav1-9/react-notes-app",
            hostLink: "https://react-notes-app-peach-seven.vercel.app/",
        },
        {
            name: "Word To Number ",
            techStack: [
                {
                    icon: "devicon-react-original",
                    techName: "React"
                },
                {
                    icon: "devicon-nodejs-plain",
                    techName: "Node.js"
                },
                {
                    icon: "devicon-express-original",
                    techName: "Express"
                },
                {
                    icon: "devicon-tailwindcss-original",
                    techName: "TailwindCSS"
                },
            ],
            desc: "A simple word to number converter for three digit numbers",
            link: "https://github.com/gaurav1-9/wordToNumber",
            hostLink: null,
        },
        {
            name: "Gym Bro App",
            techStack: [
                {
                    icon: "devicon-flutter-plain",
                    techName: "Flutter",
                },
                {
                    icon: "devicon-dart-plain",
                    techName: "Dart",
                },
                {
                    icon: "devicon-firebase-plain",
                    techName: "Firebase",
                },
            ],
            desc: "A user friendly personal gym workout tracker app with full personalised workout routine.",
            link: "https://github.com/gaurav1-9/gym-bro-app",
            hostLink: null,
        },
        {
            name: "Tic-Tac-Toe App",
            techStack: [
                {
                    icon: "devicon-flutter-plain",
                    techName: "Flutter",
                },
                {
                    icon: "devicon-dart-plain",
                    techName: "Dart",
                },
            ],
            desc: "A user friendly classic Tic-Tac-Toe arcade game app for Android devices",
            link: "https://github.com/gaurav1-9/tic_tac_toe_app",
            hostLink: null,
        },
        {
            name: "Fabric Classificarion Chatbot",
            techStack: [
                {
                    icon: "devicon-flutter-plain",
                    techName: "Flutter",
                },
                {
                    icon: "devicon-dart-plain",
                    techName: "Dart",
                },
                {
                    icon: "devicon-python-plain",
                    techName: "Python",
                },
                {
                    icon: "devicon-html5-plain",
                    techName: "HTML"
                },
                {
                    icon: "devicon-css3-plain",
                    techName: "CSS"
                },
                {
                    icon: "devicon-javascript-plain",
                    techName: "JavaScript"
                },
            ],
            desc: "My B.Tech final year project; which is a chatbot fabric classification of Muga and Tussar silk (Web page + Android App)",
            link: "https://github.com/gaurav1-9/fabric-classification-android-chatbot",
            hostLink: null,
        },
        {
            name: "GCU Knowledge Hub",
            techStack: [
                {
                    icon: "devicon-flutter-plain",
                    techName: "Flutter",
                },
                {
                    icon: "devicon-dart-plain",
                    techName: "Dart",
                },
                {
                    icon: "devicon-firebase-plain",
                    techName: "Firebase",
                },
            ],
            desc: "A is a user friendly quiz app developed for all the student and faculties of Girijananda Chowdhury University, Guwahati during Appathon, 2024 (Winner).",
            link: "https://github.com/gaurav1-9/gcu_knowledge_hub",
            hostLink: "https://play.google.com/store/apps/details?id=com.iicappgcu.gcu_knowledge_hub&pcampaignid=web_share",
        },
        {
            name: "APDCL Chatbot Service",
            techStack: [
                {
                    icon: "devicon-html5-plain",
                    techName: "HTML"
                },
                {
                    icon: "devicon-css3-plain",
                    techName: "CSS"
                },
                {
                    icon: "devicon-javascript-plain",
                    techName: "JavaScript"
                },
                {
                    icon: "devicon-python-plain",
                    techName: "Python"
                },
                {
                    icon: "devicon-mysql-original",
                    techName: "MySQL"
                },
            ],
            desc: "My BTech 6th semester Industrial Internship project which is a chatbot service for Assam Power Distribution Company Limited",
            link: "https://github.com/gaurav1-9/APDCL_Chatbot_Service",
            hostLink: null,
        },
        {
            name: "Assignment Submission Portal",
            techStack: [
                {
                    icon: "devicon-html5-plain",
                    techName: "HTML"
                },
                {
                    icon: "devicon-css3-plain",
                    techName: "CSS"
                },
                {
                    icon: "devicon-javascript-plain",
                    techName: "JavaScript"
                },
                {
                    icon: "devicon-mysql-original",
                    techName: "MySQL"
                },
            ],
            desc: "An online portal for seamless assignment submission and evaluation, built for students and educators.",
            link: "https://github.com/gaurav1-9/Assignment_Submission_Portal",
            hostLink: null,
        },
        {
            name: "Online Gaming Platform",
            techStack: [
                {
                    icon: "devicon-html5-plain",
                    techName: "HTML"
                },
                {
                    icon: "devicon-css3-plain",
                    techName: "CSS"
                },
                {
                    icon: "devicon-javascript-plain",
                    techName: "JavaScript"
                },
            ],
            desc: "A simple game platform for classic games like snakes and block run.",
            link: "https://github.com/gaurav1-9/online-gaming-platform",
            hostLink: null,
        },
    ]
    return (
        <div className="w-full h-fit">
            <GithubChart />
            <ProjectList projList={projectList} />
        </div>
    )
}

export default Projects