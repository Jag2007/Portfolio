import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#091018] text-white antialiased selection:bg-[#7ef0c5] selection:text-[#07110d]">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(126,240,197,0.12),_transparent_30%),radial-gradient(circle_at_80%_20%,_rgba(243,198,119,0.1),_transparent_24%),linear-gradient(180deg,#091018_0%,#0c131b_55%,#081018_100%)]" />

      <Navbar />
      <Hero />
      <AboutMe />
      <Technologies />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
