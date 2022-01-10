import styled from "styled-components";
import { colorPallete } from "../../styles/GlobalStyle";
export const Button = styled.button`
  display: flex;
  align-items: center;
  padding-top: 8px;
  color: ${props => (props.liked ? `${colorPallete.secondary}` : `${colorPallete.tertiary}`)};;
  & svg {
    margin-right: 4px;
  }
  &:hover {
    cursor:pointer;
  }
`