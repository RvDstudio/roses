import { useShoppingCart } from "@/hooks/use-shopping-cart";
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
      <header className="sticky top-0 z-50 border-b border-[#162174] bg-[#050A30]">
        <div className="container xl:max-w-screen-xl mx-auto px-6">
          <div className="flex items-center justify-between  px-4  flex-grow py-4">
            <div className="mt-2 flex items-center mr-4 text-[#AC842C]">
              <Link href="/">
                <p className="text-2xl md:text-3xl items-center font-semibold ml-2">
                  <span className="">Fast</span>
                  <span className="text-[#AC842C] font-normal py-2">
                    |Flower
                  </span>
                </p>
              </Link>
            </div>

            <div className="relative z-1">
              <IconButton aria-label="User" className="hover:text-[#AC842C]">
                <PermIdentityIcon
                  aria-label="User"
                  className="h-5 w-5 text-gray-700 hover:text-[#AC842C]"
                />
              </IconButton>
              <IconButton
                aria-label="Settings"
                className="hover:text-[#AC842C]"
              >
                <SettingsIcon className="h-5 w-5 text-gray-700 hover:text-[#AC842C]" />
              </IconButton>
              <IconButton
                aria-label="Nav"
                className="md:hidden hover:text-[#AC842C]"
              >
                <MenuIcon className="h-5 w-5 text-gray-700 hover:text-[#AC842C]" />
              </IconButton>
              <IconButton>
                <Link href="/cart">
                  <a className=" space-x-1 text-[#AC842C] hover:text-[#AC842C]">
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
        </div>
      </header>
    </>
  );
};

export default Header;
