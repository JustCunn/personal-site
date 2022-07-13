import { React, useState, useEffect } from 'react';

import {Data} from './data';

import './recent.scss';

export default function Recent(props) {

    const [num, setNum] = useState(0);

    const dotStyle = (number) => {
        return ({
            backgroundColor: (num === number) ? "#000000" : "#b7b7b7" 
        })
    }

    const setDot = (number) => {
        setNum(number);
    }

    const elseStyle = {
        transform: (num === 0) ? null : ((num === 1) ? 'translateY(-5em)' : 'translateY(-10em)')
    }

    useEffect(() => {
        const intervalID = setInterval(() => {
            if (num === 2) {
                setNum(0);
            } else {
                setNum(num+1)
            }
        }, 5000);

        return () => clearInterval(intervalID);
    })

    return (
        <div className='recent-container'>
            <div className="recents-wrapper">
                <div className="other-recents" style={elseStyle}>
                    <div className="recents recent-1">
                        {Data[0].title}
                    </div>
                    <div className="recents recent-2">
                        {Data[1].title}
                    </div>
                    <div className="recents recent-3">
                        {Data[2].title}
                    </div>
                </div>
            </div>
            <div className="recent-dots">
                <div className="dot" id="1" style={dotStyle(0)} onClick={() => setDot(0)}></div>
                <div className="dot" id="2" style={dotStyle(1)} onClick={() => setDot(1)}></div>
                <div className="dot" id="3" style={dotStyle(2)} onClick={() => setDot(2)}></div>
            </div>
        </div>
    )
}