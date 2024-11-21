import React from 'react';
import { PlantItemCard } from './card/ShopCard';
import { DefaultPagination } from './other/Pagination';

function ShopSec() {
  return (
    <div>
      <div className='flex flex-col-2 gap-3 justify-center mt-4'>
        <PlantItemCard />
        <PlantItemCard />
        {/* <PlantItemCard /> */}
      </div>
      <DefaultPagination />
    </div>
  );
}

export default ShopSec;
