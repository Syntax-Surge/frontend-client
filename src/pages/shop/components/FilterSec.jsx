import React from 'react';
import { Discount } from './Chips/Discount';
import { CatogoryDropList } from './dropdown/CatogoryDropList';
import Search from './Input.jsx/Search';
import { InputDefault } from './Input.jsx/Input';
import Buttons from './buttons/button';


function FilterSec() {
  return (
    <div className='py-4 shadow-lg'>
      <div className='flex gap-1 justify-center'>
        {/* discount chip */}
        <Discount />
        {/* dropdown  */}
        <CatogoryDropList />
        {/* search bar */}
        <Search />
      </div>
      <div className='mt-2 flex gap-4 justify-center'>
        <InputDefault placeholder='min' />
        <p>-</p>
        <InputDefault placeholder='max' />
        <Buttons name='Ok' color='bg-[rgba(74,156,128,0.5)]' />
      </div>
    </div>
  );
}

export default FilterSec;
