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
    register({variables: {
      input: {
        email:data.email,
        password:data.password
      }
    }}).then((token) =>{
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