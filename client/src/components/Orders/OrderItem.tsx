import { IProduct } from "@/types";
import Image from "next/image";

const OrderItem: React.FC<{
  product: IProduct;
}> = ({ product }) => {
  return (
    <div className="flex flex-row items-start gap-4 p-4 pr-12 bg-white shadow-xl">
      <img
        loading="lazy"
        src={product.image}
        alt={product.name}
        className="h-40"
      />
      <div className="flex flex-col ml-4 gap-2 h-36 grow w-full">
        <h2 className="font-semibold">{product.name}</h2>
        <div className="flex flex-row gap-6 text-sm">
          <h3 className="font-medium">₹{product.price}</h3>
          <h3 className="font-medium">Qty: 1</h3>
          <h3 className="font-medium">Size: {product.size}</h3>
        </div>
        <p className="text-xs opacity-50">{product.description}</p>
        <div className="flex flex-row justify-between items-center mt-auto">
          <span className="text-xs opacity-60 ">
            Average rating: {product.avgRating}/5
          </span>
          <button className="px-4 py-2 bg-pink-500 text-white font-medium text-sm rounded-sm">
            BUY AGAIN
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
