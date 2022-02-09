import Banner from "@/components/Banner";
import { ProductCard } from "@/components/index";
import Testimonials from "@/components/Testimonals";
import products from "products";
import { useState } from "react";

export default function Home() {
  const [disabled, setDisabled] = useState(false);

  return (
    <>
      <div className="xl:max-w-screen-xl mx-auto py-12 px-6">
        <Banner />
      </div>

      <div className="bg-[#1A1B36]">
        <div className="container xl:max-w-screen-xl mx-auto  px-6">
          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-8">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                disabled={disabled}
                onClickAdd={() => setDisabled(true)}
                onAddEnded={() => setDisabled(false)}
                {...product}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="bg-[#1A1B36]">
        <div className="container xl:max-w-screen-xl mx-auto py-12 px-6">
          <Testimonials />
        </div>
      </div>
    </>
  );
}
