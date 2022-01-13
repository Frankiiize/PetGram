import React, {useState} from "react";
import { Form, Label, Input, CheckBoxContainer, Check, SendButtom, Title, FormContainer, StyledCheckbox, LinkRecoveryPassword, RegisterLinkWrapper, P , SingUpBtn} from "./styles";
import { RiEyeCloseLine, RiEyeLine } from 'react-icons/ri'

const LoginForm = ({onSubmitData, error, isDisabled, title, handleTypeOfForm, showRegister}) => {
  const [ formValues, setFormValues ] = useState({
    name:"",
    lastName:"",
    email:"",
    password:"",
    passwordConfirn:"",
    check:false,
  })
  const [ showPassword, setShowPassword ] = useState(false);
  const handleShowPassword = () =>{
    setShowPassword(!showPassword);
  }
  
  const submitData = (ev) => {
    ev.preventDefault();
    onSubmitData(formValues)
  }
  const setOnChangeValues = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name] : event.target.value
    })
  }
  return (
    <FormContainer>
    {isDisabled && <p>loading...</p>}
    <Title>{title}</Title>
      <Form disabled={isDisabled} onSubmit={submitData}>
        { 
          showRegister &&
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
            disabled={isDisabled}
            placeholder="Email" 
            name="email"
            value={formValues.email} 
            onChange={setOnChangeValues}
            autoComplete="email"
          />
        </Label>
        <Label htmlFor="password">
          <Input 
            disabled={isDisabled}
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
              showRegister &&
              <Label htmlFor="passwordConfirn">
                <Input 
                  placeholder="password" 
                  name="passwordConfirn"
                  value={formValues.passwordConfirn} 
                  onChange={setOnChangeValues} 
                  type={showPassword ? 'text':'password'} 
                />
              </Label>
            }
       {error && <p>{`${error}`}</p>}
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
        { !showRegister && <LinkRecoveryPassword href="/recovery-password">Forgot Password?</LinkRecoveryPassword>}
        
      </Form>
      {
        showRegister 
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