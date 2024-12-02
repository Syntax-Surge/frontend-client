import React, { useState } from 'react'
import { sidebardata } from './sidebardata'

function Sidebar({ setActiveTab, activeTab }) {
  const HorizontalLine = (val) => {
    if (activeTab === val.link) {
      return (
        <hr className=' mr-3 border-black'></hr>
      );
    }
  };

  return (
    <div>
      <div className=' bg-[#1B786F] ml-[400px] text-center rounded-xl pl-3 pr-6 pt-10 pb-10'>
        <div className='pt-5 pb-5'>
          <div className="flex flex-col items-center">
            <img
              src="https://via.placeholder.com/100"
              alt="Profile"
              className="rounded-full w-36 h-36 mb-2"
            />
            <h2 className="mt-2 font-semibold text-3xl text-gray-300">Sofia Havertz</h2>
          </div>
        </div>
        {/* <hr className=' ml-3 mr-3 border-black'></hr> */}
        <div className='pl-3'>
          <ul className='text-left pb-3 text-white text-2xl'>
            {sidebardata.map((val, key) => {
              const isActive = activeTab === val.link ? 'font-bold text-[#1B786F] bg-gray-300 rounded-lg' : '';
              return (
                <div>
                  <li className={`mt-2 mb-2 pt-2 pl-5 pb-2 hover:text-[#1B786F] hover:cursor-pointer hover:bg-gray-300 rounded-xl  ${isActive}`} key={key} onClick={() => { setActiveTab(val.link) }}>
                    {val.title}
                  </li>
                  <div>
                    {/* {HorizontalLine(val)} */}
                  </div>
                </div>

              );
            })}
          </ul>
        </div>

      </div>
    </div>
  )
}

export default Sidebar;