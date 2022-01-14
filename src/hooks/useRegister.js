import { useLocation, useNavigate } from "react-router-dom";
import { gql, useMutation } from '@apollo/client';
const useRegister = (activeAuth) => {
  let location = useLocation();
  let navigate = useNavigate();
  
  const REGISTER = gql`
    mutation signup ($input: UserCredentials!) {
      signup (input: $input)
    }
  `;

  const [register, { data, loading, error }] = useMutation(REGISTER, {
    variables: {
      input: {
        email:"",
        password:""
      }
    }
  });
  const sendRegisterData = (data) =>{
    const {email} = data
    const {password} = data
    debugger
    register({variables: {
      input: {
        email:email,
        password:password
      }
    }}).then((token) =>{
      debugger
      console.log(token)
      activeAuth(token);
      navigate(location.state.from.pathname, {replace:true});
    })
  }
  return {
    sendRegisterData,
    error,
    loading
  }
}

export { useRegister };