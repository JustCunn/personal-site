import { React, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";
import useWindowDimensions from '../../GetWindow';

import AwardCard from './awardcard';
import './awards.scss';

import AILO from '../../images/ailo.png';
import BT from '../../images/btyste.png';
import PATCH from '../../images/patch.png';
import IAMTA from '../../images/iamta.png';
import BTBB from '../../images/btbb.jpeg';
import IMTA from '../../images/imta.jpeg';

export default function Awards(props) {

    const [opacity, setOpacity] = useState(0)
    const [tran, setTran] = useState('translateY(-7px)')
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
        setTimeout(() => {
            setOpacity(1)
            setTran('translateY(0px)')
        }, 400);
    })

    return (
        <motion.div className="awards-container"
        initial={ (width <= 1024) ? {x: "100%", opacity: 0} : {transform: 'scale(0.75)', opacity: 0}}
        animate={ (width <= 1024) ? {x: 0, opacity: 1} : {transform: 'scale(1)', opacity: 1}}
        exit={ (width <= 1024) ? {x: "100%", opacity: 0} : {transform: 'scale(0.75)', opacity: 0}}
        transition={{ ease: "easeInOut", duration: 0.2 }}>
            <div className="awards-title" style={titleStyle} >
                <Link to="/" style={LinkStyle}>
                    <i class="fa fa-arrow-left" aria-hidden="true"></i>
                </Link>
                <p>Awards and Achievements</p>
            </div>
            <div className="awards-grid-wrapper">
            <div className='awards-grid-container'>
                <AwardCard img={AILO}
                        title="3rd Place Overall"
                        org="All Ireland Linguistics Olympiad"
                        year={2022} 
                        desc="3rd place in the All Ireland Linguistics Olympiad. Earned a place on the Irish
                         International Linguistics Olympiad team that took place in Isle of Man."/>

                <AwardCard img={BT}
                        title="2nd Place | Technology Senior"
                        org="BT Young Scientist and Technologist Exhibition"
                        year={2022} 
                        desc="Got 2nd place in the Senior Technology Group category for my project 'Uscalt: An Open Data 
                        Ecosystem'"/>

                <AwardCard img={PATCH}
                        title="Patch Alumnus"
                        org="Patch"
                        year={2021}
                        desc="Selected to participate in the Patch accelerator for young people. Spent 6 weeks working with a 
                        team on 'WatchOut Safety', a construction site safety app"/>

                <AwardCard img={AILO}
                        title="Overall Champion"
                        org="All Ireland Linguistics Olympiad"
                        year={2021} 
                        desc="1st Place in the All Ireland Linguistics Olympiad. Earned a place on the Irish International 
                        Linguistics Olympiad team that virtually took place in Latvia."/>

                <AwardCard img={BT}
                        title="1st Place | Technology Senior"
                        org="BT Young Scientist and Technologist Exhibition"
                        year={2021} 
                        desc="Got 1nd place in the Senior Technology Group category for my project 'Aistright: A Smart 
                        Translator'"/>  

                <AwardCard img={BT}
                        title="HEANet Special Award"
                        org="BT Young Scientist and Technologist Exhibition"
                        year={2021} 
                        desc="Received the HEANet special award for my project 'Aistright: A Smart 
                        Translator'"/>

                <AwardCard img={AILO}
                        title="4th Place"
                        org="All Ireland Linguistics Olympiad"
                        year={2020} 
                        desc="4th Place in the All Ireland Linguistics Olympiad. Earned a place on the Irish International 
                        Linguistics Olympiad team that was due to take place in Latvia. The international contest was 
                        cancelled."/>

                <AwardCard img={BTBB}
                        title="BT Business Bootcamp Alumnus"
                        org="BT Young Scientist and Technologist Exhibition and UCD"
                        year={2020} 
                        desc="Invited to participate in the BT Business Bootcamp. Spent a week with a team working on a 
                        sustainable energy project for Cork and pitched it to a panel. Panel members included Shay Walsh, head
                        of BT Ireland, and Will Goodbody, former Technology Correspondent for RTÉ."/> 

                <AwardCard img={IAMTA}
                        title="Junior Applied Maths Kildare Winner"
                        org="Irish Applied Maths Teachers' Association"
                        year={202} 
                        desc="Won the Junior Applied Maths competition for the Kildare region. The national competition was 
                        cancelled. Placed 2nd overall out of all participants in all regions in the regional competition."/> 

                <AwardCard img={BT}
                        title="1st Place | Technology Intermediate"
                        org="BT Young Scientist and Technologist Exhibition"
                        year={2020} 
                        desc="Got 1nd place in the Intermediate Technology Group category for my project 'Reusable Braille 
                        Display'"/>  

                <AwardCard img={BT}
                        title="NCSE Special Award"
                        org="BT Young Scientist and Technologist Exhibition"
                        year={2020} 
                        desc="Received the National Council for Special Education (NCSE) special award for my project 
                        'Reusable Braille Display'"/> 

<               AwardCard img={AILO}
                        title="Junior Champion"
                        org="All Ireland Linguistics Olympiad"
                        year={2019} 
                        desc="Junior Champion and 6th Place overall in the All Ireland Linguistics Olympiad."/>

                <AwardCard img={IMTA}
                        title="Pi Quiz Winner"
                        org="Irish Maths Teachers' Association"
                        year={2019} 
                        desc="Won the Pi Quiz Maths competition, a 2nd-level maths competition for TY students"/>

            </div>
            </div>
        </motion.div>
    )
}