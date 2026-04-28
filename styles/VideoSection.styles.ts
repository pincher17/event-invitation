
import styled from 'styled-components';

export const VideoContainer = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5rem 0 1rem 0;
  background-color: #000;
  overflow: hidden;
`;

export const BackgroundVideo = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.3;
  pointer-events: none;
`;

export const VideoOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, #000000e0 0%, transparent 20%, #00000029 100%);
`;

export const VideoContent = styled.div`
  position: relative;
  z-index: 10;
  max-width: 36rem;
  padding: 0 1.5rem;
  text-align: center;
`;

export const Title = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 1.8rem;
  margin-bottom: 2rem;
  line-height: 1.5;

  @media (min-width: 768px) {
    font-size: 1.875rem;
  }

  span {
    font-style: italic;
    display: block;
    margin-top: 1rem;
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.625;
  letter-spacing: 0.05em;
  color: rgba(255, 255, 255, 0.9);

  @media (min-width: 768px) {
    font-size: 1rem;
  }

  p {
    margin: 0;
  }
`;

export const Separator = styled.div`
  padding-top: 1.5rem;
  
  div {
    width: 4rem;
    height: 1px;
    background-color: rgba(255, 255, 255, 0.2);
    margin: 0 auto 1.5rem auto;
  }

  p {
    font-weight: 500;
    color: #fff;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    font-size: 0.75rem;

    @media (min-width: 768px) {
      font-size: 0.875rem;
    }
  }
`;
