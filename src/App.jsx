import {motion} from 'framer-motion';
import About from './components/about';
import Contact from './components/contact';
import Hero from './components/Hero';
import Navbar from './components/navbar';
import Projects from './components/Projects';
import Technologies from './components/technologies';

function App() {
  return (
    <motion.div
      className="relative min-h-screen w-full overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-blue"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="fixed inset-0 -z-10 h-full w-full bg-[radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]" />
      <Navbar />
      <Hero />
      <About />
      <Technologies />
      <Projects />
      <Contact />
    </motion.div>
  );
}

export default App;
