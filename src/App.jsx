import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import AboutMe from "./components/AboutMe";

function App() {
  return (
    <div className="relative w-screen min-h-screen overflow-x-hidden text-white antialiased selection:bg-[#00c896] selection:text-black">
      {/* Background glow gradient */}
      <div className="fixed inset-0 -z-10 w-screen h-screen bg-gradient-to-br from-[#0d1117] via-[#0a0f1f] to-[#05070c]" />

      <Navbar />
      <Hero />
      <AboutMe />
      <Technologies />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
