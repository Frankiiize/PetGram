import React from "react";
import { ImgWrapper, Img, Article  } from "./styles";
import { useIntersectionObserver } from "../../hooks/useIntersectorObserver.js"
import { FavButton } from "../FavButton";
import { ToggleLikeMutation } from "../Layaout/ToggleLikeMutation";
import { gql, useMutation  } from "@apollo/client";
import { Link } from "react-router-dom";


const LIKE_PHOTO = gql`
  mutation likePhoto($input: LikePhoto!){
    likePhoto(input: $input){
      id,
      liked,
      likes
    }
  }
`

const PhotoCard = (props) => {

  const [ show, element ] = useIntersectionObserver()
  
  const [toggleLike, { data, loading, error }] = useMutation(LIKE_PHOTO, {
    variables: {
      input: props.id,
    }
  });
  const handleLiked = () => {
    toggleLike({ variables: { input: { id: props.id } } });
  }
  return (
    
      <Article ref={element}>
        {show && (
          <>
            <Link to={`details/${props.id} `} title={`details/${props.id}`}>
              <ImgWrapper>
                <Img src={props.src} alt={`photo-${props.id}`} title={`photo-${props.id}`} />
              </ImgWrapper>
            </Link>
            <ToggleLikeMutation loading={loading} error={error}>

              <FavButton 
                liked={props.liked} 
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