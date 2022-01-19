import React, { useContext } from "react";
import { AuthContext } from "../components/Context/AuthContext";
import { PrimaryBtn } from "../components/PrimaryBtn";
const ProfilePage = () => {
  const  { removeAuth, client } = useContext(AuthContext);
  const handleLogout = () => {
    removeAuth()
      .then(() =>{
        client.resetStore();
      })
  }
  return(
    <div style={{width:"100%", maxWidth:"600px", margin:"0 auto"}}>
      <h1>Profile</h1>
      
      <PrimaryBtn title={"Logout"} type={"submit"} onSubmit={handleLogout} />
    </div>
  )
}

export default function(){
  return(
    <ProfilePage />
  )
}