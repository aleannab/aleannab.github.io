import React from 'react';
import { Route, Routes } from 'react-router-dom';
import withRouter from '../hooks/withRouter';
import { Home } from '../pages/home';
import { Portfolio } from '../pages/portfolio';
import { ContactUs } from '../pages/contact';
import { Project } from '../pages/project';
import { About } from '../pages/about';
import { Socialicons } from '../components/socialicons';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const AnimatedRoutes = withRouter(({ location }) => {
  return (
    <TransitionGroup>
      <CSSTransition
        key={location.key}
        timeout={{
          enter: 400,
          exit: 400,
        }}
        classNames="page"
        unmountOnExit
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/projects/:projectId" element={<Project />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
});

function AppRoutes() {
  return (
    <div className="s_c">
      <AnimatedRoutes />
      <Socialicons />
    </div>
  );
}

export default AppRoutes;