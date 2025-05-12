import React from 'react';
import { useShop } from '../providers/shopProvider';

const StoreCard = ({ store }) => {
  const { name, description, logo, rating = 0 } = store;
  const clampedRating = Math.min(Math.max(rating, 0), 5);
  const ratingPercentage = (clampedRating / 5) * 100;
  const {selectShop} = useShop()
  return (
    <div
      className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 cursor-pointer flex flex-col h-[400px] w-full "
    >
      {/* Store Image */}
      <img
        src={logo}
        alt={name}
        className="w-full h-40 object-cover"
      />

      {/* Content */}
      <div className="bg-orange-50 flex flex-col justify-between flex-1 p-4">
        <div>
          <h2 className="text-xl font-bold text-gray-800">{name}</h2>
          <p className="text-sm text-gray-600 mt-2 line-clamp-2 min-h-[60px]">
            {description}
          </p>
        </div>

        <div className="mt-4">
          {/* Star Text Rating */}
          <div className="flex items-center space-x-2 text-yellow-500 text-sm font-medium">
            <div className="relative flex items-center space-x-1 leading-none">
              <span className="text-yellow-400 text-lg">★★★★★</span>
              <div
                className="absolute top-0 left-0 h-full overflow-hidden"
                style={{ width: `${ratingPercentage}%` }}
              >
                <span className="text-lg">★★★★★</span>
              </div>
            </div>
            <span className="text-gray-600">{clampedRating.toFixed(1)}</span>
          </div>

          {/* Button */}
          <button className="mt-4 w-full px-4 py-2 bg-[var(--primary)] text-white rounded-md hover:bg-[var(--secondary)] transition duration-300"
            onClick={()=>{selectShop({"shopName":name})}}
          >
            View Shop
          </button>
        </div>
      </div>
    </div>
  );
};

export default StoreCard;
