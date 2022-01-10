import React from "react";


const ToggleLikeMutation = ({children,loading,error}) => {
  

  if(error) return <p>submission error{`${error.message}`}</p>
  return(
    <div>
      {children}
    </div>
  )
}

export { ToggleLikeMutation };