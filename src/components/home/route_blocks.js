import { React, useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import './route_block.scss';
import BT from '../../images/btyste.png';

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }
  
function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
        setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
}

export default function RouteBlock(props) {

    const [hovered, setHovered] = useState(false);
    const { height, width } = useWindowDimensions();

    const imgStyle = {
        maxWidth: '100%',
        maxHeight: '100%',
    }

    const containerStyle = {
        boxShadow: hovered ? `${props.col},0.4) 0px 7px 29px 0px` : "rgba(149, 157, 165, 0.2) 0px 8px 24px"
    }

    const descStyle = (width <= 1024) ? null : {
        transform: hovered ? null : 'translateY(10px)',
        opacity: hovered ? 1 : 0
    }

    const titleStyle = (width <= 1024) ? null : {
        transform: hovered ? null : 'translateY(10px)'
    }

    const LinkStyle = {
        textDecoration: 'none',
        color: 'black',
        width: '95%'
    }

    if (props.route === 'cv') {
        return (
            <a href="/Justin_CV.pdf" download style={LinkStyle}>
                <div className='rb-container' onMouseEnter={() => setHovered(true)} 
                onMouseLeave={() => setHovered(false)} style={containerStyle}>
                    <div className="rb-img-container">
                        {/*<img src={BT} style={imgStyle}/>*/}
                        {props.img}
                    </div>
                    <div className="rb-text-container">
                        <div className="rb-title" style={titleStyle}>
                            {props.title}
                        </div>
                        <div className="rb-desc" style={descStyle}>
                            {props.desc}
                        </div>
                    </div>
                </div>
            </a>
        )
    } else {
        return (
            <Link to={props.route} style={LinkStyle}>
                <div className='rb-container' onMouseEnter={() => setHovered(true)} 
                onMouseLeave={() => setHovered(false)} style={containerStyle}>
                    <div className="rb-img-container">
                        {/*<img src={BT} style={imgStyle}/>*/}
                        {props.img}
                    </div>
                    <div className="rb-text-container">
                        <div className="rb-title" style={titleStyle}>
                            {props.title}
                        </div>
                        <div className="rb-desc" style={descStyle}>
                            {props.desc}
                        </div>
                    </div>
                </div>
            </Link>
        )
    }
}