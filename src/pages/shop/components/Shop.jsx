import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { PlantItemCard } from './card/ShopCard';
import { DefaultPagination } from './other/Pagination';
import { FilterContext } from '../../../contexts/filterContext';

function ShopSec() {
  const { filteredCategory, searched, minValue, maxValue } =
    useContext(FilterContext);
  const [items, setItems] = useState([]);
  const [curruntPage, setCurruntPage] = useState(1);
  const [count, setCount] = useState('');
  const [loading, setLoading] = useState(false);
  const [active, setActive] = React.useState(0);

  console.log('curruntpage', curruntPage);

  // Scroll to top whenever curruntPage changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [curruntPage]);

  // get all item data
  useEffect(() => {
    const getItemData = async () => {
      try {
        let endpoint = 'http://localhost:5000/api/v1/products/';
        const params = { page: curruntPage };

        if (filteredCategory.length > 0 || minValue || maxValue) {
          endpoint = 'http://localhost:5000/api/v1/filter';
          if (filteredCategory.length > 0)
            params.filteredCategory = filteredCategory;
          if (minValue) params.minValue = minValue;
          if (maxValue) params.maxValue = maxValue;
        }

        if (searched) {
          endpoint = 'http://localhost:5000/api/v1/search';
          params.keyword = searched;
        }

        setLoading(true);
        const ItemsData = await axios.get(endpoint, { params });
        // console.log(ItemsData.data.count);
        setItems(ItemsData.data.rows);
        setCount(ItemsData.data.count);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    getItemData();
  }, [filteredCategory, minValue, maxValue, searched, curruntPage]);

  // console.log(items);
  if (loading == true) {
    return (
      <div className='flex item-center justify-center text-xl'>Loading</div>
    );
  }

  return (
    <div className='w-full'>
      <div
        className='grid grid-cols-2 mt-4 gap-2 justify-items-center items-start m-2 mx-4
      sm:mx-10 sm:gap-y-10 sm:mt-8
      md:gap-x-6
      lg:grid-cols-3
      2xl:grid-cols-4 '
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

      <DefaultPagination
        count={count}
        setCurruntPage={setCurruntPage}
        active={active}
        setActive={setActive}
      />
    </div>
  );
}

export default ShopSec;
