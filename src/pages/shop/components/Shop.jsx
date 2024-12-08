import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { PlantItemCard } from './card/ShopCard';
import { DefaultPagination } from './other/Pagination';
import { useFilterContext } from '../../../contexts/filterContext';

function ShopSec() {
  const [items, setItems] = useState([]);
  const { selectedCategories } = useFilterContext();

  console.log(selectedCategories);
  

  // get all item data
  useEffect(() => {
    const getItemData = async () => {
      try {
        const ItemsData = await axios.get(
          'http://localhost:5000/api/v1/products/'
        );

        setItems(ItemsData.data.rows);
      } catch (error) {
        console.error('error fetching data', error);
      }
    };
    getItemData();
  }, []);

  return (
    <div className='w-full'>
      <div
        className='grid grid-cols-2 mt-4 gap-2 justify-items-center m-2 mx-4
      sm:mx-10 sm:gap-y-10 sm:mt-8
      md:gap-x-6
      lg:grid-cols-3
      2xl:grid-cols-4'
      >
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
      </div>

      {/* <DefaultPagination /> */}
    </div>
  );
}

export default ShopSec;
