import React from "react";
import { useParams } from "react-router-dom";
import { WithPhotos } from "../components/Layaout/WithPhotos";
import { ListOfCategories } from "../components/ListOfCategories";
import { Helmet } from 'react-helmet'
import { SeoHelmet } from "../components/Layaout/SeoHelmet";
const Home = () => {
  let { id } = useParams()
  return(
    <>
      <SeoHelmet 
        title={"PetGram | Pet's photos"} 
        description={"Sube Fotos de tu mascotas y Compartelas con tus contactos"}
        keywords={"fotos, comparte, mascotas, amigos"}
        canonical={true}
        robots={true}
        url={true}
      />
      <ListOfCategories  />
      <WithPhotos categoryId={id}/>
    </>
  )
}

export { Home };