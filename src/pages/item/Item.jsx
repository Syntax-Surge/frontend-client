import React, { useEffect, useState } from 'react';
import { Typography } from '@material-tailwind/react';
import Rate from './component/Rate';
import Reviews from './component/Reviews';
import { FullReview } from './component/FullReview';
import Shop from '../shop/Shop';
import ShopSec from '../shop/Shop';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Buttons from '../shop/components/buttons/button';

function Item() {
  const { id } = useParams();
  // console.log("id is",id);

  const [showReviewDetail, setShowReviewDetail] = useState(false);
  const [itemData, setItemData] = useState({});
  const [rate, setRate] = useState('');
  const [orderCount, setOrderCount] = useState('');

  const handleRate = (rate) => {
    setRate(rate);
  };

  const handleShowReviewDetail = () => {
    setShowReviewDetail(true);
  };
  const backPage = () => {
    setShowReviewDetail(false);
  };

  // Scroll to the top when the page loads or when the id changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [id]);

  useEffect(() => {
    const getItem = async () => {
      try {
        const item = await axios.get(
          `http://localhost:5000/api/v1/products/${id}`
        );
        // const orders = await axios.get(
        //   `http://localhost:5000/api/v1/products/${id}`
        // );

        setItemData(item.data);
        // setOrderCount(orders.count);
      } catch (error) {
        console.error('error fetching data', error);
      }
    };
    getItem();
  }, [id]);

  const {
    pictureLocation,
    productDescription,
    productName,
    unitPrice,
    unitWeight,
  } = itemData;

  return (
    <div className='bg-gray-200 relative pb-[5px] min-h-screen flex flex-col '>
      {!showReviewDetail ? (
        <>
          <div className='flex-1 overflow-y-auto mb-[25px]'>
            <div className='md:flex 2xl:bg-white 2xl:pl-32'>
              <div>
                {/* Item image */}
                <div className='flex justify-center 2xl:p-10 '>
                  <img
                    src={pictureLocation}
                    alt={`${productName}, image`}
                    className='md:min-w-[400px] lg:min-w-[500px]'
                  />
                </div>
                {/* Price for small screen*/}
                <div
                  className='bg-green-300 h-[60px] flex items-center pl-10 sm:pl-24
            md:hidden'
                >
                  <Typography className='font-black text-black text-xl font-roboto'>
                    LKR<span className='text-2xl'> {unitPrice}</span>
                  </Typography>
                </div>
              </div>

              {/* Item details */}

              <div
                className='p-3 pt-4 font-roboto bg-white sm:px-10 md:pt-16 md:w-full 
              lg:pt-28 lg:pl-28'
              >
                {/* price for large screen  */}
                <Typography className='hidden md:block font-black text-black text-xl font-roboto mb-6'>
                  LKR<span className='text-2xl'> {unitPrice}</span>
                </Typography>
                <Typography
                  className='font-medium text-black text-sm
              sm:text-xl
              lg:text-2xl'
                >
                  {productName}
                </Typography>
                <Typography
                  className='text-black text-xs pt-2
              sm:text-base'
                >
                  {productDescription}
                </Typography>

                {/* product rate  */}
                <div className='mt-3'>
                  <Rate
                    showText={true}
                    rate={rate}
                    // orderCount={orderCount.count}
                  />
                </div>

                {/* product weight  */}
                <Typography
                  className='text-black text-xs pt-2
              sm:text-base'
                >
                  Weight : {unitWeight} kg
                </Typography>
                <div className='hidden md:block md:mt-14'>
                  <Buttons name='Buy now' color='bg-[rgba(74,156,128,0.5)]' />
                </div>
              </div>
            </div>

            {/* Reviews */}
            <div className=''>
              <Reviews
                onCardClick={handleShowReviewDetail}
                productId={id}
                handleRate={handleRate}
              />
            </div>
            {/* Shop */}
            <div className='bg-white py-8'>
              <ShopSec />
            </div>
          </div>
          {/* Fixed Footer */}
          <div
            className='bg-white h-[50px] fixed bottom-0 left-0 w-screen z-50 flex items-center justify-around sm:h-[60px]
          md:hidden'
          >
            <Buttons name='Buy now' color='bg-green-300' />
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
