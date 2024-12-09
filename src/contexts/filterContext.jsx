import { createContext, useState } from 'react';

export const FilterContext = createContext();

export const ShopFilterProvider = ({ children }) => {
  const [filteredCategory, setFilteredCategory] = useState([]);
  const [searched, setSearched] = useState('');
  const [minValue, setMinValue] = useState('');
  const [maxValue, setMaxValue] = useState('');
 

  return (
    <FilterContext.Provider
      value={{
        filteredCategory,
        setFilteredCategory,
        searched,
        setSearched,
        minValue,
        setMinValue,
        maxValue,
        setMaxValue,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
