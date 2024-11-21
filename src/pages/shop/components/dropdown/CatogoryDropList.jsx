import React, { useState } from 'react';
import {
  Menu,
  MenuHandler,
  Button,
  MenuList,
  MenuItem,
  Checkbox,
} from '@material-tailwind/react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

export function CatogoryDropList() {
  const [openMenu, setOpenMenu] = useState(false);

  // Array of menu items
  const menuItems = [
    'Menu Item 1',
    'Menu Item 2',
    'Menu Item 3',
    'Menu Item 4',
    'Menu Item 5',
    'Menu Item 6',
  ];

  return (
    <Menu
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
          className='flex items-center gap-3 text-xs font-poppins font-normal capitalize tracking-normal bg-[rgba(213,213,213,0.41)] rounded-full py-[8px] px-[16px]'
          onClick={() => setOpenMenu(!openMenu)}
        >
          Technology
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3.5 w-3.5 transition-transform ${
              openMenu ? 'rotate-180' : ''
            }`}
          />
        </Button>
      </MenuHandler>
      <MenuList className='text-xs font-poppins'>
        {menuItems.map((item, index) => (
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
              />
              {item}
            </label>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}
