import { from, gql, useQuery } from "@apollo/client";
import React from "react";
import { PhotoCard  } from "../PhotoCard";
import { List, Item, StyledLoader, ListUl } from './styles'

const GET_PHOTOS = gql`
  query getPhotos {
    photos {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`

const ListOfPhotoCards = () => {
  const { loading, error, data } = useQuery(GET_PHOTOS);
  console.log(data)
  if(loading) return <p>loading...</p>
  if(error) return <p>error</p>

  return (
    <ListUl>
      {data.photos.map((element) => (
        <PhotoCard 
          {...element}
          key={element.id} 
          />
      ))}
    </ListUl>
  )
}

export { ListOfPhotoCards };