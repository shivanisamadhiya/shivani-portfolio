import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
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
    // Skip the decorative loading sequence entirely for users who've asked
    // their OS to reduce motion.
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
