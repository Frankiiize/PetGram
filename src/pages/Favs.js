import React from "react";
import { useGetFavs } from "../hooks/useGetFavs";


const Favs = () => {
  const { loading, error, data } = useGetFavs()
  const { favs } = data || { favs : []}
  console.log(favs.map(element => {
    console.log(element.id)
  }))
  if(loading) <p>loadin..</p>
  if(error) <p>{`${error}`}</p>
  return(
    <>
      <h1>Favs</h1>
     {
      favs.map((fav) => (
        <img src={fav.src} key={fav.id} /> 
      ))
     }

    </>
  )
}

export { Favs };