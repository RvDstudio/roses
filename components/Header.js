import { useShoppingCart } from "@/hooks/use-shopping-cart";
import { SearchIcon } from "@heroicons/react/outline";
import { ShoppingCartIcon } from "@heroicons/react/solid";
import MenuIcon from "@mui/icons-material/Menu";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import SettingsIcon from "@mui/icons-material/Settings";
import { IconButton } from "@mui/material";
import Link from "next/link";
import React from "react";

const Header = () => {
  const { cartCount } = useShoppingCart();
  return (
    <>
      <header className="sticky top-0 z-50 border-b-2 border-gray-100 bg-white">
        <div className="flex items-center justify-between  px-4  flex-grow py-4">
          <div className="mt-2 flex items-center mr-4 text-[#002c4c]">
            <Link href="/">
              <p className="text-2xl md:text-3xl items-center font-semibold ml-2">
                <span className="">Fast</span>
                <span className="text-red-600 font-normal py-2">|Flower</span>
              </p>
            </Link>
          </div>

          <div className="hidden md:flex flex-grow items-center border-1 rounded-md bg-gray-100 py-2 md:shadow-sm">
            <input
              className="pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400 flex-grow"
              type="text"
              placeholder="Start your search"
            />
            <SearchIcon className="hidden md:inline-flex h-8 text-white bg-red-600 rounded-lg p-2 cursor-pointer md:mx-2" />
          </div>

          {/* Bottom Nav */}
          <div className="hidden md:flex items-center space-x-3 p-2 pl-6  text-gray-500 text-md">
            <p className="link cursor-pointer">Home</p>
            <p className="link cursor-pointer">Projects</p>
            <p className="link cursor-pointer">Gallery</p>
            <p className="link cursor-pointer hidden lg:inline-flex">Blog</p>
            <p className="link cursor-pointer hidden lg:inline-flex">About</p>
            <p className="link cursor-pointer hidden lg:inline-flex">Contact</p>
          </div>
          <div className="relative z-1">
            <IconButton aria-label="User" className="hover:text-red-600">
              <PermIdentityIcon
                aria-label="User"
                className="h-5 w-5 text-gray-700 hover:text-red-600"
              />
            </IconButton>
            <IconButton aria-label="Settings" className="hover:text-red-600">
              <SettingsIcon className="h-5 w-5 text-gray-700 hover:text-red-600" />
            </IconButton>
            <IconButton
              aria-label="Nav"
              className="md:hidden hover:text-red-600"
            >
              <MenuIcon className="h-5 w-5 text-gray-700 hover:text-red-600" />
            </IconButton>
            <IconButton>
              <Link href="/cart">
                <a className=" space-x-1 text-red-600 hover:text-red-600">
                  <div className="relative">
                    <p className=" text-lg">
                      <span className="z-20 absolute bottom-0 left-4 text-sm text-green-600 rounded-full p-2">
                        ({cartCount})
                      </span>
                    </p>
                    <ShoppingCartIcon className="w-7 h-7 flex-shrink-0" />
                  </div>
                </a>
              </Link>
            </IconButton>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
