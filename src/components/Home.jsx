import Navigation from './Navigation';
import Hero from './Hero';
import AboutMe from './AboutMe';
import ProjectList from './ProjectList';
import Footer from './Footer';

const App = () => {
  return (
    <div className="w-full flex flex-col relative items-center justify-center overflow-hidden">
      <div className="absolute pattern w-full h-full z-[-30]" />
      <Navigation />
      <Hero />
      <AboutMe />
      <ProjectList />
      <Footer className="bg-secondary" />
    </div>
  );
};

export default App;
