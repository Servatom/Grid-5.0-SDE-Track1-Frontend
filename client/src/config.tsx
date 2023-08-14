import { Heart, LucideIcon, ShoppingCart, User2 } from "lucide-react";
import { ReactNode } from "react";

export const navItems: {
  label: string;
  path: string;
}[] = [
  {
    label: "Men",
    path: "/men",
  },
  {
    label: "Women",
    path: "/women",
  },
  {
    label: "Kids",
    path: "/kids",
  },
  {
    label: "Accessories",
    path: "/accessories",
  },
  {
    label: "Beauty",
    path: "/beauty",
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
