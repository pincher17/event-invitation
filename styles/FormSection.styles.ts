
import styled from 'styled-components';

export const FormWrapper = styled.section`
  padding: 6rem 0;
  background-color: #000;
  color: #fff;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
`;

export const FormContainer = styled.div`
  max-width: 48rem;
  margin: 0 auto;
`;

export const FormHeader = styled.header`
  text-align: center;
  margin-bottom: 5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  h2 {
    font-size: 2.25rem;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    margin: 0;

    @media (min-width: 768px) {
      font-size: 3rem;
    }
  }

  p {
    color: rgba(255, 255, 255, 0.5);
    letter-spacing: 0.3em;
    font-size: 12px;
    text-transform: uppercase;
    margin: 0;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  label {
    font-size: 0.875rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    font-weight: 700;

    span {
      color: #fff;
    }
  }

  input, textarea {
    width: 100%;
    background: transparent;
    border: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    padding: 1rem 0;
    outline: none;
    transition: border-color 0.3s ease;
    font-weight: 300;
    font-size: 1.125rem;
    color: #fff;
    font-family: inherit;

    &:focus {
      border-color: #fff;
    }

    &::placeholder {
      color: rgba(255, 255, 255, 0.3);
    }
  }

  textarea {
    resize: none;
  }
`;

export const InspirationTextarea = styled.textarea`
  height: 60px!important;
`;

export const RadioGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  padding-top: 1rem;
`;

export const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;

  input {
    accent-color: #fff;
    height: 1.25rem;
    width: 1.25rem;
    margin: 0;
  }

  span {
    color: #fff;
    font-weight: 300;
    font-size: 1.125rem;
  }
`;

export const ErrorMessage = styled.div`
  padding: 1rem;
  background-color: rgba(127, 29, 29, 0.2);
  border: 1px solid #7f1d1d;
  color: #f87171;
  font-size: 0.875rem;
`;

export const SubmitButton = styled.button`
  width: 100%;
  background-color: #fff;
  color: #000;
  padding: 1.5rem;
  font-size: 1.25rem;
  text-transform: uppercase;
  letter-spacing: 0.3em;
  font-weight: 700;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.9);
  }

  &:disabled {
    background-color: rgba(255, 255, 255, 0.5);
    cursor: not-allowed;
  }
`;

export const SuccessSection = styled.section`
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #000;
  color: #fff;
  padding: 1.5rem;
  text-align: center;
`;

export const SuccessContent = styled.div`
  max-width: 32rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  h2 {
    font-family: 'Playfair Display', serif;
    font-style: italic;
    font-size: 3rem;
    margin: 0;
  }

  p {
    font-size: 1.25rem;
    font-weight: 300;
    letter-spacing: 0.1em;
    line-height: 2;
    margin: 0;
  }

  div {
    width: 5rem;
    height: 1px;
    background-color: #fff;
    margin: 3rem auto 0 auto;
  }
`;
