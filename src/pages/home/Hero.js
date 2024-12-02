import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import { Button } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import HeroImage from '../../assets/Hero_image.jpg'

const Hero = () => {
  return (
    <div className='h-screen px-10 lg:pl-10 lg:px-0'> 
        <div className='flex flex-wrap'>
            <div className='w-full lg:w-1/2 space-x-2'>
                <div className='flex flex-col items-center lg:items-start pt-10 lg:pt-40'>
                    <TypeAnimation
                         sequence={[
                            "Planty'X",
                            1000, 
                            ' ',
                            1000,
                          ]}
                          wrapper="span"
                          speed={50}
                          className='bg-[#010101] bg-opacity-60 bg-clip-text text-6xl pb-1 tracking-tight text-transparent'
                          repeat={Infinity}
                    >
                    </TypeAnimation>
                    <div className='py-6'>
                        <Link to={'/item'}><Button className='rounded-full hover:scale-110 hover:drop-shadow-xl hover:border-4 hover:border-blue-gray-300 hover:text-blue-gray-200'> Explore</Button></Link>
                    </div>
                    <TypeAnimation
                         sequence={[
                            "Beautiful living greenery for homes and offices",
                            500, 
                          ]}
                          wrapper="span"
                          speed={50}
                          className='pb-6 text-2xl font-normal tracking-tight lg:mt-0 lg:text-5xl'
                          repeat={Infinity}
                    >
                    </TypeAnimation>
                    <TypeAnimation
                         sequence={[
                            "We've been mentioned in the press",
                            500, 
                          ]}
                          wrapper="span"
                          speed={50}
                          className='pb-6 text-sm tracking-tight lg:mt-0'
                          repeat={Infinity}
                    >
                    </TypeAnimation>
                </div>
            </div>
            <div className='relative w-full lg:w-1/2 lg:top-0 py-2 lg:items-end lg:bg-gradient-to-r from-white via-transparent to-transparent'>
                
                    <img 
                        className='object-cover lg:mix-blend-overlay'
                        initial={{ x:100, opacity:0 }}
                        animate={{ x:0, opacity:1 }}
                        transition={{ duration:1, delay:1.2 }}
                        src={HeroImage} 
                        alt="Plants" 
                    />
                    
                
            </div>
        </div>
    </div>
  )
}

export default Hero