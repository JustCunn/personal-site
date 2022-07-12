import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Awards from './components/awards/awards';
import Home from './components/home/home';
import ScrollToTop from './ScrollToTop';
import AnimatedRoutes from './AnimatedRoutes';

function App() {
  return (
    <>
    <Router>
      <ScrollToTop />
      <AnimatedRoutes />
    </Router>
    </>
  );
}

export default App;
