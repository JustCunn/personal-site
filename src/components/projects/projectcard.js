import { transform } from 'framer-motion';
import { React, useState } from 'react';
import useWindowDimensions from '../../GetWindow';

import { useSelector, useDispatch } from 'react-redux'
import { flip } from '../awards/fadeSlice'

import './projectcard.scss';

export default function ProjectCard(props) {
    
    const [open, setOpen] = useState(false);
    const { height, width } = useWindowDimensions();

    const fade = useSelector(state => state.fade.value)
    const dispatch = useDispatch()

    const cardStyle = {
        maxHeight: open ? '100em' :  (width <= 1024) ? '4em' : '5em',
        //backgroundColor: open ? 'red' : 'white',
        //zIndex: open ? 2 : 1,
        //opacity: (open === false && fade === true) ? 0 : 1,
        position: 'relative',
        //justifyContent: open ? ''
        //transform: open ? 'translate(200,100)' : null,
    }

    const descStyle = {
        opacity: open ? 1 : 0,
        transform: open ? 'none' : 'translateY(-10px)'
    }

    const handleClick = () => {
        dispatch(flip());
        setOpen(!open)
    }

    const chevronStyle = {
        transform: open ? 'rotate(180deg) scale(2)' : 'scale(2)'
    }

    return (
        <>
        <div className='projectcard-container'
            style={cardStyle}>
                <div className="project-card-title" onClick={() => handleClick()}>
                    <h1>{props.title}</h1>
                    <p className='project-card-time'>{props.time}</p>
                    <div className="project-chevron-wrapper">
                        <i class="fa fa-chevron-down" style={chevronStyle} />
                    </div>
                </div>
                <hr />
                <div className="project-desc" style={descStyle}>
                    {props.desc}
                </div>
                <div className="tag-wrapper" style={descStyle}>
                    {props.tags.map((i) => {
                        return (
                            <Tag tag={i} />
                        )
                    })}
                </div>
                <div className="github-container" style={descStyle}>
                    <h4>Links</h4>
                    <div className="github-grid" >
                        {props.github.map((i) => {
                            return (
                                <a href={i.link} >{i.name}</a>
                            )
                        })}
                    </div>
                </div>
        </div>
        </>
    )
}

function Tag(props) {

    return (
        <div className="tag-container">
            {props.tag}
        </div>
    )

}