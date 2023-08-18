import { Heart, LucideIcon, ShoppingCart, User2 } from "lucide-react";
import { ReactNode } from "react";

export const navItems: {
  label: string;
  path: string;
}[] = [
  {
    label: "Men",
    path: "/shop/men",
  },
  {
    label: "Women",
    path: "/shop/women",
  },
  {
    label: "Kids",
    path: "/shop/kids",
  },
  {
    label: "Accessories",
    path: "/shop/accessories",
  },
  {
    label: "Beauty",
    path: "/shop/beauty",
  },
];

export const navOptions: {
  label: string;
  path: string;
  icon: ReactNode;
  children?: {
    label: string;
    path: string;
  }[];
}[] = [
  {
    label: "Profile",
    path: "/profile",
    icon: <User2 />,
    children: [
      {
        label: "My Orders",
        path: "/profile/orders",
      },
      {
        label: "My Account",
        path: "/profile/account",
      },
      {
        label: "My Addresses",
        path: "/profile/addresses",
      },
      {
        label: "My Cards",
        path: "/profile/cards",
      },
    ],
  },
  {
    label: "Wishlist",
    path: "/wishlist",
    icon: <Heart />,
  },
  {
    label: "Cart",
    path: "/cart",
    icon: <ShoppingCart />,
  },
];
