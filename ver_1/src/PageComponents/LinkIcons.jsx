import React from 'react'
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { BiLogoBlender } from "react-icons/bi";
import { Tooltip } from 'react-tooltip';

const LinkIcons = ({iconSize, toolTipLocation, idName}) => {
    return (
        <div className='flex gap-2 text-primary text-xs'>
            <a href="https://www.instagram.com/gaurav1_9/" target="_blank" rel="noopener noreferrer">
                <FaInstagram data-tooltip-id={`insta-${idName}`} className={`outline-none ${iconSize} pointer hover:text-secondary`} />
            </a>
            <a href="https://github.com/gaurav1-9" target="_blank" rel="noopener noreferrer">
                <FaGithub data-tooltip-id={`github-${idName}`} className={`outline-none ${iconSize} pointer hover:text-secondary`} />
            </a>
            <a href="https://www.linkedin.com/in/gaurav-kumar-das/" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn data-tooltip-id={`linkedin-${idName}`} className={`outline-none ${iconSize} pointer hover:text-secondary`} />
            </a>
            <a href="https://www.instagram.com/argkd_/" target="_blank" rel="noopener noreferrer">
                <BiLogoBlender data-tooltip-id={`argkd-${idName}`} className={`outline-none ${iconSize} pointer hover:text-secondary`} />
            </a>
            <Tooltip
                id={`insta-${idName}`}
                place={toolTipLocation}
                content="Instagram"
                className='!text-xl !rounded-lg'
            />
            <Tooltip
                id={`github-${idName}`}
                place={toolTipLocation}
                content="Github"
                className='!text-xl !rounded-lg'
            />
            <Tooltip
                id={`linkedin-${idName}`}
                place={toolTipLocation}
                content="LinkedIn"
                className='!text-xl !rounded-lg'
            />
            <Tooltip
                id={`argkd-${idName}`}
                place={toolTipLocation}
                content="3D Renders"
                className='!text-xl !rounded-lg'
            />
        </div>
    )
}

export default LinkIcons