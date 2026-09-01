import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Strengths from "./components/Strengths";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useReducedMotion } from "./hooks/useReducedMotion";

export default function App() {
  const reduceMotion = useReducedMotion();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const duration = reduceMotion ? 0 : 1400;
    const timer = setTimeout(() => setLoading(false), duration);
    return () => clearTimeout(timer);
  }, [reduceMotion]);

  return (
    <>
      <Loader visible={loading} />
      <div className="relative overflow-x-hidden">
        <Navbar />
        <main>
          <Hero reduceMotion={reduceMotion} />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Certifications />
          <Strengths />
          <Contact reduceMotion={reduceMotion} />
        </main>
        <Footer />
      </div>
    </>
  );
}