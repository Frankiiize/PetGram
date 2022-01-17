import React, { useEffect, useMemo, useState } from "react";
import { useFetchCategories } from "../../hooks/useFetchCategories";
import { Category  } from "../Category";
import loadingRing from '../../assets/Dual Ring-1s-200px.svg'
import { List, Item, StyledLoader } from "./styles";

const ListOfCategoriesComponent = ({setCategoryId}) => {
  const [ showFixed, setShoFixed ] = useState();
  const { categories, loading } = useFetchCategories();
  
  
  useEffect(() => {
    const onScroll = () => {
      const newShowFixed = window.scrollY > 80;
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
              <StyledLoader key={item}  src={loadingRing} alt="loader-${index}" />
          ))
          : categories.map(category => {
            return (
              <Item key={category.id}>
                <Category setCategoryId={setCategoryId} {...category}/>
              </Item>
            )
          })
      }
    </List> 
  )

  return (
    <>
      {
        showFixed
         ? RenderList ({fixed:true}, {fadeIn:true})
         : RenderList()
      }
  
    </>

  )
}
/* export { ListOfCategories } */
export default function(){
  return(
    <ListOfCategoriesComponent />
  )
}