
import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { Header } from './components/Header';
import { Skills } from './components/Skills';
import { ExperienceSection } from './components/Experience';
import { EducationSection } from './components/Education';
import { CertificationsSection } from './components/Certifications';


const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 selection:bg-indigo-500/30">
      <Header scrolled={scrolled} />
      
      <main className="max-w-7xl mx-auto px-6 py-20 space-y-24">
        <section id="home">
          <Hero />
        </section>

        <section id="education" className="scroll-mt-32">
          <EducationSection />
        </section>

        <section id="skills" className="scroll-mt-32">
          <Skills />
        </section>

        <section id="experience" className="scroll-mt-32">
          <ExperienceSection />
        </section>

        <section id="certifications" className="scroll-mt-32">
          <CertificationsSection />
        </section>
      </main>

  
    </div>
  );
};

export default App;
