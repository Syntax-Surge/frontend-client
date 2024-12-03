import React, { createContext, useContext, useEffect, useState } from "react";

const Context = createContext();

export const Provider = ({ children }) => {
  // Add global states here
  const [puchaseItems, setPurchaseItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null); 
  const [ selectedItems, setSelectedItems] = useState(null); 
  const [categories, setCategories] = useState([]);

  useEffect(() => {
      const currnetPath = window.location.pathname;

      // console.log('PathName',currnetPath);
      // console.log("Categories",categories);

      if(currnetPath === '/browse'){
          setSelectedCategory(0);
      } else {
          setSelectedCategory(null);
      }
  },[]);

  return (
    <Context.Provider
      value={
        {
          // return states here
          selectedCategory,
          setSelectedCategory,
          categories,
          setCategories,        
          puchaseItems,
          setPurchaseItems, 
          selectedItems, 
          setSelectedItems
        }
      }
    >
      {children}
    </Context.Provider>
  );
};

export const useCustomContext = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error("useCustomContext must be used within a Provider");
  }
  return context;
};
