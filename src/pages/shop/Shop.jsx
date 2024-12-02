import React from 'react';
import HeroSec from './components/HeroSec';
import FilterSec from './components/FilterSec';
import ShopSec from './components/Shop';

function Shop({ showHeroAndFilter }) {
  // console.log(showHeroAndFilter);

  return (
    <div className=''>
      {/* hero section */}
      {showHeroAndFilter && <HeroSec />}
      <div className='md:flex'>
        {/* filter section */}
        {showHeroAndFilter && <FilterSec />}
        {/* shop */}
        <ShopSec />
      </div>
    </div>
  );
}

export default Shop;
