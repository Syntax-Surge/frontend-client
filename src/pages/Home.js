import { Button } from '@material-tailwind/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='flex justify-center items-center space-x-8'>
      
      <Button>Hello</Button> 
      <br/>
      <br/>
      <Button ><Link to={'/auth/signup'}> Sign up</Link></Button>
      <Button ><Link to={'/auth/signIn'}> Sign In</Link></Button>
    </div>
  )
}

export default Home
