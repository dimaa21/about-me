import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import PageLoader from './components/PageLoader';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Stack from './components/Stack';
import { useReveal, useScrollState } from './hooks';

export default function App() {
  useReveal();
  useScrollState();

  return (
    <>
      <PageLoader />
      <div className="grain" aria-hidden="true" />
      <div className="scroll-bar" aria-hidden="true" />
      <Header />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Stack />
        <Services />
        <Portfolio />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
