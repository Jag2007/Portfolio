import About from './components/about';
import Contact from './components/contact';
import Hero from './components/Hero';
import Navbar from './components/navbar';
import Projects from './components/Projects';
import Technologies from './components/technologies';

function App() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-blue">
      
      {/* Full-page background gradient */}
      <div className="fixed inset-0 -z-10 h-full w-full bg-[radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]" />

      {/* Main content */}
      <Navbar />
      <Hero />
      <About />
      <Technologies/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
