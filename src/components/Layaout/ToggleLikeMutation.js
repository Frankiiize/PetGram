import React from "react";
import { useNavigate } from "react-router-dom";


const ToggleLikeMutation = ({children,loading,error}) => {
  const navigate = useNavigate()

  if(error) {
    navigate('/login')
  }
  return(
    <div>
      {children}
    </div>
  )
}

export { ToggleLikeMutation };