import { Rating } from "@/components/index";
import { useShoppingCart } from "@/hooks/use-shopping-cart";
import { formatCurrency } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { toast } from "react-hot-toast";

const ProductCard = (props) => {
  const { cartCount, addItem } = useShoppingCart();
  const [adding, setAdding] = useState(false);

  const toastId = useRef();
  const firstRun = useRef(true);

  const handleOnAddToCart = (event) => {
    event.preventDefault();

    setAdding(true);
    toastId.current = toast.loading("Adding 1 item...");

    if (typeof props.onClickAdd === "function") {
      props.onClickAdd();
    }

    addItem(props);
  };

  useEffect(() => {
    if (firstRun.current) {
      firstRun.current = false;
      return;
    }

    if (adding) {
      setAdding(false);
      toast.success(`${props.name} added`, {
        id: toastId.current,
      });
    }

    if (typeof props.onAddEnded === "function") {
      props.onAddEnded();
    }
  }, [cartCount]);

  return (
    <Link href={`/products/${props.id}`}>
      <a className="border border-[#162174] rounded-xl p-6 group bg-[#080E3B]">
        {/* Product's image */}
        <div className="relative w-full h-64 group-hover:transform group-hover:scale-125 group-hover:ease-in-out group-hover:duration-500">
          <Image
            src={props.image}
            alt={props.name}
            layout="fill"
            objectFit="contain"
          />
        </div>

        {/* Name + Rating */}
        <div className="mt-4 sm:mt-8 text-[#AC842C]">
          <p className="font-semibold text-lg capitalize">{props.name}</p>
          <Rating rate={props?.rating?.rate} count={props?.rating?.count} />
        </div>

        {/* Price + CTA */}
        <div className="mt-4 flex items-center justify-between space-x-2">
          <div>
            <p className="text-[#AC842C]">Prijs</p>
            <p className="text-lg font-semibold text-[#AC842C]">
              {formatCurrency(props.price, props.currency)}
            </p>
          </div>

          <button
            type="button"
            onClick={handleOnAddToCart}
            disabled={adding || props.disabled}
            className={`border border-[#AC842C] text-[#AC842C] rounded-lg py-1 px-4 group-hover:bg-[#AC842C] hover:bg-[#AC842C] group-hover:border-[#AC842C] group-hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${
              adding
                ? "disabled:bg-rose-500 disabled:border-rose-500 disabled:text-[#AC842C]"
                : "disabled:hover:bg-transparent disabled:hover:text-current disabled:hover:border-gray-200"
            }`}
          >
            {adding ? "Adding..." : "In winkelwagen"}
          </button>
        </div>
      </a>
    </Link>
  );
};

export default ProductCard;
