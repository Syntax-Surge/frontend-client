import { Chip } from '@material-tailwind/react';
import React, { useState } from 'react';

export function Discount() {
  // State to toggle the color
  const [isActive, setIsActive] = useState(false);

  // Function to handle the click
  const handleClick = () => {
    setIsActive(!isActive);
    console.log(isActive);
  };

  return (
    <div className='flex'>
      <Chip
        variant='ghost'
        value='Discounts'
        className={`rounded-full py-[8px] px-[16px] font-poppins font-normal 
          sm:text-sm sm:px-[40px] ${
          isActive ? 'bg-[rgba(74,156,128,0.5)]' : 'bg-[rgba(213,213,213,0.41)]'
        }`}
        style={{ textTransform: 'none' }}
        onClick={handleClick}
      />
    </div>
  );
}
