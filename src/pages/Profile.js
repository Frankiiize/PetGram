import React, { useContext } from "react";
import { AuthContext } from "../components/Context/AuthContext";

const ProfilePage = () => {
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

export default function(){
  return(
    <ProfilePage />
  )
}