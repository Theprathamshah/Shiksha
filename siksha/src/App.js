import React from 'react';
import About from './components/About/about';
import Home from '../src/components/Home/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Layout/Header';
const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
