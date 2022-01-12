import styled from "styled-components";
import { colorPallete } from "../../styles/GlobalStyle";
export const  FormContainer = styled.div`
  width:90%;
  max-width:370px;
  min-height: 200px;
  display:flex;
  flex-direction:column;
  margin: 25px auto;
  border: 1px solid ${colorPallete.border};
  border-radius: 5px;
`
export const Form = styled.form`
  width: 90%;
  padding:30px 0;
  border-top:1px solid ${colorPallete.border};
  border-bottom:1px solid ${colorPallete.border};
  margin:0 auto 20px;
  display: flex;
  flex-direction: column;
  justify-content: center
`
export const Label = styled.label`
  width:100%;
  border: 1px solid ${colorPallete.borderDark};
  padding: 5px;
  margin-bottom: 5px;
  border-radius: 5px;
  height:50px;
  display:flex;
  flex-direction:row;
  margin-bottom: 20px;
  align-items:center;
`
export const Input = styled.input`
  border:none;
  background:transparent;
  width:100%;
  height:100%;
  outline:none;
  &::placeholder{
    color: ${colorPallete.borderDark};
  }
`
export const Check = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip-path: circle(50%);
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
`
export const StyledCheckbox = styled.label`
  display: inline-flex;
  position:relative;
  width: 24px;
  height: 24px;
  border: ${props => props.checked ? 'none' : `1px solid ${colorPallete.borderDark}`};
  background: ${props => props.checked ? `${colorPallete.secondary}`:'white' };
  border-radius: 3px;
  margin: 0 10px;
`
export const CheckBoxContainer = styled.div`
  width:100%;
  margin-bottom: 20px;
  display:flex;
  justify-content: flex-end;
  padding: 10px 0;
`

export const SendButtom = styled.input`
  background: ${colorPallete.onLine};
  border-radius: 5px;
  color: #fff;
  height: 42px;
  display: block;
  width: 100%;
  text-align: center;
  border:none;
  font-size: 14px;
  text-transform:uppercase;
  margin-bottom:20px
`
export const Title = styled.h1`
  font-size: 18px;
  font-weight: 500;
  padding: 8px 0;
  text-align:left;
  text-transform:capitalize;
  margin:10px 20px;
`

export const LinkRecoveryPassword = styled.a`
  text-align: center;
  text-decoration: none;
  font-size: 18px;
  color: ${colorPallete.tertiary};
  padding:10px 15px;
  &:hover {
    color: ${colorPallete.secondary};
  }
`
export const RegisterLinkWrapper = styled.div`
  display:flex;
  flex-direction: column;
  width: 100%;
  padding:10px 0;
  justify-content: center;
  align-items:center;
`
export const P = styled.p`
  font-size: 16px;
`

export const SingUpBtn = styled.button`
  color:${colorPallete.secondary};
  font-size: 18px;
 padding:10px 15px; 
`