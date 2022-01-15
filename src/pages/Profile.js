import React, { useContext } from "react";
import { AuthContext } from "../components/Context/AuthContext";

const Profile = () => {
  const  { removeAuth, client } = useContext(AuthContext);
  return(
    <>
      <h1>Profile</h1>
      <button onClick={() => {
        removeAuth().then(( ) =>{
           client.resetStore();
           })
      }}>Logout</button>
    </>
  )
}

export { Profile };