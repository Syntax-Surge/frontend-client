import React, { useEffect, useState } from 'react';
import {
  Menu,
  MenuHandler,
  Button,
  MenuList,
  MenuItem,
  Checkbox,
} from '@material-tailwind/react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import axios from 'axios';

export function CatogoryDropList({ onSelectionChange }) {
  const [openMenu, setOpenMenu] = useState(false);
  const [catagories, setCatagories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  useEffect(() => {
    const getCatagory = async () => {
      try {
        const catagories = await axios.get(
          `http://localhost:5000/api/v1/categories`
        );
        // console.log(catagories.data);

        setCatagories(catagories.data);
      } catch (error) {
        console.error('error fetching data', error);
      }
    };
    getCatagory();
  }, []);

  const handleCheckboxChange = (categoryId) => {
    const updatedSelection = selectedCategories.includes(categoryId)
      ? selectedCategories.filter((id) => id !== categoryId) // Remove if already selected
      : [...selectedCategories, categoryId]; // Add if not selected

    setSelectedCategories(updatedSelection);
    onSelectionChange(updatedSelection); // Send to parent component
  };

  //  console.log(catagories);

  return (
    <Menu
      className='md:hidden'
      open={openMenu}
      handler={setOpenMenu}
      animate={{
        mount: { y: 0 },
        unmount: { y: -25 },
      }}
      dismiss={{
        itemPress: false,
      }}
    >
      <MenuHandler>
        <Button
          variant='text'
          className='flex items-center gap-3 text-xs font-poppins font-normal capitalize tracking-normal bg-[rgba(213,213,213,0.41)] rounded-full py-[8px] px-[16px] 
          sm:text-sm sm:px-[40px]'
          onClick={() => setOpenMenu(!openMenu)}
        >
          Catagories
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3.5 w-3.5 transition-transform ${
              openMenu ? 'rotate-180' : ''
            }`}
          />
        </Button>
      </MenuHandler>
      <MenuList className='text-xs font-poppins'>
        {catagories.map((item, index) => (
          <MenuItem key={index} className='p-0'>
            <label
              htmlFor={`item-${index}`}
              className='flex cursor-pointer items-center gap-2 p-2'
            >
              <Checkbox
                ripple={false}
                id={`item-${index}`}
                containerProps={{ className: 'p-0' }}
                className='hover:before:content-none'
                checked={selectedCategories.includes(item.id)}
                onChange={() => handleCheckboxChange(item.id)}
              />
              {item.name}
            </label>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}
