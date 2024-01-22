// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';

const App = () => {
  return (
    <Router>
    <Routes>
      <Route path="/skills" element={<Skills />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/" element={<Home />} />
    </Routes>
  </Router>
  );
};

export default App;
