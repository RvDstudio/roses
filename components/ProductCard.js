import { formatCurrency } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const ProductCard = (props) => {
  return (
    <section className="text-gray-700 bg-[#15162d] border border-[#202144] mt-10 rounded-xl shadow-2xl ">
      <div className="container flex flex-col items-center px-5 py-6 mx-auto md:flex-row lg:px-20">
        <div className="w-full lg:w-1/3 lg:max-w-lg md:w-1/2">
          <Image
            src={props.image}
            alt={props.name}
            width="600px"
            height="600px"
          />
        </div>
        <div className="flex flex-col items-start mb-16 text-left lg:flex-grow md:w-1/2 lg:pl-24 md:pr-16 md:mb-0">
          <h1 className="frosa mb-6 text-2xl font-normal tracking-tighter text-[#cfaa6c] md:text-5xl title-font">
            {props.name}
          </h1>
          <p className="mb-8 text-base leading-relaxed text-left text-gray-500 ">
            {props.desc}
          </p>
          <div className="flex flex-col justify-center lg:flex-row">
            <button className="flex items-center px-6 py-2 mt-auto font-semibold text-white transition duration-500 ease-in-out transform bg-[#cfaa6c] rounded-lg hover:bg-[#ad8f5a] focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">
              <Link href={`/products/${props.id}`}>
                <a>Nu Bestellen</a>
              </Link>
            </button>
            <p className="flex items-center mt-2 text-sm text-left text-blueGray-600 md:ml-6 md:mt-0">
              <p className="text-[#cfaa6c] mr-2">Prijs per stuk</p>
              <p className="text-lg font-semibold text-[#cfaa6c]">
                {formatCurrency(props.price, props.currency)}
              </p>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCard;
