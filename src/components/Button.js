import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(359deg); }
`;

const Button = styled.div`
  display: inline-block;
  border: 2px solid black;
  border-radius: 5px;
  padding: 5px 10px;
  margin: 15px;
  color: white;
  background: ${props => props.theme.primary};
  // animation: ${spin} 1s linear infinite;
`;

export default Button;
