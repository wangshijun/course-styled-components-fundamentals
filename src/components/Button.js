import styled from 'styled-components';

const Button = styled.div`
  display: inline-block;
  border: 2px solid black;
  border-radius: 5px;
  padding: 5px 10px;
  margin: 15px;
  color: white;
  background: ${props => props.theme.primary};
`;

export default Button;
