import { Button } from '@material-tailwind/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='flex justify-center items-center space-x-8'>
      
      <Button>Hello</Button> 
      <Link to={'/myaccount'}>    <Button > Account</Button></Link>
      <br/>
      <br/>
      <Link to={'/auth/signup'}>    <Button > Sign up</Button></Link>
      <Link to={'/auth/signIn'}> <Button >Sign In</Button></Link>
      <Link to={'/browse'}> <Button>Browse Page</Button></Link>
      <Link to={'/browse'}> <Button>Browse Page</Button></Link>

    </div>
  );
};

export default Home;
