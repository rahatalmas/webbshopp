import { FiHome, FiSearch, FiUser, FiShoppingCart } from 'react-icons/fi';

const BottomNav = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#7C9070] text-white flex justify-around py-2 md:hidden">
      <button>
        <FiHome size={24} />
      </button>
      <button>
        <FiSearch size={24} />
      </button>
      <button>
        <FiShoppingCart size={24} />
      </button>
      <button>
        <FiUser size={24} />
      </button>
    </div>
  );
};

//FEE8B0
//F97B22
//9CA777
//7C9070

export default BottomNav;
