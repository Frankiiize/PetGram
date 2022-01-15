import React from "react";
import { useGetFavs } from "../hooks/useGetFavs";
import { ListOfFavs } from "../components/ListOfFavs";

const Favs = () => {
  const { loading, error, data } = useGetFavs()
  const { favs } = data || { favs : []}
 
  if(loading) <p>loadin..</p>
  if(error) <p>{`${error}`}</p>
  return(
    <>
      
      <ListOfFavs favs={favs} />
    </>
  )
}

export { Favs };