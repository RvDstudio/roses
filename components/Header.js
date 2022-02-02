import { useShoppingCart } from "@/hooks/use-shopping-cart";
import { ShoppingCartIcon } from "@heroicons/react/solid";
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
                <img src="/img/logoRose.png" alt="" />
              </Link>
            </div>

            <div className="relative z-1">
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
