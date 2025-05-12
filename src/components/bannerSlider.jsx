import { useEffect, useState } from 'react';
import { useShop } from '../providers/shopProvider';
import { storeMap } from './storedata';

const BannerSlider = () => {
  const {selectedShop} = useShop();
  const [current, setCurrent] = useState(0);
  const images = selectedShop?[storeMap[`${selectedShop.shopName}`].shopBanner]:[
    'https://wallpapercat.com/w/full/7/1/4/1198692-3840x2160-desktop-4k-studio-ghibli-background-photo.jpg',
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000); // Change image every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[350px] md:h-[350px] overflow-hidden">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Banner ${index + 1}`}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
            index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        />
      ))}
      {/* Optional: Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              current === index ? 'bg-white' : 'bg-white/50'
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default BannerSlider;
