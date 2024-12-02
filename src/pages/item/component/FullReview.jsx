import { Typography, Avatar, Rating } from '@material-tailwind/react';
import Rate from './Rate';
import { useEffect, useState } from 'react';
import axios from 'axios';

export function FullReview(userId, description, date) {
  const [user,setUser] = useState({});

  useEffect(() => {
    const getUserById = async () => {
      try {
        const user = await axios.get(
          'http://localhost:5000/api/v1/users/getUserByID',
          {
            params: { id: userId },
          }
        );
        setUser(user);
        console.log(user);
        
      } catch (error) {
        console.error(error.message);
      }
    };
    getUserById();
  }, []);

  console.log();
  

  return (
    <div className='px-6 mt-5 mb-8'>
      <div className='flex'>
        <Avatar
          src='https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80'
          alt='image'
          size='md'
          className=''
        />

        <div className='ml-4 w-[250px]'>
          {/* name and date  */}
          <div className='flex justify-between'>
            <Typography className='font-bold text-sm font-roboto'>
              Tania Andrew
            </Typography>
            <Typography className='text-xs font-roboto'>Date</Typography>
          </div>

          <Typography color='gray' className='font-normal text-xs font-roboto'>
            Lead Frontend Developer
          </Typography>
          <Rate />
        </div>
      </div>

      <Typography color='blue-gray' className='font-normal text-xs mt-2'>
        &quot;This is an excellent product, the documentation is excellent and
        helped me get things done more efficiently.&quot;
      </Typography>
    </div>
  );
}
