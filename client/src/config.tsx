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
}[] = [
  {
    label: "Profile",
    path: "/profile",
    icon: <User2 />,
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
