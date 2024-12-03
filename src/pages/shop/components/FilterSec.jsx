import React, { useState } from 'react';
import { Discount } from './Chips/Discount';
import { CatogoryDropList } from './dropdown/CatogoryDropList';
import Search from './Input.jsx/Search';
import { InputDefault } from './Input.jsx/Input';
import Buttons from './buttons/button';
import axios from 'axios';

function FilterSec() {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [minValue, setMinValue] = useState('');
  const [maxValue, setMaxValue] = useState('');

  const handleSelectionChange = (categories) => {
    console.log('Selected Categories:', categories);
    setSelectedCategories(categories);
  };

  const handleMinChange = (value) => {
    console.log('Min Value:', value);
    setMinValue(value);
  };

  const handleMaxChange = (value) => {
    console.log('Max Value:', value);
    setMaxValue(value);
  };

  const onclick = async () => {
    try {
      const filterData = {
        categories: selectedCategories,
        minValue: minValue,
        maxValue: maxValue,
      };

      const response = await axios.post(
        'http://localhost:5000/api/v1/filters',
        filterData
      );
      console.log('Backend response:', response.data);
    } catch (error) {
      console.error('Error sending filter data:', error);
    }
  };

  const isFilterActive =
    selectedCategories.length > 0 || minValue !== '' || maxValue !== '';

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
        <CatogoryDropList onSelectionChange={handleSelectionChange} />
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
          isActive={isFilterActive}
          onClick={onclick}
        />
      </div>
    </div>
  );
}

export default FilterSec;
