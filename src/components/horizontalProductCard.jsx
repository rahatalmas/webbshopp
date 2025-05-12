import { Link } from "react-router-dom";
import { useShop } from "../providers/shopProvider";

const HorizontalProductCard = ({ product, onAddToCart }) => {
  const { selectedShop } = useShop();

  return (
    <div className="flex bg-white rounded-lg shadow-md overflow-hidden max-w-2xl w-full h-40">
      {/* Image Section */}
      <div className="w-1/3 h-full">
        <Link to={`/${selectedShop.shopName}/product-details/1`}>
          <img
            src={product.image}
            alt={product.name}
            className="object-cover w-full h-full"
          />
        </Link>
      </div>

      {/* Content Section */}
      <div className="w-2/3 p-4 flex flex-col justify-between">
        <div>
          <Link to={`/${selectedShop.shopName}/product-details/1`}>
            <h2 className="text-lg font-semibold text-gray-800 truncate">{product.name}</h2>
            <p className="text-sm text-gray-600 mt-1 line-clamp-2">{product.description}</p>
          </Link>
        </div>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-[var(--primary)] font-bold text-lg">
            ${product.price}
          </span>
          <button
            onClick={() => onAddToCart(product)}
            className="bg-[var(--primary)] hover:bg-[var(--secondary)] text-white text-sm px-4 py-2 rounded"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default HorizontalProductCard;
