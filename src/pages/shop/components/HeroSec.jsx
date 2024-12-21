import React from 'react';
import shopHeroPic from '../../../images/plant-shop-hero-image.jpg';

function HeroSec() {
  return (
    <div className=''>
      {/* image */}
      {/* <div className='flex justify-center'>
        <img className='w-96' src={shopHeroPic} alt='plant picture' />
      </div> */}
      {/* gray background */}
      <div className='bg-[#ededed] h-[130px] mt-[-70px]'>
        <p className='flex justify-center pt-[85px] font-poppins font-bold'>
          Fresh plants delivered to you!
        </p>
      </div>
    </div>
  );

}

export default HeroSec;
