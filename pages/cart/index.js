import { useShoppingCart } from "@/hooks/use-shopping-cart";
import getStripe from "@/lib/get-stripe";
import { formatCurrency } from "@/lib/utils";
import {
  MinusSmIcon,
  PlusSmIcon,
  XCircleIcon,
  XIcon,
} from "@heroicons/react/outline";
import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Cart = () => {
  const { cartDetails, totalPrice, cartCount, addItem, removeItem, clearCart } =
    useShoppingCart();
  const [redirecting, setRedirecting] = useState(false);

  const redirectToCheckout = async () => {
    // Create Stripe checkout
    const {
      data: { id },
    } = await axios.post("/api/checkout_sessions", {
      items: Object.entries(cartDetails).map(([_, { id, quantity }]) => ({
        price: id,
        quantity,
      })),
    });

    // Redirect to checkout
    const stripe = await getStripe();
    await stripe.redirectToCheckout({ sessionId: id });
  };

  return (
    <>
      <Head>
        <title>My Winkelwagen</title>
      </Head>
      <div className="container xl:max-w-screen-xl mx-auto py-12 px-6">
        {cartCount > 0 ? (
          <>
            <h2 className="text-4xl text-[#AC842C] font-semibold">
              Mijn Winkelwagen
            </h2>
            <p className="mt-1 text-xl text-[#AC842C]">
              {cartCount} items{" "}
              <button
                onClick={clearCart}
                className="opacity-50 hover:opacity-100 text-base capitalize"
              >
                (verwijder alles)
              </button>
            </p>
          </>
        ) : (
          <>
            <h2 className="text-4xl font-semibold text-[#AC842C]">
              Je winkel wagen is nog leeg.
            </h2>
            <p className="mt-1 text-xl text-[#AC842C]">
              Neem een kijkje in de winkel{" "}
              <Link href="/">
                <a className="text-[#AC842C] underline">naar de winkel!</a>
              </Link>
            </p>
          </>
        )}

        {cartCount > 0 ? (
          <div className="mt-12 container mx-auto text-[#AC842C]">
            {Object.entries(cartDetails).map(([key, product]) => (
              <div
                key={key}
                className="flex justify-between space-x-4 shadow-lg border-opacity-50 border border-[#162174] rounded-lg p-4 bg-[#050A30] hover:bg-[#c79833] hover:cursor-pointer mb-6"
              >
                {/* Image + Name */}
                <Link href={`/products/${product.id}`}>
                  <a className="flex items-center space-x-4 group text-[#AC842C]">
                    <div className="relative w-20 h-20 group-hover:scale-110 transition-transform">
                      <Image
                        src={product.image}
                        alt={product.name}
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                    <p className="font-semibold text-xl group-hover:underline">
                      {product.name}
                    </p>
                  </a>
                </Link>

                {/* Price + Actions */}
                <div className="flex items-center">
                  {/* Quantity */}
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => removeItem(product)}
                      disabled={product?.quantity <= 1}
                      className="disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-current hover:bg-rose-100 hover:text-rose-500 rounded-md p-1"
                    >
                      <MinusSmIcon className="w-6 h-6 flex-shrink-0" />
                    </button>
                    <p className="font-semibold text-xl">{product.quantity}</p>
                    <button
                      onClick={() => addItem(product)}
                      className="hover:bg-[#AC842C] hover:text-green-500 rounded-md p-1"
                    >
                      <PlusSmIcon className="w-6 h-6 flex-shrink-0 " />
                    </button>
                  </div>

                  {/* Price */}
                  <p className="font-semibold text-xl ml-16">
                    <XIcon className="w-4 h-4 text-gray-500 inline-block" />
                    {formatCurrency(product.price)}
                  </p>

                  {/* Remove item */}
                  <button
                    onClick={() => removeItem(product, product.quantity)}
                    className="ml-4 hover:text-rose-500"
                  >
                    <XCircleIcon className="w-6 h-6 flex-shrink-0 opacity-50 hover:opacity-100 transition-opacity" />
                  </button>
                </div>
              </div>
            ))}

            <div className="flex flex-col items-end border-t py-4 mt-8">
              <p className="text-xl">
                Totaal:{" "}
                <span className="font-semibold">
                  {formatCurrency(totalPrice)}
                </span>
              </p>

              <button
                onClick={redirectToCheckout}
                disabled={redirecting}
                className="border rounded py-2 px-6 bg-[#AC842C] hover:bg-[#c49633] border-[#AC842C] hover:border-[#c29533] focus:ring-4 focus:ring-opacity-50 focus:ring-rose-500 text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-rose-500 max-w-max mt-4"
              >
                {redirecting ? "Redirecting..." : "Betalen"}
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Cart;
