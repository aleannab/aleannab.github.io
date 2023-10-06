import Navigation from './Navigation';
import Hero from './Hero';
import AboutMe from './AboutMe';
import ProjectList from './ProjectList';
import Footer from './Footer';

const App = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center overflow-x-hidden">
      <Navigation />
      <Hero />
      <div className="max-w-5xl px-10">
        <AboutMe />
        <ProjectList />
      </div>

      <Footer className="bg-secondary" />
    </div>
  );
};

export default App;
