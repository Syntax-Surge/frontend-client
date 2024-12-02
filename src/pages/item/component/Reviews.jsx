import React, { useEffect } from 'react';
import Rate from './Rate';
import { FullReview } from './FullReview';
import { useState } from 'react';
import axios from 'axios';

function Reviews({ onCardClick, productId,handleRate }) {
  const [TopReviews, setTopReviews] = useState([]);
  const handleCardTop = () => {
    onCardClick();
  };

  useEffect(() => {
    const TopTwoReviews = async () => {
      try {
        const topTwoReviews = await axios.get(
          'http://localhost:5000/api/v1/reviews/two',
          {
            headers: {
              id: productId,
            },
          }
        );
        setTopReviews(topTwoReviews.data);
      } catch (error) {
        console.error(error.message);
      }
    };
    TopTwoReviews();
  },[]);

  const {avgRating,topTwoReviews} = TopReviews;
  

  // console.log(Array.isArray(topTwoReviews));
  // console.log(topTwoReviews);
  handleRate(avgRating);
  
  if (!Array.isArray(topTwoReviews)) {
    return <div>Loading reviews...</div>;
  }

  return (
    <div
      className='bg-white my-5 pb-3 shadow-sm sm:px-6'
      onClick={handleCardTop}
    >
      {/* top  */}
      <div className='flex justify-between px-5 pt-5'>
        <div className='text-lg font-medium sm:text-xl'>Customer Review</div>
        <div className='mt-1.5 flex'>
          <Rate showText={false} rate={avgRating} />
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
        {topTwoReviews.length > 0 ? (
          topTwoReviews.map((review) => (
            <FullReview
              key={review.id}
              usrId={review.userId}
              description={review.description}
              date={review.updatedAt}
            />
          ))
        ) : (
          <div>No reviews available</div>
        )}
      </div>
    </div>
  );
}
export default Reviews;
