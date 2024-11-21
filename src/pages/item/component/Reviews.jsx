import React from 'react';
import Rate from './Rate';
import { FullReview } from './FullReview';
import { useState } from 'react';

function Reviews({ onCardClick }) {
  
  const handleCardTop = () => {
    onCardClick();
  };

  return (
    <div className='bg-white my-5 shadow-sm' onClick={handleCardTop}>
      {/* top  */}
      <div className='flex justify-between px-5 pt-5'>
        <div className='text-lg font-medium'>review</div>
        <div className='mt-1.5 flex'>
          <Rate showText={false} />
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='size-4 ml-4 cursor-pointer'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='m8.25 4.5 7.5 7.5-7.5 7.5'
            />
          </svg>
        </div>
      </div>
      <div>
        <FullReview />
      </div>
      <div>
        <FullReview />
      </div>
    </div>
  );
}
export default Reviews;
