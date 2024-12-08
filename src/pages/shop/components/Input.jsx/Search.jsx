import React, { useContext, useEffect, useState } from 'react';
import { FilterContext } from '../../../../contexts/filterContext';

function Search() {
  const [tempSearched, setTempSearched] = useState('');
  const { setSearched } = useContext(FilterContext);

  const handleChange = (event) => {
    setTempSearched(event.target.value);
  };

  const handleClick = () => {
    setSearched(tempSearched);
  };

  return (
    <div>
      <div class='max-w-36 sm:max-w-60'>
        <div class='relative'>
          <input
            class='w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pl-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow max-h-8
            sm:text-base'
            placeholder='Search...'
            onChange={handleChange}
          />
          <button
            class='absolute top-1 right-1 flex items-center rounded bg-slate-800 py-0.5 px-2.5 border text-centertext-black transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none bg-[rgba(74,156,128,0.5)]'
            type='button'
            onClick={handleClick}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='currentColor'
              class='w-4 h-4 mr-2'
            >
              <path
                fillRule='evenodd'
                d='M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z'
                clipRule='evenodd'
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Search;
