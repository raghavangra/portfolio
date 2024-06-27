import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Hero from './Component/Hero/Hero';
import Skills from './Component/Skills/Skills';
import WorkExperience from './Component/WorkExperience/WorkExperience';
import Contact from './Component/Contact/Contact';
import Projects from './Component/Projects/Projects';
import Footer from './Component/Footer/Footer';

const App = () => {
  return (
    <>
      <Navbar />
      <div className='container'>
        <Hero />
        <Skills />
        <WorkExperience />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;
