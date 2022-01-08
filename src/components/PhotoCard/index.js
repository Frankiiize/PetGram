import React, {useEffect, useRef, useState} from "react";
import { ImgWrapper, Img, Button, Article  } from "./styles";
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import { useLocalStorage  } from "../../hooks/useLocalStorage";
import { useIntersectionObserver } from "../../hooks/useIntersectorObserver.js"
const DEFAULT_IMAGE = "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"



const PhotoCard = (props) => {
  const key = `like-${props.id}`
  const [ liked, setLiked]  = useLocalStorage(key,false);
  const [ show, element ] = useIntersectionObserver()
  const Icon = liked ? MdFavorite : MdFavoriteBorder;
  return (
    <Article ref={element}>
      {show && (
        <>
          <a href={`/detail/${props.id}`}>
            <ImgWrapper>
              <Img src={props.src} />
            </ImgWrapper>
          </a>
          <Button onClick={() => setLiked(!liked)}>
            <Icon size="32px" />
            {props.likes} likes
          </Button>
        </>
      )}
    </Article>
  );
};

export { PhotoCard };