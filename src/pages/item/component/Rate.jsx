import React, { useState } from 'react';

export default function Rate({ showText, rate, 
  // orderCount 
}) {
  const roundedRate = Math.round(rate);

  const stars = Array.from({ length: 5 }, (_, i) => (
    <svg
      key={i}
      //   onClick={() => setRating(i + 1)}
      xmlns='http://www.w3.org/2000/svg'
      fill={i < roundedRate ? 'gold' : 'gray'}
      viewBox='0 0 24 24'
      width='14'
      height='14'
      className='
      cursor-pointer
      '
    >
      <path d='M12 .587l3.668 7.431L24 9.651l-6 5.847 1.417 8.262L12 18.897l-7.417 4.863L6 15.498 0 9.651l8.332-1.633z' />
    </svg>
  ));

  return (
    <div>
      <div className='flex'>
        {stars} <span className='ml-1 text-[10px] sm:text-xs'>{rate}</span>{' '}
        {showText && (
          <>
            <span className='ml-1 text-[10px] sm:text-xs'>
              |  sold
            </span>
          </>
        )}
      </div>
    </div>
  );
}
