import { React, useEffect, useState } from 'react';
import { motion, transform } from 'framer-motion';

import RouteBlock from './route_blocks';
import ContactBlock from './contact_block';
import Recent from './recent';
import TextGradientComponent from './text_gradient';

import JUSTIN from '../../images/jcunn.jpeg';

import './home.scss';

export default function Home(props) {

    const [opacity, setOpacity] = useState(false);

    const heroStyle = {
        backgroundColor: opacity ? 'rgba(255,255,255,0)' : 'rgba(255,255,255,1)'
    }

    useEffect(() => {
        setTimeout(() => {
            setOpacity(true);
        }, 200);
    })

    const nameStyle = {
        background: "-webkit-linear-gradient(180deg, rgba(243,182,253,1) 0%, rgba(198,183,71,1) 100%)",
        WebkitbackgroundClip: "text",
        WebkitTextFillColor: "transparent",
    }

    return (
        <motion.div className='home-container'
        initial={{ opacity: 0}}
        animate={{ opacity: 1}}
        exit={{ opacity: 0}}
        transition={{ ease: "easeInOut", duration: 0.2}}>
            <div className="home-header-container">
                <div className="home-head-img-wrapper">
                    <div className="home-head-img">
                        <img src={JUSTIN} alt="" />
                    </div>
                </div>
                <div className="hide-div" style={heroStyle}></div>
            </div>
            <div className="greeting-container">
                <TextGradientComponent size={'5.6em'} message="Hi, I'm Justin"/>
                <div className="greeting">
                    I'm a student in Ireland with a passion for software development with experience with Frontend
                     Development, Backend Development and Machine Learning  
                </div>
            </div>
            <div className="home-recent-container">
                <TextGradientComponent size={'2em'} message="Recent News"/>
                <Recent />
            </div>
            <div className="home-rb-container">
                <div className="home-rb-grid-container">
                    <RouteBlock img="📄" title='Curriculum Vitae' col="rgba(61,61,67"
                                desc="Downloads a copy of my up-to-date CV" route="cv" />
                    <RouteBlock img="🏆" title='Achievements' col="rgba(213,152,28"
                                desc="A collection of awards and accolades" route="awards" />
                    <RouteBlock img="📌" title='Past Projects' col="rgba(183,51,53"
                                desc="A collection of past projects I've worked on" route="projects" />
                    <RouteBlock img="🎥" title='Press' col="rgba(61,61,67" desc="Press Coverage" route="press" />
                </div>
            </div>
            <div className="home-cb-container">
                <TextGradientComponent size={'2em'} message="Get in touch"/>
                <div className="home-cb-grid-container">
                    <ContactBlock icon="twitter" title='Twitter' col="#1DA1F2"
                    link="https://twitter.com/Justin_Cunn"/>
                    <ContactBlock icon="linkedin" title='Linkedin' col="#0072b1"
                    link="https://www.linkedin.com/in/justinicunningham/"/>
                    <ContactBlock icon="envelope-o" title='Email' col="#f6859d"
                    link="mailto:justinike.cunningham@outlook.com"/>
                    <ContactBlock icon="github" title='Github' col="black"
                    link="https://github.com/JustCunn"/>
                </div>
            </div>
            <div className="home-footer">
                <p>Developed by Justin Cunningham</p>
                <p>Last Update: 12th July 2022</p>
            </div>
        </motion.div>
    )
}