import React, {useCallback, useEffect, useImperativeHandle, useRef, useState} from "react";
import { Form, Label, Span, Input, CheckBoxContainer, Check, SendButtom, Title, FormContainer, StyledCheckbox, LinkRecoveryPassword, RegisterLinkWrapper, P , SingUpBtn} from "./styles";
import { RiEyeCloseLine, RiEyeLine } from 'react-icons/ri'
import { PrimaryBtn } from "../PrimaryBtn";

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
  const inputRef = useRef(null);
  const lasteNameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const cPasswordRef = useRef(null);
  const [ isSelectInput, setSelectInput ] = useState({
    name:false,
    lastName:false,
    email: false,
    password: false,
    cPassword: false,
  });

  const handleSelectInput = (input,ref) => {
    setSelectInput({...isSelectInput, [input]: true})
    const element = ref.current;
    element.focus();
  }

  return (
    <FormContainer>
    {isDisabled && <p>loading...</p>}
    <Title>{title}</Title>
      <Form disabled={isDisabled} onSubmit={submitData}>
        { 
          showRegister &&
          <>
            <Label 
              htmlFor="name"
              isSelectInput={isSelectInput.name} 
              onClick={() => handleSelectInput('name',inputRef)} 
            >
            {
              isSelectInput.name && 
                <Span className={isSelectInput.name && 'inputSelected'}>name</Span>
            }
              <Input 
                ref={inputRef}
                placeholder="name"
                value={formValues.name}
                name="name"
                onChange={setOnChangeValues}
                autoComplete="name"
                isSelectInput={isSelectInput.name}
              />
            </Label>
            <Label 
              htmlFor="lastName"  
              onClick={() => handleSelectInput('lastName', lasteNameRef)} 
              isSelectInput={isSelectInput.lastName}
              >
              {
                isSelectInput.lastName && <Span className={isSelectInput.lastName && 'inputSelected'}>lastName</Span>
              }
              
              <Input 
                ref={lasteNameRef}
                placeholder="lastName"
                value={formValues.lastName}
                name="lastName"
                onChange={setOnChangeValues}
                autoComplete="family-name"
                isSelectInput={isSelectInput.lastName}
              />
            </Label>
          </>
        }
        <Label 
          htmlFor="email" 
          onClick={() => handleSelectInput('email', emailRef)}
          isSelectInput={isSelectInput.email}
          >
        {
          isSelectInput.email && <Span className={isSelectInput.email && 'inputSelected'}>email</Span>
        }
        
          <Input 
            ref={emailRef}
            disabled={isDisabled}
            placeholder="Email" 
            name="email"
            value={formValues.email} 
            onChange={setOnChangeValues}
            autoComplete="email"
            isSelectInput={isSelectInput.email}
          />
        </Label>
        <Label 
          htmlFor="password" 
          onClick={() => handleSelectInput('password', passwordRef)} 
          isSelectInput={isSelectInput.password}
          >
        {
          isSelectInput.password && <Span className={isSelectInput.password && 'inputSelected'}>password</Span>
        }
        
          <Input
            ref={passwordRef}
            disabled={isDisabled}
            placeholder="password" 
            name="password"
            value={formValues.password} 
            onChange={setOnChangeValues} 
            type={showPassword ? 'text':'password'} 
            autoComplete="current-password"
            isSelectInput={isSelectInput.password}
          />
            {
              !showPassword
                ? <RiEyeCloseLine onClick={handleShowPassword} size={24} style={{margin: '0 5px', transition: "500ms"}}/>
                : <RiEyeLine onClick={handleShowPassword} size={24} style={{margin: '0 5px'}}/>
            }
                      
        </Label>
            {
              showRegister &&
              <Label 
                htmlFor="passwordConfirn" 
                onClick={() => handleSelectInput('cPassword', cPasswordRef)}
                isSelectInput={isSelectInput.cPassword}
                >
                {
                  isSelectInput.cPassword && <Span className={isSelectInput.cPassword && 'inputSelected'}>confirm password</Span>
                }
                
                <Input
                  ref={cPasswordRef}
                  placeholder="password" 
                  name="passwordConfirn"
                  value={formValues.passwordConfirn} 
                  onChange={setOnChangeValues} 
                  type={showPassword ? 'text':'password'} 
                  isSelectInput={isSelectInput.cPassword}
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
        <PrimaryBtn title={title} type={"submit"} />
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