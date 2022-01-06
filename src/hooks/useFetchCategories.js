import React, { useState, useEffect } from "react";

const useFetchCategories = () => {
  const [ categories, setCategories ] = useState([]);
  const [ loading, setLoading ] = useState(true);

  const FetchCategories = async () => {
    setLoading(true)
    const data = await fetch('https://petgram-server-frankiiize-ey76wq7lf-frankiiize.vercel.app/categories');
    const response = await data.json();
    setCategories(response);
    setLoading(false);
  }

  useEffect(() => {
    FetchCategories();
  },[]);

  return {
    categories,
    loading,
  }

}

export { useFetchCategories };