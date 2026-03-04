import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={
          <>
            <Navbar />
            <Hero />
            <Products />
            <div className="relative w-full h-96 bg-gradient-to-br from-blue-900 to-blue-800 overflow-hidden">
              <iframe
                src='https://my.spline.design/nexbotrobotcharacterconcept-WbGovI5SGj6Qz2UxNkvnd799/' 
                //src='https://my.spline.design/nexbotrobotcharacterconcept-WbGovI5SGj6Qz2UxNkvnd799/' 
                frameBorder='0' 
                width='100%' 
                height='100%'
                style={{border: 'none', width: '100%', height: '100%'}}
                title="3D Robot Character"
              />
            </div>
            <Footer />
          </>
        } />
        <Route path="/products" element={
          <>
            <Navbar />
            <Products />
            <Footer />
          </>
        } />
        <Route path="/about" element={
          <>
            <Navbar />
            <About />
            <Footer />
          </>
        } />
        <Route path="/contact" element={
          <>
            <Navbar />
            <Contact />
            <Footer />
          </>
        } />
      </Routes>
      
      {scrolled && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full shadow-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 z-40 flex items-center justify-center"
          aria-label="Scroll to top"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}
    </div>
  );
}

export default App;
