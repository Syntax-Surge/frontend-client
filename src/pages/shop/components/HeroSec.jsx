import React from 'react';
import shopHeroPic from '../../../images/shop-hero-sec-pic.png';

function HeroSec() {
  return (
      <div>
        {/* image */}
        <div className='border border-black flex justify-center'>
          <img className='w-10/12' src={shopHeroPic} alt='plant picture' />
        </div>
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
