import { useShoppingCart } from "@/hooks/use-shopping-cart";
import { formatCurrency } from "@/lib/utils";
import { ShoppingCartIcon } from "@heroicons/react/solid";
import Link from "next/link";

const Header = () => {
  const { totalPrice, cartCount } = useShoppingCart();

  return (
    <header className="sticky top-0 bg-white z-10 shadow">
      <div className="container xl:max-w-screen-xl mx-auto p-6 flex justify-between">
        <Link href="/">
          <a className="text-3xl">
            Qmatic<span className="text-green-600">|Store</span>
          </a>
        </Link>
        <Link href="/cart">
          <a className="flex items-center space-x-1 text-green-600 hover:text-green-700">
            <div className="relative">
              <ShoppingCartIcon className="w-7 h-7 flex-shrink-0" />
            </div>
            <p className="text-lg">
              {formatCurrency(totalPrice)}{" "}
              <span className="text-sm text-green-600">({cartCount})</span>
            </p>
          </a>
        </Link>
      </div>
    </header>
  );
};

export default Header;
