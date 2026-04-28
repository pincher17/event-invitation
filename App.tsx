
import React, { useRef } from 'react';
import Hero from './components/Hero';
import VideoSection from './components/VideoSection';
import ProgramSection from './components/ProgramSection';
import FormSection from './components/FormSection';
import { Main, Footer } from './styles/App.styles';
import { GlobalStyles } from './styles/GlobalStyles';

const App: React.FC = () => {
  const formRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <GlobalStyles />
      <Main>
        {/* Screen 1: Hero */}
        <Hero onRegisterClick={scrollToForm} />

        {/* Screen 2: Video Background Text */}
        <VideoSection />

        {/* Screen 3: Program & Details */}
        <ProgramSection />

        {/* Screen 4: The Form */}
        <div ref={formRef}>
          <FormSection />
        </div>

        <Footer>
          <p>
             Презентация кейтерингового направления<br/>
             © 2026 отель "Замковый"
          </p>
        </Footer>
      </Main>
    </>
  );
};

export default App;
