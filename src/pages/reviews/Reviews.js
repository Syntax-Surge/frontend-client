import React, { useState } from "react";
import ReviewCard from "./components/ReviewCard";

const CustomerReviews = () => {
  const reviews = [
    {
      id: 1,
      name: "John Doe",
      rating: 4.5,
      comment: "Absolutely loved the quality and variety of plants! Will definitely be purchasing again. The service was also very quick and helpful. Highly recommended!",
      avatar: "https://via.placeholder.com/50",
    },
    {
      id: 2,
      name: "Jane Smith",
      rating: 4.5,
      comment: "The plants arrived in great condition and were exactly as described. I’m very impressed with the customer service. Will definitely shop here again!",
      avatar: "https://via.placeholder.com/50",
    },
    {
      id: 3,
      name: "Emily Davis",
      rating: 4.5,
      comment: "Fantastic selection of plants and amazing customer service! The plants are healthy and vibrant, and they were delivered right on time. Highly recommend this store!",
      avatar: "https://via.placeholder.com/50",
    },
    {
      id: 4,
      name: "Alice Johnson",
      rating: 5.0,
      comment: "The plants are of exceptional quality and have brought so much life to my home. Great experience with this shop. I will order again!",
      avatar: "https://via.placeholder.com/50",
    },
    {
      id: 5,
      name: "Bob Brown",
      rating: 4.0,
      comment: "Very pleased with my purchase! The plants were healthy, well-packaged, and arrived on time. I will definitely be returning for more. Thank you!",
      avatar: "https://via.placeholder.com/50",
    },
    {
      id: 6,
      name: "Charlie Lee",
      rating: 4.5,
      comment: "Love the plants I ordered! They were in perfect condition and well packaged. The delivery was quick, and I couldn’t be happier with the service!",
      avatar: "https://via.placeholder.com/50",
    },
    {
      id: 7,
      name: "Danielle Green",
      rating: 4.0,
      comment: "Such a great experience with this store! The plants were healthy, beautifully packed, and arrived quickly. I’m already planning my next purchase. Highly recommend!",
      avatar: "https://via.placeholder.com/50",
    },
    {
      id: 8,
      name: "Edward Miller",
      rating: 4.5,
      comment: "The plants are absolutely beautiful and in perfect condition. The service was excellent, and they were delivered promptly. Will definitely order again!",
      avatar: "https://via.placeholder.com/50",
    },
    {
      id: 9,
      name: "Fiona White",
      rating: 5.0,
      comment: "Absolutely thrilled with my order! The plants were exactly what I wanted and looked even better in person. Highly recommend this shop for plant lovers!",
      avatar: "https://via.placeholder.com/50",
    },
    {
      id: 10,
      name: "George Black",
      rating: 4.0,
      comment: "A wonderful experience from start to finish. The plants were well-packaged, healthy, and the service was prompt. I will definitely be purchasing from here again!",
      avatar: "https://via.placeholder.com/50",
    },
  ];

  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 8;

  // Get current reviews to display 
  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = reviews.slice(indexOfFirstReview, indexOfLastReview);

  // next page
  const nextPage = () => {
    if (currentPage < Math.ceil(reviews.length / reviewsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  // previous page
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="bg-gray-100">
      {/* Image Section */}
      <div className="relative">
        <img
          src="https://as2.ftcdn.net/v2/jpg/08/56/27/77/1000_F_856277746_VeXCH0FJbvHf23ht1T551G9JHFgDmjWP.jpg"
          alt="Customer Reviews"
          className="w-full h-screen object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
          <h1 className="text-8xl font-bold">Customer Reviews</h1>
          <p className="text-4xl font-medium">
            See what our plant lovers are saying!
          </p>
        </div>
      </div>

      {/* Staggered Cards  */}
      <div className="p-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {currentReviews.map((review, index) => (
            <div
              key={review.id}
              className={`w-full h-[170px] ${
                index % 2 === 0 ? "lg:ml-auto" : "lg:mr-auto"
              }`}
            >
              <ReviewCard
                avatar={review.avatar}
                name={review.name}
                rating={review.rating}
                comment={review.comment}
              />
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-end mt-8 gap-4">
          <button
            onClick={prevPage}
            className="bg-gray-800 text-white px-4 py-2 rounded-lg disabled:opacity-50"
            disabled={currentPage === 1}
          >
            Back
          </button>
          <button
            onClick={nextPage}
            className="bg-gray-800 text-white px-4 py-2 rounded-lg disabled:opacity-50"
            disabled={currentPage === Math.ceil(reviews.length / reviewsPerPage)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomerReviews;
