import React from "react";
import { Anchor, Image } from "./styles";

const DEFAULT_IMAGE = "https://i.imgur.com/dJa0Hpl.jpg"

const Category = ({ cover = DEFAULT_IMAGE, path, emoji = '?', id}) => {
 
  return (
    <Anchor to={`pet/${id}`} title={`photo-pet${emoji}`} >
      <Image src={cover} alt={`photo-${emoji}}`} title={`photo-pet${id}`}/>
      {emoji}
    </Anchor>
  )
}

export { Category }