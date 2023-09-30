import Hero from './components/Hero'
import AboutMe from './components/AboutMe'
import ProjectList from './components/ProjectList'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <Hero />
      <AboutMe />
      <ProjectList />
      <Footer />
    </div>
  )
}

export default App
