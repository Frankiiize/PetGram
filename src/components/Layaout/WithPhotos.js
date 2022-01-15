import React from "react";
import { useQuery, gql } from "@apollo/client";
import { ListOfPhotoCards } from '../ListOfPhotoCards'
import { useParams } from "react-router-dom";
const GET_PHOTOS = gql`
query getPhotos($categoryId: ID) {
  photos(categoryId: $categoryId) {
    id
    categoryId
    src
    likes
    userId
    liked
  }
}
`


const WithPhotos = ({children, categoryId}) => {
  const { loading, error, data } = useQuery(GET_PHOTOS, {
    variables: {categoryId},
   
  });
  return (
    <div>
      <ListOfPhotoCards data={data} error={error} loading={loading}/>
      {children}
    </div>
  )
}

export { WithPhotos };