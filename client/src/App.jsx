import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

// Components
import Navbar from './components/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Contact from './components/sections/Contact';
import Footer from './components/Footer';
import Loader from './components/Loader';
import CustomCursor from './components/CustomCursor';
import ScrollToTop from './components/ScrollToTop';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-background">
        {/* Custom Cursor */}
        <CustomCursor />
        
        <AnimatePresence mode="wait">
          {loading ? (
            <Loader key="loader" />
          ) : (
            <motion.div
              key="main"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {/* Navigation */}
              <Navbar />

              {/* Main Content */}
              <main>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Experience />
                <Contact />
              </main>

              {/* Footer */}
              <Footer />

              {/* Scroll to Top Button */}
              <ScrollToTop />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </ThemeProvider>
  );
}

export default App;
