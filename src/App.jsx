import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import Home from './components/Home';
import ProjectTemplate from './components/ProjectTemplate';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:projectId" element={<ProjectTemplate />} />
      </Routes>
    </Router>
  );
}

export default App;
