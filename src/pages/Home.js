import React from "react";
import { useParams } from "react-router-dom";
import { WithPhotos } from "../components/Layaout/WithPhotos";
import { ListOfCategories } from "../components/ListOfCategories";
import { Logo } from "../components/Logo";

const Home = () => {
  let { id } = useParams()
  return(
    <>
      <ListOfCategories  />
      <WithPhotos categoryId={id}/>
    </>
  )
}

export { Home };