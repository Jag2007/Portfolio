import Contact from "./components/Contact";
import BackgroundFX from "./components/BackgroundFX";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import SplashCursor from "./components/SplashCursor";
import Achievements from "./components/Achievements";

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#050608] text-white antialiased selection:bg-[#dfe5ef] selection:text-[#050608]">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.1),_transparent_24%),radial-gradient(circle_at_78%_18%,_rgba(186,193,205,0.08),_transparent_20%),linear-gradient(180deg,#050608_0%,#090a0d_50%,#030405_100%)]" />
      <BackgroundFX />
      <SplashCursor />

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <AboutMe />
        <Technologies />
        <Achievements />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
