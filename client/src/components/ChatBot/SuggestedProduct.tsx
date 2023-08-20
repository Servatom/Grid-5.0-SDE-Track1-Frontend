import { ISUggestedProduct } from "@/types";

const SuggestedProduct: React.FC<ISUggestedProduct> = (product) => {
  const { current_price, link, name, thumbnail } = product;
  return (
    <a href={link}>
      <div className="flex flex-col w-40 h-60 p-2 gap-2 rounded-sm shadow-lg">
        <img
          src={thumbnail}
          alt={name}
          className="w-full h-32 object-contain"
        />
        <div className="flex flex-col gap-2">
          <p className="text-sm font-semibold">{name}</p>
          <p className="text-xs">₹{current_price}</p>
        </div>
      </div>
    </a>
  );
};

export default SuggestedProduct;
