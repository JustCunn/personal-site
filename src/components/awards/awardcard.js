import { React, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux'
import { flip } from './fadeSlice'

import './awardcard.scss';

export default function AwardCard(props) {
    const [open, setOpen] = useState(false);

    const fade = useSelector(state => state.fade.value)
    const dispatch = useDispatch()

    const cardStyle = {
        //height: open ? '100%' : '20em',
        //backgroundColor: open ? 'red' : 'white',
        //zIndex: open ? 2 : 1,
        //opacity: (open === false && fade === true) ? 0 : 1,
        position: 'relative',
        //justifyContent: open ? ''
        //transform: open ? 'translate(200,100)' : null,
    }

    const textStyle = {
        height: '50%',
        display: 'flex',
       
    }

    const imgStyle = {
        maxWidth: '100%',
        maxHeight: '95%',
    }

    const handleClick = () => {
        dispatch(flip());
        setOpen(!open)
    }

    return (
        <>
        <div className='awardcard-container'
            style={cardStyle}
            onClick={() => handleClick()}>
            <div className="card-else-container">
                <div className="card-img-container">
                    <img src={props.img} style={imgStyle}/>
                </div>
                <div className="card-text-container" style={textStyle}>
                    <p className='card-org'>{props.org}</p>
                    <p>{props.year}</p>
                </div>
            </div>
            <figcaption>
                <h3>{props.title}</h3>
                <p>{props.desc}</p>
            </figcaption>
        </div>
        </>
    )
}

function AwardModal(props) {

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