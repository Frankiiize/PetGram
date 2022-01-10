import React from "react";
import { useParams } from "react-router-dom";
import { PhotoCardWithQuery } from "../components/Layaout/PhotoCardWithQuery";

const Details = () => {
  const { detailsId } = useParams();
  return(
    <PhotoCardWithQuery detailsId={detailsId} />
  )
}

export { Details };
