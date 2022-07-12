import { React, useState } from 'react';
import useWindowDimensions from '../../GetWindow';

import './pressblock.scss';

export default function Pressblock(props) {
    
    const [open, setOpen] = useState(false);
    const { height, width } = useWindowDimensions();


    const contStyle = {
        width: (width <= 1024) ? "100%" : (props.image === null) ? "100%" : "80%",
        height: (width <= 1024) ?  "auto" : "12em"
    }

    const imgStyle = {
        width: (width <= 1024) ? "100%" : (props.image === null) ? "0%" : "20%", 
        height: (width <= 1024) ? (props.image === null) ? 0 : "10em" : null
    }

    return (
        <>
        <a href={props.link} className="pressblock-container" target="_blank">
            <div className="press-item-container" style={contStyle}>
                <div className="press-title-container">
                    {props.favicon != null && (<div className="press-favicon">
                        <img src={props.favicon} alt=""/>
                    </div>)}
                    <div className="press-block-title">
                        {props.title}
                    </div>
                </div>
                <div className="press-org-container">
                    {props.org}
                </div>
                <div className="press-description">
                    {props.desc}
                </div>
            </div>
            <div className="press-img-container" style={imgStyle}>
                <img src={props.image} alt="" />
            </div>
        </a>
        </>
    )
}