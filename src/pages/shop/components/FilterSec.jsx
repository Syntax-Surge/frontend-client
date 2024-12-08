import React, { useContext, useState } from 'react';
import { Discount } from './Chips/Discount';
import { CatogoryDropList } from './dropdown/CatogoryDropList';
import Search from './Input.jsx/Search';
import { InputDefault } from './Input.jsx/Input';
import Buttons from './buttons/button';

import { FilterContext } from '../../../contexts/filterContext';

function FilterSec() {
  const { setMinValue, setMaxValue } = useContext(FilterContext);
  const [tempMinValue, setTempMinValue] = useState('');
  const [tempMaxValue, setTempMaxValue] = useState('');

  const handleMinChange = (value) => {
    setTempMinValue(value);
  };

  const handleMaxChange = (value) => {
    setTempMaxValue(value);
  };

  const onclick = async () => {
    setMinValue(tempMinValue);
    setMaxValue(tempMaxValue);
  };

  return (
    <div className='py-4 shadow-lg md:max-w-[250px] px-[20px] '>
      <div
        className='flex gap-1 justify-center 
          sm:gap-6
        md:flex-col md:mt-10 md:gap-6'
      >
        {/* discount chip */}
        <Discount />
        {/* dropdown  */}
        <CatogoryDropList />
        {/* search bar */}
        <Search />
      </div>
      <div
        className='mt-2 flex gap-4 justify-center 
        md:gap-6 md:flex-col md:mt-6'
      >
        <div
          className='flex gap-2 sm:gap-4
          '
        >
          <InputDefault placeholder='min' onChange={handleMinChange} />
          <p>-</p>
          <InputDefault placeholder='max' onChange={handleMaxChange} />
        </div>

        <Buttons
          name='Ok'
          color='bg-[rgba(74,156,128,0.5)]'
          onClick={onclick}
        />
      </div>
    </div>
  );
}

export default FilterSec;
