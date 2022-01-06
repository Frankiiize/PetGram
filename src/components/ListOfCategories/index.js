import React, { useEffect, useState } from "react";
import { useFetchCategories } from "../../hooks/useFetchCategories";
import { Category  } from "../Category";
import loadingRing from '../../assets/Dual Ring-1s-200px.svg'
import { List, Item, StyledLoader } from "./styles";

import styled from "styled-components";



const ListOfCategories = () => {
  const [ showFixed, setShoFixed ] = useState();
  const { categories, loading } = useFetchCategories();
  
  
  useEffect(() => {
    const onScroll = () => {
      const newShowFixed = window.scrollY > 200;
      showFixed !== newShowFixed && setShoFixed(newShowFixed);
    }
    document.addEventListener('scroll', onScroll)

    return () => document.removeEventListener('scroll', onScroll)
  },[showFixed]);



  const RenderList = (fixed, fadeIn) => (
    <List fixed={fixed} fadeIn={fadeIn}>
      {
        loading 
          ? [1,2,4,5,6,7].map((item) => (
            <StyledLoader key={item}  src={loadingRing} alt="loader" />
          ))
          : categories.map(category => (
            <Item key={category.id}>
              <Category {...category}/>
            </Item>
          ))
      }
    </List> 
  )

  return (
    <>
      {RenderList()}
      {showFixed && RenderList ({fixed:true}, {fadeIn:true})}
    </>

  )
}

export { ListOfCategories };