import { useShoppingCart } from "@/hooks/use-shopping-cart";
import { formatCurrency } from "@/lib/utils";
import { ShoppingCartIcon } from "@heroicons/react/solid";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import SidebarNav from "./SidebarNav";

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  const { totalPrice, cartCount } = useShoppingCart();
  return (
    <>
      <header className="sticky top-0 z-50 border-b border-[#162174] bg-[#15162d]">
        <div className="container xl:max-w-screen-xl mx-auto px-6">
          <div className="flex items-center justify-between  px-4 py-4">
            <div className="mt-2 mr-4 text-[#AC842C] cursor-pointer">
              <Link href="/">
                <a className="">
                  <Image
                    src="/img/logoRose.png"
                    alt="logo"
                    width="229"
                    height="64"
                  />
                </a>
              </Link>
            </div>

            <div className="navbar hidden md:flex">
              <Link href="/">
                <a className=" space-x-1 text-[#cfaa6c] hover:text-[#AC842C] mr-4">
                  Bekijk onze collectie
                </a>
              </Link>
              <Link href="/">
                <a className=" space-x-1 text-[#cfaa6c] hover:text-[#AC842C] mr-4">
                  Valentijnsdag
                </a>
              </Link>
              <Link href="/">
                <a className=" space-x-1 text-[#cfaa6c] hover:text-[#AC842C] mr-4">
                  Vazen
                </a>
              </Link>
              <Link href="/about-us">
                <a className=" space-x-1 text-[#cfaa6c] hover:text-[#AC842C] mr-4">
                  Over ons
                </a>
              </Link>
              <Link href="/contact">
                <a className=" space-x-1 text-[#cfaa6c] hover:text-[#AC842C] mr-4">
                  Contact
                </a>
              </Link>
            </div>

            <div className="flex relative z-1">
              <IconButton>
                <Link href="/cart">
                  <a className=" space-x-1 text-[#cfaa6c] hover:text-[#AC842C]">
                    <div className="flex relative">
                      <p className="md:flex text-lg mr-4">
                        {formatCurrency(totalPrice)}{" "}
                        <span className="z-20 absolute bottom-0 left-11 text-sm text-green-600 rounded-full p-2">
                          ({cartCount})
                        </span>
                      </p>
                      <ShoppingCartIcon className="ml-3 w-7 h-7 flex-shrink-0" />
                    </div>
                  </a>
                </Link>
              </IconButton>
              <IconButton
                onClick={toggleDrawer}
                className="md:hidden hover:text-[#fd0000]"
              >
                <MenuIcon className="h-6 w-6 text-[#cfaa6c] hover:text-[#AC842C]" />
              </IconButton>
            </div>
          </div>
        </div>
      </header>

      <Drawer
        style="#oocbfe"
        open={isOpen}
        size={250}
        onClose={toggleDrawer}
        direction="right"
      >
        <SidebarNav />
      </Drawer>
    </>
  );
};

export default Header;
