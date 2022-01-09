import React from "react";
import { PhotoCard } from "../PhotoCard";
import { useGetSinglePhoto } from "../../hooks/useGetSinglePhoto";
import { PhotoCardLoading } from "../SkeletonLoading/PhotoCardLoading";


const PhotoCardWithQuery = ({id}) => {
  const { loading, error, data } = useGetSinglePhoto(id)
  const { photo } = data || { photo : {}}
  if(loading) return <PhotoCardLoading />
  if(error) return <p>Error</p>
  return (
    <PhotoCard {...photo}/>
  )
}

export { PhotoCardWithQuery };