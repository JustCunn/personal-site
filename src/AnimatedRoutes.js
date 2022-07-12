import { React } from 'react';

import {BrowserRouter as Router, Routes, Route, useLocation} from "react-router-dom";
import Awards from './components/awards/awards';
import Home from './components/home/home';
import Projects from './components/projects/projects';
import Press from './components/press/press';

import { AnimatePresence } from 'framer-motion';

export default function AnimatedRoutes(props) {
    const location = useLocation();

    return (
        <AnimatePresence exitBeforeEnter>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/awards" element={<Awards />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/press" element={<Press />} />
            </Routes>
        </AnimatePresence>
    )
}