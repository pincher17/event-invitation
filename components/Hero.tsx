
import React, { useState, useEffect } from 'react';
import { IMAGES } from '../constants';
import {
  HeroSection,
  HeroBackground,
  GradientOverlay,
  ContentWrapper,
  LogoContainer,
  ActionContainer,
  RegisterButton,
  ScrollIndicator
} from '../styles/Hero.styles';

interface HeroProps {
  onRegisterClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onRegisterClick }) => {
  const [imgLoaded, setImgLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = IMAGES.HERO_BG;
    img.onload = () => setImgLoaded(true);
  }, []);

  return (
    <HeroSection>
      <HeroBackground $imgUrl={IMAGES.HERO_BG} $loaded={imgLoaded} />
      <GradientOverlay />

      <ContentWrapper>
        <LogoContainer>
          <h1>Презентация кейтерингового направления в отеле "Замковый"</h1>
        </LogoContainer>

        <ActionContainer>
          <RegisterButton onClick={onRegisterClick}>
            <span>регистрация</span>
          </RegisterButton>
          
          <ScrollIndicator>
            <span>scroll</span>
            <div />
          </ScrollIndicator>
        </ActionContainer>
      </ContentWrapper>
    </HeroSection>
  );
};

export default Hero;
