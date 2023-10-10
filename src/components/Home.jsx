import Navigation from './Navigation';
import Hero from './Hero';
import AboutMe from './AboutMe';
import ProjectList from './ProjectList';
import Footer from './Footer';

const App = () => {
  return (
    <div className="w-full flex flex-col relative items-center justify-center overflow-hidden">
      <Navigation />
      <Hero />
      <div className="max-w-5xl px-20">
        <AboutMe />
        <ProjectList />
      </div>

      <Footer className="bg-secondary" />
    </div>
  );
};

export default App;
