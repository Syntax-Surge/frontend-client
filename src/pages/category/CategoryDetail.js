import React from "react";
import { useCustomContext } from "../../contexts/Context";
import { CiWarning } from "react-icons/ci";


const CategoryDetail = () => {
  const { selectedCategory } = useCustomContext();

  if (!selectedCategory) {
    return (
        <div className="w-full py-32 flex flex-col lg:items-center lg:justify-center">
            <div className="scale-150">
                <CiWarning/>
            </div>
            <p className="text-4xl font-semibold text-[#1E1E1E] text-opacity-50">Please select a category from the carousel above.</p>
        </div>
    );
  }

  console.log("Selected Category",selectedCategory)

  return (
    <div className="flex flex-wrap w-full px-4">
      <div className="w-full p-5 flex flex-col lg:w-1/2 lg:items-start">
        <div className="text-4xl mb-6 text-[#000000] font-poppins font-bold">
          <h2>{selectedCategory.name}</h2>
        </div>
        <div className="text-base font-poppins mb-6 h-32 text-[#1E1E1E]">
          <p>Details about {selectedCategory.description}</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold">20+</h2>
          <p className="font-poppins">Plant Species</p>
        </div>
      </div>
      <div className="p-8 max-w-96 inline-block lg:items-end lg:ml-72 " >
        <div className="rounded-full relative p-8 border-8 border-cyan-900">
          <img src={selectedCategory.image} className="rounded-full max-h-48 inline-block"/>
        </div>
      </div>
    </div>
  );
};

export default CategoryDetail;
