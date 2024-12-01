import React from 'react'
import BrowseCarousal from './BrowseCarousal'
import CategoryDetail from './CategoryDetail'

const BrowseByCategory = () => {
  return (
    <div>
        <div className='bg-[#C1DCDC] drop-shadow-md shadow-lg items-center justify-center mt-10'>
            <BrowseCarousal />
        </div>
        <div className='bg-[#C1DCDC] drop-shadow-md shadow-lg items-center justify-center mt-10'>
            <CategoryDetail />
        </div>
    </div>
  )
}

export default BrowseByCategory