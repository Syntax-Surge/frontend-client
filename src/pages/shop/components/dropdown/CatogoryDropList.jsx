import React, { useContext, useEffect, useState } from 'react';
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
import { FilterContext } from '../../../../contexts/filterContext';

export function CatogoryDropList() {
  const { filteredCategory, setFilteredCategory } = useContext(FilterContext);
  const [openMenu, setOpenMenu] = useState(false);
  const [catagories, setCatagories] = useState([]);

  // get categories
  useEffect(() => {
    const getCatagory = async () => {
      try {
        const catagories = await axios.get(
          `http://localhost:5000/api/v1/categories`
        );

        setCatagories(catagories.data);
      } catch (error) {
        console.error('error fetching data', error);
      }
    };
    getCatagory();
  }, []);

  //handle selected categories
  const handleCheckboxChange = async (categoryId, subcategories = []) => {
    // Determine whether the category is currently selected
    const isCategorySelected = filteredCategory.includes(categoryId);

    // the category and its subcategories
    const idsToToggle = [
      categoryId,
      ...subcategories.map((subcategory) => subcategory.id),
    ];

    // Create the updated selection
    const updatedSelection = isCategorySelected
      ? filteredCategory.filter((id) => !idsToToggle.includes(id))
      : [...filteredCategory, ...idsToToggle];

    setFilteredCategory(updatedSelection);
  };

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

          Categories
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3.5 w-3.5 transition-transform ${
              openMenu ? 'rotate-180' : ''
            }`}
          />
        </Button>
      </MenuHandler>
      <MenuList className='text-xs font-poppins'>
        {catagories.map((category, index) => (
          <MenuItem key={index} className='p-0'>
            <div className='flex flex-col'>
              <label
                htmlFor={`category-${index}`}
                className='flex cursor-pointer items-center gap-2 p-2 font-semibold'
              >
                <Checkbox
                  ripple={false}
                  id={`category-${index}`}
                  containerProps={{ className: 'p-0' }}
                  className='hover:before:content-none'
                  checked={filteredCategory.includes(category.id)}
                  onChange={() =>
                    handleCheckboxChange(category.id, category.subcategories)
                  }
                />
                {category.name}
              </label>
              {/* Subcategories */}
              {category.subcategories?.length > 0 && (
                <div className='pl-6'>
                  {category.subcategories.map((subcategory, subIndex) => (
                    <label
                      htmlFor={`subcategory-${index}-${subIndex}`}
                      className='flex cursor-pointer items-center gap-2 p-2'
                      key={subIndex}
                    >
                      <Checkbox
                        ripple={false}
                        id={`subcategory-${index}-${subIndex}`}
                        containerProps={{ className: 'p-0' }}
                        className='hover:before:content-none'
                        checked={filteredCategory.includes(subcategory.id)}
                        onChange={() => handleCheckboxChange(subcategory.id)}
                      />
                      {subcategory.name}
                    </label>
                  ))}
                </div>
              )}
            </div>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}
