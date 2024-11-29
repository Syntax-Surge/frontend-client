import React, { createContext, useContext, useState } from "react";

const Context = createContext();

export const Provider = ({ children }) => {
  // Add global states here

  return (
    <Context.Provider
      value={
        {
          // return states here
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
