import React, { useEffect } from 'react';
import Rate from './Rate';
import { FullReview } from './FullReview';
import { useState } from 'react';
import axios from 'axios';

function Reviews({ onCardClick, productId, handleRate }) {
  const [TopReviews, setTopReviews] = useState([]);
  const handleCardTop = () => {
    onCardClick();
  };

  useEffect(() => {
    const TopTwoReviews = async () => {
      try {
        const topTwoReviews = await axios.get(
          'http://localhost:3002/api/v1/products/reviews/two',
          {
            headers: {
              id: productId,
            },
          }
        );
        setTopReviews(topTwoReviews.data.rows);
        // console.log(topTwoReviews);
        
      } catch (error) {
        console.error(error.message);
      }
    };
    TopTwoReviews();

  }, []);

  const { avgRating, topTwoReviews } = TopReviews;
  console.log(TopReviews);

  handleRate(avgRating);

  if (!Array.isArray(topTwoReviews)) {
    return <div>Loading reviews...</div>;
  }

 


  const updatedReviews = topTwoReviews.map((review) => {
    const dateOnly = new Date(review.createdAt).toISOString().split('T')[0];

    return {
      ...review, 
      dateOnly, 
    };
  });



  return (
    <div
      className='bg-white my-5 pb-3 shadow-sm sm:px-4 '

    >
      {/* top  */}
      <div className='flex justify-between px-5 pt-5 md:px-32 lg:px-40 xl:px-52 2xl:px-72'>
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

      <div className='md:flex md:mt-6 justify-around'>
        {updatedReviews.length > 0 ? (
          updatedReviews.map((review) => (
            <FullReview
              key={review.id}
              userId={review.userId}
              description={review.description}
              date={review.dateOnly}
              rate={review.rating}
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
