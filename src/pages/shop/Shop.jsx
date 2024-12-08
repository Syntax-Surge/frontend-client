import React from 'react';
import HeroSec from './components/HeroSec';
import FilterSec from './components/FilterSec';
import ShopSec from './components/Shop';
import { ShopFilterProvider } from '../../contexts/filterContext';

function Shop({ showHeroAndFilter }) {
  return (
    <ShopFilterProvider>
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
    </ShopFilterProvider>
  );
}

export default Shop;
