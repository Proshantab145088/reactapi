import React, { createContext, useEffect, useState } from "react";
export const userContext = createContext();
const Context = ({ children }) => {
  const [api, setApi] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getApi = async () => {
      const getData = await fetch("https://dummyjson.com/products");
      const data = await getData.json();
      setLoading(false);
      setApi(data.products);
    };
    getApi();
  }, []);

  if (loading) {
    return <h1>Loading.......</h1>;
  }
  return <userContext.Provider value={api}>{children}</userContext.Provider>;
};

export default Context;
