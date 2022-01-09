import React from "react";
import { ImgWrapper, Img, Article  } from "./styles";
import { useIntersectionObserver } from "../../hooks/useIntersectorObserver.js"
import { FavButton } from "../FavButton";
const DEFAULT_IMAGE = "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"



const PhotoCard = (props) => {
  const [ show, element ] = useIntersectionObserver()
  return (
    <Article ref={element}>
      {show && (
        <>
          <a href={`/?detail=${props.id}`}>
            <ImgWrapper>
              <Img src={props.src} />
            </ImgWrapper>
          </a>
          <FavButton likes={props.likes} id={props.id}/>
        </>
      )}
    </Article>
  );
};

export { PhotoCard };