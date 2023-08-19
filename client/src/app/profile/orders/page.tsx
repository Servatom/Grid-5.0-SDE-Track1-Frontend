import Order from "@/components/Orders/Order";
import { ORDERS } from "@/constants";

const Orders = () => {
  return (
    <div className="flex flex-col px-16 py-12 w-full h-full">
      <h1 className="text-3xl font-semibold">My Orders</h1>
      <div className="flex flex-col w-full gap-6">
        {ORDERS.map((order, index) => (
          <Order key={index} order={order} />
        ))}
      </div>
    </div>
  );
};

export default Orders;
