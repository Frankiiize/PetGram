import React from "react";
import { GlobalStyle } from "./styles/GlobalStyle";
import { ListOfCategories } from "./components/ListOfCategories";
import { ListOfPhotoCards } from "./components/ListOfPhotoCards";
import { Logo } from "./components/Logo";

const App = () => {
  return (
    <>
      <Logo/>
      <GlobalStyle/>
      <ListOfCategories />
      <ListOfPhotoCards />
    </>
  )
}

export { App };