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
                <div className="github-container" style={descStyle}>
                    <h4>GitHub Links</h4>
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

function ProjectModal(props) {

    const modalCardStyle = {
        //height: open ? '100%' : '20em',
        width: '20em',
        height: '400px',
        position: 'absolute',
        right: '0',
        left: '0',
        top: '0',
        bottom: '0',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 'auto',
        marginBottom: 'auto',
        backgroundColor: 'red',
        opacity: props.open ? 1 : 0,
        //transform: props.isOpen ? 'translateY(100%)' : null,
        //display: props.isOpen ? 'block' : 'none',
    }

    return (
        <div className='modal-card-container' style={modalCardStyle}>
            Lol
        </div>
    )
}