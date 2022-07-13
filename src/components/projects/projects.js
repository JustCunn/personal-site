import { React, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import useWindowDimensions from '../../GetWindow';

import ProjectCard  from './projectcard';

import AILO from '../../images/ailo.png';
import { Data } from './data';

import './projects.scss';

export default function Projects(props) {

    const [opacity, setOpacity] = useState(0)
    const [tran, setTran] = useState('translateY(-7px)');
    const { height, width } = useWindowDimensions();

    const titleStyle = {
        opacity: opacity,
        transform: tran
    }

    const LinkStyle = {
        textDecoration: 'none',
        color: 'black'
    }

    useEffect(() => {
        Data.map((i) => console.log(i.github))
        setTimeout(() => {
            setOpacity(1)
            setTran('translateY(0px)')
        }, 400);
    })

    return (
        <motion.div className="projects-container"
        initial={ (width <= 1024) ? {x: "100%", opacity: 0} : {transform: 'scale(0.75)', opacity: 0}}
        animate={ (width <= 1024) ? {x: 0, opacity: 1} : {transform: 'scale(1)', opacity: 1}}
        exit={ (width <= 1024) ? {x: "100%", opacity: 0} : {transform: 'scale(0.75)', opacity: 0}}
        transition={{ ease: "easeInOut", duration: 0.3 }}>
            <div className="projects-title" style={titleStyle} >
                <Link to="/" style={LinkStyle}>
                    <i class="fa fa-arrow-left" aria-hidden="true"></i>
                </Link>
                <p>Past Projects</p>
            </div>
            <div className="projects-wrapper">
                {Data.map((i) => {
                        return (
                            <ProjectCard img={AILO}
                            title={i.title}
                            time={i.time} 
                            desc={i.desc}
                            github={i.github}
                            tags={i.tags}
                            />
                        )
                    })}
            </div>
        </motion.div>
    )
}