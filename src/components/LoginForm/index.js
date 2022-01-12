import React, {useState} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Form, Label, Input, CheckBoxContainer, Check, SendButtom, Title, FormContainer, StyledCheckbox, LinkRecoveryPassword, RegisterLinkWrapper, P , SingUpBtn} from "./styles";
import { RiEyeCloseLine, RiEyeLine } from 'react-icons/ri'

const LoginForm = ({title, activeAuth, handleTypeOfForm, showLogin}) => {
  let location = useLocation();
  let navigate = useNavigate();
  const [ formValues, setFormValues ] = useState({
    name:"",
    lastName:"",
    email:"",
    password:"",
    check:false,
  })
  console.log(formValues)
  const [ showPassword, setShowPassword ] = useState(false);
  const handleShowPassword = () =>{
    setShowPassword(!showPassword);
  }
  
  const submitData = (ev) => {
    ev.preventDefault();
    activeAuth();
    navigate(location.state.from.pathname, {replace:true});
  }
  const setOnChangeValues = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name] : event.target.value
    })
  }
  console.log(formValues)
  return (
    <FormContainer>
    <Title>{title}</Title>
      <Form onSubmit={submitData}>
        { 
          showLogin &&
          <>
            <Label htmlFor="name">
              <Input 
                placeholder="name"
                value={formValues.name}
                name="name"
                onChange={setOnChangeValues}
                autoComplete="name"
              />
            </Label>
            <Label htmlFor="lastName">
              <Input 
                placeholder="lastName"
                value={formValues.name}
                name="lastName"
                onChange={setOnChangeValues}
                autoComplete="family-name"
              />
            </Label>
          </>
        }
        <Label htmlFor="email">
          <Input 
            placeholder="Email" 
            name="email"
            value={formValues.email} 
            onChange={setOnChangeValues}
            autoComplete="email"
          />
        </Label>
        <Label htmlFor="password">
          <Input 
            placeholder="password" 
            name="password"
            value={formValues.password} 
            onChange={setOnChangeValues} 
            type={showPassword ? 'text':'password'} 
            autoComplete="current-password"
          />
            {
              !showPassword
                ? <RiEyeCloseLine onClick={handleShowPassword} size={24} style={{margin: '0 5px', transition: "500ms"}}/>
                : <RiEyeLine onClick={handleShowPassword} size={24} style={{margin: '0 5px'}}/>
            }
                      
        </Label>
            {
              showLogin &&
              <Label>
                <Input 
                  placeholder="password" 
                  name="password"
                  value={formValues.password} 
                  onChange={setOnChangeValues} 
                  type={showPassword ? 'text':'password'} 
                />
              </Label>
            }
       
        <CheckBoxContainer>
          <StyledCheckbox  checked={formValues.check}>
            <Check 
              onChange={() =>{
              setFormValues({...formValues,check:!formValues.check})
            }}
            />
          </StyledCheckbox>
          <span>Remember me</span>
        </CheckBoxContainer>
        <SendButtom type="submit" value={title} />
        <LinkRecoveryPassword href="/recovery-password">Forgot Password?</LinkRecoveryPassword>
      </Form>
      {
        showLogin 
          ? <RegisterLinkWrapper>
              <P>Already have an account?</P>
              <SingUpBtn onClick={handleTypeOfForm}>Login</SingUpBtn>
            </RegisterLinkWrapper>
          : <RegisterLinkWrapper>
              <P >Don't have an account?</P>
              <SingUpBtn onClick={handleTypeOfForm}>Sing up</SingUpBtn>
            </RegisterLinkWrapper>
      }
        
    </FormContainer>
  )
}

export { LoginForm };