"use client";

import { navItems, navOptions } from "@/config";
import Link from "next/link";
import logo from "@/assets/logo.png";
import Image from "next/image";
import { User, User2 } from "lucide-react";
import { useContext } from "react";
import AuthContext from "@/store/auth-context";

const NavBar: React.FC = () => {
  const authCtx = useContext(AuthContext);

  return (
    <div className="px-12 py-6 flex flex-row items-center justify-between text-gray-600 shadow-md bg-white">
      <div className="flex flex-row items-center gap-8">
        <Link href={"/"}>
          <Image
            src={logo}
            alt="logo"
            width={40}
            height={40}
            className="mr-2"
          />
        </Link>
        {navItems.map((item, index) => (
          <Link key={item.label} href={item.path}>
            <span className="text-sm font-semibold">
              {item.label.toUpperCase()}
            </span>
          </Link>
        ))}
      </div>
      <div className="flex flex-row items-center gap-8">
        {navOptions.map((item, index) => (
          <div key={item.label} className="relative group p-2">
            <Link href={item.path}>
              <div className="flex flex-col justify-center items-center gap-1">
                {item.icon}
                <span className="text-xs font-semibold">
                  {item.label.toUpperCase()}
                </span>
              </div>
            </Link>
            {item.children && (
              <div className="flex invisible flex-col w-max h-max absolute top-[calc(100%)] right-0 group-hover:visible hover:visible bg-white border border-pink-300 rounded-sm drop-shadow-2xl shadow-xl z-50">
                {item.children.map((child, index) => (
                  <Link
                    href={child.path}
                    key={child.label}
                    className="px-4 py-2 hover:bg-slate-50 cursor-pointer"
                  >
                    <span className="text-xs font-semibold">
                      {child.label.toUpperCase()}
                    </span>
                  </Link>
                ))}
                {authCtx.isLoggedIn ? (
                  <Link
                    href="/auth/logout"
                    className="px-4 py-1 m-2 bg-pink-500 text-center text-white cursor-pointer"
                  >
                    <span className="text-xs font-semibold w-full">LOGOUT</span>
                  </Link>
                ) : (
                  <Link
                    href="/auth/login"
                    className="px-4 py-1 m-2 bg-pink-500 text-center text-white cursor-pointer"
                  >
                    <span className="text-xs font-semibold w-full">LOGIN</span>
                  </Link>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavBar;
