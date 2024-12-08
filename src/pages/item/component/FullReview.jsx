import { Typography, Avatar, Rating } from '@material-tailwind/react';
import Rate from './Rate';
import { useEffect, useState } from 'react';
import axios from 'axios';

export function FullReview({userId, description, date,rate}) {
  const [user, setUser] = useState({});
  // console.log('userid = ', userId, description, date);
  // userId=2;

  useEffect(() => {
    const getUserById = async () => {
      try {
        const user = await axios.get(
          'http://localhost:4000/api/v1/users/getUserByID',
          {
            params: { id: userId },
          }
        );
        setUser(user.data);
        console.log(user.data);
      } catch (error) {
        console.error(error.message);
      }
    };
    getUserById();
  }, []);

  // console.log();
  const {firstName,lastName,id,profileImage} = user

  return (
    <div className='px-6 mt-5 mb-8'>
      <div className='flex'>
        <Avatar
          src={`${profileImage}`}
          alt='Profile image'
          size='md'
          className='lg:w-12'
        />

        <div className='ml-4 w-[250px]'>
          {/* name and date  */}
          <div className='flex justify-between'>
            <Typography className='font-bold text-sm font-roboto lg:text-lg'>
              {firstName} {lastName}
            </Typography>
            <Typography className='text-xs font-roboto lg:text-sm'>{date}</Typography>
          </div>

          {/* <Typography color='gray' className='font-normal text-xs font-roboto'>
            Lead Frontend Developer
          </Typography> */}
          <Rate rate={rate} />
        </div>
      </div>

      <Typography color='blue-gray' className='font-normal text-xs mt-2 lg:text-base'>
        {description}
      </Typography>
    </div>
  );
}
