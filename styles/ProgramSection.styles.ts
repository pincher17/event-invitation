
import styled from 'styled-components';

export const ProgramContainer = styled.section`
  position: relative;
  background-color: #fff;
  color: #000;
  padding: 5rem 1.5rem;
  overflow: hidden;
`;

export const MaxWidthWrapper = styled.div`
  max-width: 48rem;
  margin: 0 auto;
`;

export const Header = styled.header`
  text-align: center;
  margin-bottom: 4rem;

  h2 {
    font-family: 'Playfair Display', serif;
    font-size: 1.875rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-bottom: 1rem;

    @media (min-width: 768px) {
      font-size: 3rem;
    }
  }

  div {
    width: 5rem;
    height: 4px;
    background-color: rgba(0, 0, 0, 0.1);
    margin: 0 auto;
  }
`;

export const ListWrapper = styled.div`
  display: grid;
  gap: 3rem;

  @media (min-width: 768px) {
    gap: 4rem;
  }
`;

export const ProgramList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

export const ProgramItem = styled.li<{ $centerNumber?: boolean }>`
  display: flex;
  gap: 1.5rem;
  align-items: ${props => (props.$centerNumber ? 'center' : 'flex-start')};

  span.number {
    font-family: 'Playfair Display', serif;
    font-size: 1.5rem;
    line-height: 1;
    opacity: 0.2;
    margin-top: ${props => (props.$centerNumber ? '0' : '0.25rem')};
    transform: ${props => (props.$centerNumber ? 'translateY(-0.18em);' : 'none')};
  }

  span.title {
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    display: block;
    line-height: 1;
    margin-bottom: ${props => (props.$centerNumber ? '0' : '0.5rem')};
    font-size: 12px;

    @media (min-width: 768px) {
      font-size: 14px;
    }
  }

  p {
    font-weight: 300;
    color: rgba(0, 0, 0, 0.8);
    font-size: 1rem;
    line-height: 1.625;
    margin: 0;
  }
`;

export const ConditionsBox = styled.div`
  padding-top: 4rem;
  border-top: 1px solid rgba(0, 0, 0, 0.05);

  h3 {
    font-family: 'Playfair Display', serif;
    font-size: 1.875rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-bottom: 2rem;
    text-align: center;

    @media (min-width: 768px) {
      font-size: 3rem;
    }
  }
`;

export const ConditionsGrid = styled.div`
  display: grid;
  gap: 1.5rem;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  font-size: 11px;
  font-weight: 500;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    font-size: 12px;
  }

  div {
    padding: 1rem;
    border: 1px solid rgba(0, 0, 0, 0.05);
    border-radius: 2px;
  }
`;

export const DressCodeBox = styled.div`
  padding-top: 3.5rem;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  text-align: center;

  h3 {
    font-family: 'Playfair Display', serif;
    font-size: 1.875rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin: 0 0 1.5rem 0;

    @media (min-width: 768px) {
      font-size: 3rem;
    }
  }
`;

export const DressCodeText = styled.p`
  margin: 0 auto;
  max-width: 40rem;
  color: rgba(0, 0, 0, 0.75);
  font-size: 1rem;
  line-height: 1.7;
  font-weight: 300;
`;

export const DressCodePalette = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  gap: 1.25rem;
`;

export const ColorDot = styled.div<{ $color: string }>`
  width: 70px;
  aspect-ratio: 1 / 1;
  border-radius: 999px;
  background-color: ${props => props.$color};
  border: 1px solid rgba(0, 0, 0, 0.12);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.08);

  @media (min-width: 768px) {
    width: 86px;
  }
`;
