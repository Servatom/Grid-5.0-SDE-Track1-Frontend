import { IOrder } from "@/types";
import Image from "next/image";
import OrderItem from "./OrderItem";

const Order: React.FC<{
  order: IOrder;
}> = ({ order }) => {
  return (
    <div className="flex flex-col w-full p-4 gap-4">
      <h2 className="font-medium text-xl pt-3">Order ID {order.id}</h2>
      {order.products.map((product) => (
        <OrderItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Order;
