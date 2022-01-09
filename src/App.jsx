import React from "react";
import { GlobalStyle } from "./styles/GlobalStyle";
import { ListOfCategories } from "./components/ListOfCategories";
import { WithPhotos } from "./components/Layaout/WithPhotos";
import { Logo } from "./components/Logo";
import { PhotoCardWithQuery } from "./components/Layaout/PhotoCardWithQuery";


const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search);
  const detailId = urlParams.get('detail')
  console.log(detailId)
  return (
    <>
      <Logo/>
      <GlobalStyle/>
      {
        detailId 
          ? <PhotoCardWithQuery id={detailId}/>
          : <>
              <ListOfCategories />
              <WithPhotos categoryId={2}/>
            </>
      }
      
    </>
  )
}

export { App };