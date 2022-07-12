import { React, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import useWindowDimensions from '../../GetWindow';

import Pressblock from './pressblock';

import { Data } from './data';

import './press.scss';

export default function Press(props) {

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
        console.log(222)
        setTimeout(() => {
            setOpacity(1)
            setTran('translateY(0px)')
        }, 400);
    })

    return (
        <motion.div className="press-container"
        initial={ (width <= 1024) ? {x: "100%", opacity: 0} : {transform: 'scale(0.75)', opacity: 0}}
        animate={ (width <= 1024) ? {x: 0, opacity: 1} : {transform: 'scale(1)', opacity: 1}}
        exit={ (width <= 1024) ? {x: "100%", opacity: 0} : {transform: 'scale(0.75)', opacity: 0}}
        transition={{ ease: "easeInOut", duration: 0.3 }}>
            <div className="press-title" style={titleStyle} >
                <Link to="/" style={LinkStyle}>
                    <i class="fa fa-arrow-left" aria-hidden="true"></i>
                </Link>
                <p>Press</p>
            </div>
            <div className="press-wrapper">
                {Data.map((i) => {
                    return (
                        <Pressblock title={i.title}
                                    desc={i.description}
                                    image={i.image}
                                    link={i.link}
                                    org={i.org}
                                    favicon={i.favicon} />
                    )
                })}
            </div>
        </motion.div>
    )
}