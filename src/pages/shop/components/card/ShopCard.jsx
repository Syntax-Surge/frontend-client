import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from '@material-tailwind/react';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export function PlantItemCard({
  id,
  name,
  description,
  imageUrl,
  price,
  weight,
}) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/item/${id}`);
  };

  // console.log(price, weight);

  return (
    <Card
      className='overflow-hidden sm:max-w-[300px]
      md:max-w-[300px]'
      onClick={handleCardClick}
    >
      <CardHeader
        floated={false}
        shadow={false}
        color='transparent'
        className='m-0 flex justify-center'
      >
        <img src={imageUrl} alt={`${name}, image`} />
      </CardHeader>
      <CardBody
        className='p-1
      sm:px-4'
      >
        <Typography
          className='font-medium text-black text-sm font-roboto
        sm:text-base'
        >
          {name}
        </Typography>
        <Typography
          variant='lead'
          color='gray'
          className='mt-2 font-normal text-xs font-roboto
          sm:text-sm'
        >
          {description}
        </Typography>
      </CardBody>
      <CardFooter className='flex items-center justify-center p-1 gap-4'>
        <Typography
          className='font-bold text-black text-sm font-roboto
        sm:text-base'
        >
          LKR
          <span
            className='text-base
          sm:text-lg'
          >
            {price}
          </span>
        </Typography>
        {/* <Buttons /> */}
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={2}
          stroke='black'
          className='size-6'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z'
          />
        </svg>
      </CardFooter>
    </Card>
  );
}
