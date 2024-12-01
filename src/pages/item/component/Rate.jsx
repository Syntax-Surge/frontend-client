import React,{useState} from 'react';

export default function Rate({ showText }) {
    
  const [rating, setRating] = useState(4);
  const stars = Array.from({ length: 5 }, (_, i) => (
    <svg
      key={i}
      //   onClick={() => setRating(i + 1)}
      xmlns='http://www.w3.org/2000/svg'
      fill={i < rating ? 'gold' : 'gray'}
      viewBox='0 0 24 24'
      width='12'
      height='12'
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
        {stars} <span className='ml-1 text-[10px]'>{rating}</span>{' '}
        {showText && (
          <>
            <span className='ml-1 text-[10px]'>| 3234 sold</span>
          </>
        )}
      </div>
    </div>
  );
}
