import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";

function App() {
  return (
    <div className="relative min-h-screen w-screen overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-blue">
      {/* Full screen gradient background */}
      <div className="fixed inset-0 -z-10 w-screen h-screen bg-gradient-to-br from-[#0f172a] via-[#0c1325] to-[#020617]" />

      <Navbar />
      <Hero />
      <About />
      <Technologies />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
