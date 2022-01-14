import React from "react";
import { gql, useQuery } from "@apollo/client";

const useGetFavs = () => {

  const FAVS = gql`
  query getFavs{
    favs {
      id
      categoryId
      src
      likes
      userId
    }
  }
`
  const { data, loading, error } = useQuery(FAVS,{
    fetchPolicy: "network-only"
  })
  return {
    data,
    loading,
    error
  }
}

export { useGetFavs };