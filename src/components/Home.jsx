import Navigation from './Navigation';
import Hero from './Hero';
import AboutMe from './AboutMe';
import ProjectList from './ProjectList';
import Footer from './Footer';

const App = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <Navigation />
      <Hero />
      <div className="max-w-5xl px-10 bg-purple-200">
        <AboutMe />
        <ProjectList />
      </div>

      <Footer />
    </div>
  );
};

export default App;
