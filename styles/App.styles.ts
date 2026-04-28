
import styled from 'styled-components';

export const Main = styled.main`
  background-color: #000;
  min-height: 100vh;
  color: #fff;
  overflow-x: hidden;
`;

export const Footer = styled.footer`
  padding: 3rem 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
  padding-left: 1rem;
  padding-right: 1rem;

  p {
    font-size: 10px;
    letter-spacing: 0.3em;
    color: rgba(255, 255, 255, 0.3);
    text-transform: uppercase;
    line-height: 1.625;
    margin: 0;
  }
`;
