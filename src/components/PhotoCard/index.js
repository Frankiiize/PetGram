import React from "react";
import { ImgWrapper, Img, Article  } from "./styles";
import { useIntersectionObserver } from "../../hooks/useIntersectorObserver.js"
import { FavButton } from "../FavButton";
import { ToggleLikeMutation } from "../Layaout/ToggleLikeMutation";
import { useLocalStorage  } from "../../hooks/useLocalStorage";
import { gql, useMutation  } from "@apollo/client";

const DEFAULT_IMAGE = "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"

const LIKE_PHOTO = gql`
  mutation likeAnonimusPhoto($input: LikePhoto!){
    likeAnonymousPhoto(input: $input){
      id,
      liked,
      likes
    }
  }
`

const PhotoCard = (props) => {
  const key = `like-${props.id}`

  const [ show, element ] = useIntersectionObserver()
  const [ liked, setLiked]  = useLocalStorage(key,false);
  
  const [toggleLike, { data, loading, error }] = useMutation(LIKE_PHOTO, {
    variables: {
      input: props.id,
    }
  });
  const handleLiked = () => {
    setLiked(!liked)
    !liked && toggleLike({ variables: { input: { id: props.id } } });
  }

  return (
    <Article ref={element}>
      {show && (
        <>
          <a href={`/?detail=${props.id}`}>
            <ImgWrapper>
              <Img src={props.src} />
            </ImgWrapper>
          </a>
          <ToggleLikeMutation loading={loading} error={error}>

            <FavButton 
              liked={liked} 
              likes={props.likes} 
              handleLiked={handleLiked} 
              id={props.id}
              />
          </ToggleLikeMutation>
      
        </>
      )}
    </Article>
  );
};

export { PhotoCard };