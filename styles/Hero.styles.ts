
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const bounce = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
`;

export const HeroSection = styled.section`
  position: relative;
  height: 100dvh;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #000;
`;

export const HeroBackground = styled.div<{ $imgUrl: string; $loaded: boolean }>`
  position: absolute;
  inset: 0;
  background-image: url(${props => props.$imgUrl});
  background-size: cover;
  background-position: center;
  transition: opacity 1s ease;
  opacity: ${props => (props.$loaded ? 1 : 0)};
  z-index: 0;
`;

export const GradientOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, #000 0%, transparent 50%, #000 100%);
  /* Top Gradient */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    bottom: auto;
    height: 33.333%;
    background: linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, transparent 100%);
  }

  /* Bottom Gradient */
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    top: auto;
    height: 50%;
    background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 50%, transparent 100%);
  }
`;

export const ContentWrapper = styled.div`
  position: relative;
  z-index: 10;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1.5rem 1.5rem 1.5rem;
`;

export const LogoContainer = styled.div`
  width: min(92vw, 760px);
  margin-top: 0.75rem;
  padding: 1rem 1.2rem;
  animation: ${fadeIn} 2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  /* border: 1px solid rgba(255, 255, 255, 0.3); */
  background: rgba(0, 0, 0, 0.26);
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  box-shadow: 0 10px 25px rgba(0,0,0,0.35);

  h1 {
    margin: 0;
    color: #fff;
    font-family: 'Playfair Display', serif;
    font-weight: 500;
    line-height: 1.2;
    letter-spacing: 0.02em;
    font-size: clamp(1.3rem, 4.4vw, 2rem);
    text-shadow: 0 6px 18px rgba(0,0,0,0.65);
  }

  @media (min-width: 768px) {
    margin-top: 1.25rem;
    padding: 1.1rem 1.6rem;
  }
`;

export const ActionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
  width: 100%;
  margin-bottom: 0rem;
`;

export const RegisterButton = styled.button`
  position: relative;
  padding: 1.5rem 2.5rem;
  width: 100%;
  max-width: 280px;
  background: transparent;
  color: #fff;
  font-size: 1.125rem;
  font-weight: 300;
  letter-spacing: 0.35em;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.3s ease;

  span {
    position: relative;
    z-index: 10;
    /* font-family: 'Playfair Display', serif; */
    font-style: italic;
  }

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border: 1px solid rgba(255, 255, 255, 0.4);
    transition: border-color 0.3s ease;
  }

  &:hover::before {
    border-color: #fff;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background-color: rgba(255, 255, 255, 0.1);
    transform: translateY(100%);
    transition: transform 0.3s ease;
  }

  &:active::after {
    transform: translateY(0);
  }
`;

export const ScrollIndicator = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  opacity: 0.5;
  animation: ${bounce} 2s infinite ease-in-out;

  span {
    font-size: 8px;
    letter-spacing: 0.5em;
    text-transform: uppercase;
    font-weight: 300;
  }

  div {
    width: 1px;
    height: 2.5rem;
    background: linear-gradient(to bottom, #fff, transparent);
  }
`;
