import { React, useState } from 'react';

import './contact_block.scss';

export default function ContactBlock(props) {

    const [hovered, setHovered] = useState(false);

    const containerStyle = {
        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
        backgroundColor: hovered ? `${props.col}` : "white"
    }

    const titleStyle = {
        color: props.col
    }


    return (
        <a href={props.link} className='cb-container' onMouseEnter={() => setHovered(true)} 
        onMouseLeave={() => setHovered(false)} style={containerStyle}  target="_blank">
            <div className="cb-img-container">
                {/*<img src={BT} style={imgStyle}/>*/}
                <i className={`fa fa-${props.icon}`}></i>
            </div>
            <div className="cb-text-container">
                <div className="cb-title" style={titleStyle}>
                    {props.title}
                </div>
            </div>
        </a>
    )
}