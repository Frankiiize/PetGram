import React from "react";
import { useParams } from "react-router-dom";
import { PhotoCardWithQuery } from "../components/Layaout/PhotoCardWithQuery";
import { SeoHelmet } from "../components/Layaout/SeoHelmet";

const DetailsPage = () => {
  const { detailsId } = useParams();
  return(
    <>
      <SeoHelmet 
        title={"Details |PetGram"} 
        description={"Detalles fotos mascotas"}
        keywords={"detalles, foto, selfie, mascotas"}
        canonical={false}
      />
      <PhotoCardWithQuery detailsId={detailsId} />
    </>
  )
}

export default function(){
  return(
    <DetailsPage />
  )
}
