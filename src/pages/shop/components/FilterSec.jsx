import React from 'react';
import { Discount } from './Chips/Discount';
import { CatogoryDropList } from './dropdown/CatogoryDropList';
import Search from './Input.jsx/Search';
import { InputDefault } from './Input.jsx/Input';
import Buttons from './buttons/button';


function FilterSec() {
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
          <InputDefault placeholder='min' />
          <p>-</p>
          <InputDefault placeholder='max' />
        </div>

        <Buttons name='Ok' color='bg-[rgba(74,156,128,0.5)]' />
      </div>
    </div>
  );
}

export default FilterSec;
