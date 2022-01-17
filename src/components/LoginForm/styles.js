import styled, {css} from "styled-components";
import { colorPallete, fonts } from "../../styles/GlobalStyle";
export const  FormContainer = styled.div`
  width:90%;
  min-height: calc(100vh - 200px);
  max-width:370px;
  min-height: 200px;
  display:flex;
  flex-direction:column;
  margin: 0 auto;
  border: 1px solid ${colorPallete.border};
  border-radius: 5px;
`
export const Form = styled.form`
  width: 90%;
  padding:20px 0;
  border-top:1px solid ${colorPallete.border};
  border-bottom:1px solid ${colorPallete.border};
  margin:0 auto 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${props => props.disabled && css`
    opacity:0.3;
 `}
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
  position:relative;
  ${props => props.isSelectInput && 
    css`
      border:1px solid ${colorPallete.secondary};
    
    `
  }
`
export const Span = styled.span`
  position:absolute;
  display:inline-flex;
  align-items:center;
  font-family:${fonts.primary};
  color:${colorPallete.tertiary};
  text-transform:capitalize;
  letter-spacing: 1px;
  padding: 0 5px;
`
export const Input = styled.input`
  border:none;
  background:transparent;
  width:100%;
  height:100%;
  outline:none;
  &::placeholder{
    display:none;
    color:none;
    text-transform:capitalize;
    font-family:${fonts.primary};
    padding-left: 5px;
    letter-spacing: 1px;
  };
  /* hide placeholder*/
  ${props => props.isSelectInput && 
    css`
    &::-webkit-input-placeholder {
        /* WebKit browsers */
         color: transparent;
    }
     :-moz-placeholder {
        /* Mozilla Firefox 4 to 18 */
         color: transparent;
    }
     ::-moz-placeholder {
        /* Mozilla Firefox 19+ */
         color: transparent;
    }
     :-ms-input-placeholder {
        /* Internet Explorer 10+ */
         color: transparent;
    }
     input::placeholder {
         color: transparent;
    }
     textarea::-webkit-input-placeholder {
        /* WebKit browsers */
         color: transparent;
    }
     textarea:-moz-placeholder {
        /* Mozilla Firefox 4 to 18 */
         color: transparent;
    }
     textarea::-moz-placeholder {
        /* Mozilla Firefox 19+ */
         color: transparent;
    }
     textarea:-ms-input-placeholder {
        /* Internet Explorer 10+ */
         color: transparent;
    }
     textarea::placeholder {
         color: transparent;
    }
    `
  }
  
    /* hide placeholder*/
  



/* no autofill color */
  &:-webkit-autofill, &:-webkit-autofill:hover,
  &:-webkit-autofill:focus, &:-webkit-autofill:active{
    border: 1px solid #fff;
    -webkit-text-fill-color: ${colorPallete.secondary};
    -webkit-box-shadow: 0 0 0px 1000px ##fff inset;
    transition: background-color 5000s ease-in-out 0s;
  }
/* no autofill color */

 ${props => props.disabled && css`
    opacity:0.3;
 `}
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
  margin-bottom:10px
`
export const Title = styled.h1`
  font-size: 18px;
  font-weight: 500;
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