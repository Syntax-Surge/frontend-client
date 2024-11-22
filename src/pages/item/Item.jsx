import React, { useState } from 'react';
import { Typography } from '@material-tailwind/react';
import Rate from './component/Rate';
import Reviews from './component/Reviews';
import { FullReview } from './component/FullReview';
import Shop from '../shop/Shop';
import ShopSec from '../shop/Shop';

function Item() {
  const [showReviewDetail, setShowReviewDetail] = useState(false);

  const handleShowReviewDetail = () => {
    setShowReviewDetail(true);
  };
  const backPage = () => {
    setShowReviewDetail(false);
  };

  return (
    <div className='bg-gray-200 relative pb-[25px] min-h-screen flex flex-col'>
      {!showReviewDetail ? (
        <>
          <div className='flex-1 overflow-y-auto'>
            {/* Item image */}
            <img
              src='https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80'
              alt='ui/ux review check'
            />
            {/* Price */}
            <div className='bg-green-300 h-[60px] flex items-center pl-10'>
              <Typography className='font-black text-black text-xl font-roboto'>
                LKR<span className='text-2xl'>678</span>.97
              </Typography>
            </div>
            {/* Item details */}
            <div className='p-3 pt-4 font-roboto bg-white'>
              <Typography className='font-medium text-black text-sm'>
                UI/UX Review Check
              </Typography>
              <Typography className='text-black text-xs pt-2'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                ducimus at voluptates ullam odit sint, culpa nisi ipsam, laborum
                dicta dolor,
              </Typography>
              <div className='mt-3'>
                <Rate showText={true} />
              </div>
            </div>
            {/* Reviews */}
            <div>
              <Reviews onCardClick={handleShowReviewDetail} />
            </div>
            {/* Shop */}
            <div className='bg-white pt-8'>
              <ShopSec />
            </div>
          </div>
          {/* Fixed Footer */}
          <div className='bg-black h-[50px] fixed bottom-0 left-0 w-full z-50'>
            <Typography className='text-white text-center p-2'>
              Fixed Footer Content
            </Typography>
          </div>
        </>
      ) : (
        <div className='p-5 bg-white'>
          <div className='flex'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='size-8'
              onClick={backPage}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M15.75 19.5 8.25 12l7.5-7.5'
              />
            </svg>
            <h2 className='text-center text-2xl font-bold ml-12'>
              Review Details
            </h2>
          </div>
          <div>
            <FullReview />
            <FullReview />
            <FullReview />
            <FullReview />
          </div>
          <Shop showHeroAndFilter={false} />
        </div>
      )}
    </div>
  );
}

export default Item;