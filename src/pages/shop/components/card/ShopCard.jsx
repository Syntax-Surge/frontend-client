import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Avatar,
  Tooltip,
} from '@material-tailwind/react';
import Buttons from '../buttons/button';
import { useNavigate } from 'react-router-dom';

export function PlantItemCard() {
  const navigate = useNavigate();

  const handleCardClick = () => {
    console.log("clicked on card");
    
    navigate('/item');
  };
  return (
    <Card className='max-w-[10rem] overflow-hidden ' onClick={handleCardClick}>
      <CardHeader
        floated={false}
        shadow={false}
        color='transparent'
        className='m-0'
      >
        <img
          src='https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80'
          alt='ui/ux review check'
        />
      </CardHeader>
      <CardBody className='p-1'>
        <Typography className='font-medium text-black text-sm font-roboto'>
          UI/UX Review Check
        </Typography>
        <Typography
          variant='lead'
          color='gray'
          className='mt-2 font-normal text-xs font-roboto'
        >
          Because it&apos;s about motivating the doers. Because I&apos;m here to
          follow my dreams and inspire others.
        </Typography>
      </CardBody>
      <CardFooter className='flex items-center justify-center p-1 gap-4'>
        <Typography className='font-bold text-black text-sm font-roboto'>
          LKR<span className='text-base'>678</span>.97
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
