import React from "react";
import { PhotoCard  } from "../PhotoCard";
import { ListUl } from './styles'



const ListOfPhotoCards = ({loading, error, data}) => {
 
  if(loading) return <p>loading...</p>
  if(error) return <p>{`${error}`}</p>

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