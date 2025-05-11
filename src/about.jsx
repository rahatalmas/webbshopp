import { useEffect, useRef, useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const team = [
  {
    name: 'Pain',
    role: 'Leader',
    image: 'https://wallpapercave.com/wp/wp2552767.jpg',
  },
  {
    name: 'Itachi Uchiha',
    role: 'Member',
    image: 'https://vignette.wikia.nocookie.net/naruto/images/c/cd/Itachi_Uchiha_Anime_Profile.png/revision/latest/scale-to-width-down/350?cb=20170903064824',
  },
  {
    name: 'Kisame Hoshigaki',
    role: 'Member',
    image: 'https://vignette.wikia.nocookie.net/naruto/images/3/35/Kisame_Hoshigaki_Anime_Profile.png/revision/latest/scale-to-width-down/350?cb=20170903064609',
  },
  {
    name: 'Deidara',
    role: 'Member',
    image: 'https://vignette.wikia.nocookie.net/naruto/images/7/71/Deidara_Anime_Profile.png/revision/latest/scale-to-width-down/350?cb=20170903063852',
  },
  {
    name: 'Sasori',
    role: 'Member',
    image: 'https://vignette.wikia.nocookie.net/naruto/images/c/cb/Sasori_Anime_Profile.png/revision/latest/scale-to-width-down/350?cb=20170903064709',
  },
  {
    name: 'Hidan',
    role: 'Member',
    image: 'https://vignette.wikia.nocookie.net/naruto/images/f/f7/Hidan_Anime_Profile.png/revision/latest/scale-to-width-down/350?cb=20170903064138',
  },
  {
    name: 'Karin Uzumaki',
    role: 'Member',
    image: 'https://vignette.wikia.nocookie.net/naruto/images/1/1e/Karin_Uzumaki_Anime_Profile.png/revision/latest/scale-to-width-down/350?cb=20170903064507',
  },
  {
    name: 'Zetsu',
    role: 'Member',
    image: 'https://vignette.wikia.nocookie.net/naruto/images/e/ed/Zetsu_Anime_Profile.png/revision/latest/scale-to-width-down/350?cb=20170903063311',
  },
];

const AboutPage = () => {
  const [current, setCurrent] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(1);
  const [slides, setSlides] = useState([]);
  const timeoutRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  const chunkMembers = (items, size) => {
    const chunks = [];
    for (let i = 0; i < items.length; i += size) {
      chunks.push(items.slice(i, i + size));
    }
    return chunks;
  };

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) setItemsPerSlide(1); // Mobile
      else if (width < 1024) setItemsPerSlide(2); // Tablet
      else setItemsPerSlide(3); // Desktop
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setSlides(chunkMembers(team, itemsPerSlide));
    setCurrent(0); // reset to first
  }, [itemsPerSlide]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      nextSlide();
    }, 4000); // Auto slide every 4 seconds

    return () => resetTimeout();
  }, [current, slides]);

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Header Section */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">About Us</h1>
        <p className="text-lg text-gray-600 mt-4">
          Learn more about the Akatsuki team and their roles in the world of Naruto.
        </p>
      </header>





      {/* Company Overview Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div className="flex justify-center">
          <img
            src="https://wallpapercave.com/wp/wp2552767.jpg"
            alt="Company Overview"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Who We Are</h2>
          <p className="text-gray-700 mb-4">
            We are a leading tech company focused on bringing the best in innovative solutions to the market.
            Our team is passionate about creating top-quality products that make life easier and more enjoyable for our customers.
          </p>
          <p className="text-gray-700">
            Since our inception, we’ve prioritized customer satisfaction and continuous improvement. We’re committed to sustainability, ethical business practices, and using cutting-edge technology to deliver world-class products and services.
          </p>
        </div>
      </section>

      {/* Our Values Section */}
      {/* <section className="mb-16">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-8">Our Core Values</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Innovation</h3>
            <p className="text-gray-600">
              We constantly strive for innovation and improvement in everything we do, ensuring that our customers receive the best technology.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Customer-Centric</h3>
            <p className="text-gray-600">
              Our customers are at the heart of everything we do, and we work hard to provide personalized experiences that exceed expectations.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Sustainability</h3>
            <p className="text-gray-600">
              We are committed to sustainable practices, ensuring our products and services have a positive impact on both society and the environment.
            </p>
          </div>
        </div>
      </section> */}

      {/* Meet the Team Section (Custom Carousel) */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-8">Meet the Akatsuki</h2>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden relative">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                width: `${slides.length * 100}%`,
                transform: `translateX(-${current * (100 / slides.length)}%)`,
              }}
            >
              {slides.map((group, index) => (
                <div
                  key={index}
                  className="flex flex-shrink-0"
                  style={{
                    width: `${100 / slides.length}%`,
                  }}
                >
                  {group.map((member, i) => (
                    <div key={i} className="w-full md:w-1/2 p-6">
                      <div className="text-center bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-32 h-32 mx-auto mb-4 rounded-full shadow-md object-cover"
                        />
                        <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
                        <p className="text-gray-600">{member.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow z-10"
          >
            <FiChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow z-10"
          >
            <FiChevronRight size={24} />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-4 space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-3 w-3 rounded-full ${index === current ? 'bg-blue-600' : 'bg-gray-400'}`}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;




