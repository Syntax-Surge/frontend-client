import React from 'react';
import { Button, IconButton } from '@material-tailwind/react';
import { ArrowRightIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';

export function DefaultPagination({
  count,
  setCurruntPage,
  active,
  setActive,
}) {
  const page = Math.ceil(count / 10);

  const getItemProps = (index) => ({
    variant: active === index ? 'filled' : 'text',
    color: 'gray',

    onClick: () => {
      setActive(index);
      setCurruntPage(index + 1);
    },
  });

  const next = () => {
    if (active < page - 1) {
      setActive(active + 1);
      setCurruntPage(active + 2);
    }
  };

  const prev = () => {
    if (active > 0) {
      setActive(active - 1);
      setCurruntPage(active);
    }
  };

  if (page <= 1) return null;

  return (
    <div className='flex items-center gap-4 justify-center md:my-10 xl:my-12 2xl:my-20'>
      <Button
        variant='text'
        className='flex items-center gap-2'
        onClick={prev}
        disabled={active === 0}
      >
        <ArrowLeftIcon strokeWidth={2} className='h-4 w-4' /> Previous
      </Button>
      <div className='flex items-center gap-2'>
        {Array.from({ length: page }).map((_, i) => (
          <IconButton key={i} {...getItemProps(i)}>
            {i + 1}
          </IconButton>
        ))}
      </div>
      <Button
        variant='text'
        className='flex items-center gap-2'
        onClick={next}
        disabled={active === page - 1}
      >
        Next
        <ArrowRightIcon strokeWidth={2} className='h-4 w-4' />
      </Button>
    </div>
  );
}
