import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { PlantItemCard } from './card/ShopCard';
import { DefaultPagination } from './other/Pagination';

function ShopSec() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const getItemData = async () => {
      try {
        const ItemsData = await axios.get(
          'http://localhost:5000/api/v1/products/'
        );
        // console.log('data fetched', ItemsData);
        setItems(ItemsData.data.rows);
      } catch (error) {
        console.error('error fetching data', error);
      }
    };
    getItemData();
  }, []);
  // console.log(items);

  return (
    <div className=''>
      <div className='grid grid-cols-2 mt-4 gap-2 justify-items-center m-2'>
        {items.map((item) => (
          <PlantItemCard
            key={item.id}
            id={item.id}
            name={item.productName}
            description={item.productDescription}
            imageUrl={item.pictureLocation}
            price={item.unitPrice}
          />
        ))}
        {/* {items.id} */}
        {/* {items.pictureLocation}
        <img src={`${items.pictureLocation}`} alt={`image`} /> */}
      </div>
      {/* <div className='grid grid-cols-2 gap-3 justify-center mt-4'>
        <PlantItemCard />
        <PlantItemCard />
        <PlantItemCard />
        <PlantItemCard />
        <PlantItemCard />
      </div> */}
      {/* <div className='grid grid-cols-2 gap-3 justify-items-center mt-4'>
        <div className='h-[200px] w-[200px] bg-black'></div>
        <div className='h-[200px] w-[200px] bg-black'></div>
        <div className='h-[200px] w-[200px] bg-black'></div>
        <div className='h-[200px] w-[200px] bg-black'></div>
        <div className='h-[200px] w-[200px] bg-black'></div>
      </div> */}
      {/* <DefaultPagination /> */}
    </div>
  );
}

export default ShopSec;
