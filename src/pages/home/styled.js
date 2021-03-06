import styled from 'styled-components';

export const Input = styled.input `
  border: 1px solid #ddd;
  border-radius: .25rem 0 0 .25rem;
  height: 0.5rem;
  padding: 0.5rem;

  &:focus,
  &:active {
    outline: none;
    box-shadow: none;
  }
`;

export const Button = styled.button `
  height: 1.5rem;
  border: 1px solid #000;
  background: #000;
  color: #fff;
  border-radius: 0 .25rem .25rem 0;
  cursor: pointer;
  height: 1.7rem;

  &:focus,
  &:active {
    outline: none;
    box-shadow: none;
  }
`;

export const Container = styled.div `
  width: 90vw;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #F0F1F1; 
`;

export const ErrorMsg = styled.span `
  display: flex;
  font-size: 0.65rem;
  color: red;
  font-weight: 600;
  margin-top: 1rem;
`;