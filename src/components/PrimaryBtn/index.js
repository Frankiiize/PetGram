import React from "react";
import { SendButtom } from "../LoginForm/styles";
const PrimaryBtn = ({ type, title, onSubmit }) => {
  return(

    <SendButtom type={type} value={title} onClick={onSubmit} />
  )
}

export { PrimaryBtn };