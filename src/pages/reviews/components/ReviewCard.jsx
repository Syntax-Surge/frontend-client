import React from "react";

const ReviewCard = ({ avatar, name, rating, comment }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col space-y-4">
      <div className="flex items-center space-x-4">
        <img
          src={avatar}
          alt="avatar"
          className="w-12 h-12 rounded-full"
        />
        <div>
          <h2 className="text-lg font-bold">{name}</h2>
          <p className="text-black-500 font-xl">
            {Array.from({ length: Math.floor(rating) }, (_, i) => (
              <span key={i}>★</span>
            ))}
            {rating % 1 !== 0 && "☆"} ({rating})
          </p>
        </div>
      </div>
      <p className="text-gray-700">{comment}</p>
    </div>
  );
};

export default ReviewCard;
