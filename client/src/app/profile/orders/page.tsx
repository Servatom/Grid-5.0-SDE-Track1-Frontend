"use client";

import { axiosDiagon } from "@/axios";
import Order from "@/components/Orders/Order";
import { ORDERS } from "@/constants";
import AuthContext from "@/store/auth-context";
import { useContext, useEffect, useState } from "react";

const Orders = () => {
  const authCtx = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  const getOrders = async () => {
    try {
      const orders = await axiosDiagon
        .get("/order/all", {
          headers: {
            Authorization: `Bearer ${authCtx.token}`,
          },
        })
        .then((res) => res.data);
      setOrders(orders);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    if (!authCtx.isLoggedIn) {
      window.location.href = "/auth/login";
    }
    getOrders();
  }, [authCtx]);
  return (
    <div className="flex flex-col px-16 py-12 w-full h-full">
      <h1 className="text-3xl font-semibold">My Orders</h1>
      <div className="flex flex-col w-full gap-6">
        {orders.map((order, index) => (
          <Order key={index} order={order} />
        ))}
      </div>
    </div>
  );
};

export default Orders;
