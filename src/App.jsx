import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import PageLoader from './components/PageLoader';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Stack from './components/Stack';

export default function App() {
  useEffect(() => {
    const reveal = ScrollReveal({
      origin: 'top',
      distance: '24px',
      duration: 800,
      reset: false
    });

    reveal.reveal('.header-main, .about-me, .my-stack, .services, .project, .experience, .form', {
      interval: 200
    });

    return () => reveal.destroy();
  }, []);

  return (
    <>
      <PageLoader />
      <Header />
      <Hero />
      <About />
      <Stack />
      <Services />
      <Portfolio />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}
