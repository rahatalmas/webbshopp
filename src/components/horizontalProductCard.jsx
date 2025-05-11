import { Link } from "react-router-dom";
import { useShop } from "../providers/shopProvider";

const HorizontalProductCard = ({ product, onAddToCart }) => {

   const {selectedShop} = useShop();

    return (
       <Link to={`/${selectedShop.shopName}/product-details/1`}>
              <div className="flex bg-white rounded-lg shadow-md overflow-hidden max-w-2xl w-full">
        {/* Image Section */}
        <div className="w-1/3">
          <img
            src={product.image}
            alt={product.name}
            className="object-cover w-full h-full"
          />
        </div>
  
        {/* Content Section */}
        <div className="w-2/3 p-4 flex flex-col justify-between">
          <div>
            <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
            <p className="text-sm text-gray-600 mt-1">{product.description}</p>
          </div>
          <div className="mt-4 flex justify-between items-center">
            <span className="text-blue-600 font-bold text-lg">${product.price}</span>
            <button
              onClick={() => onAddToCart(product)}
              className="bg-[#F97B22] hover:bg-green-500 text-white text-sm px-4 py-2 rounded"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
       </Link>
    );
  };
  
  export default HorizontalProductCard;
  