import React from "react";
import { useGetFavs } from "../hooks/useGetFavs";
import { ListOfFavs } from "../components/ListOfFavs";
import { FavButton } from "../components/FavButton";
import { FavsContainer } from "../components/ListOfFavs/styles";
import { TitleContainer, Title } from '../components/ListOfFavs/styles'
const Favs = () => {
  const { loading, error, data } = useGetFavs()
  const { favs } = data || { favs : []}
 
  if(loading) <p>loadin..</p>
  if(error) <p>{`${error}`}</p>
  return(
    <>
      <FavsContainer>
        <TitleContainer>
          <Title>Your Favorites</Title>
          <FavButton size={20}/>
        </TitleContainer>
        <ListOfFavs favs={favs} />
      </FavsContainer>
    </>
  )
}

export { Favs };