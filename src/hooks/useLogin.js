import { gql, useMutation } from "@apollo/client";
import { useLocation, useNavigate } from "react-router-dom";

const useLogin = (activeAuth) => {
  let navigate = useNavigate();
  let location = useLocation();
  const LOGIN = gql`
  mutation login($input: UserCredentials!){
    login(input:$input)
    }
  `
  const [login, { data, loading, error }] = useMutation(LOGIN, {
    variables: {
      input: {
        email:"",
        password:""
      }
    }
  });
  const sendLoginData = (data) =>{
    login({variables: {
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
    sendLoginData,
    loadingLogin: loading,
    errorLogin: error,
  }
}

export { useLogin };