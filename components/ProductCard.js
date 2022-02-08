import { formatCurrency } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const ProductCard = (props) => {
  return (
    <div className="flex">
      <div className=" w-full px-2">
        <div className="bg-[#15162d] shadow-xl rounded-lg overflow-hidden md:flex">
          <div className="relative bg-cover bg-bottom h-96 w-[600px] ml-12">
            <Image
              src={props.image}
              alt={props.name}
              layout="fill"
              objectFit="contain"
              className="bg-cover bg-bottom h-96 md:h-auto md:w-full"
            />
          </div>
          <div className="flex items-center justify-center py-12 ml-5">
            <div className="p-4 md:p-5">
              <p className="font-medium text-[#cfaa6c] text-1xl md:text-3xl mb-3">
                {props.name}
              </p>
              <p className="text-gray-600 md:text-lg mb-5">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
              <Link href={`/products/${props.id}`}>
                <a className="bg-[#cfaa6c] px-4 py-1 text-white rounded-md">
                  Bestel nu
                </a>
              </Link>
            </div>
            <div className="p-2 md:p-5 bg-[#15162d]">
              <div className="flex">
                <p className="text-[#cfaa6c] mr-2">Prijs per stuk</p>
                <p className="text-lg font-semibold text-[#cfaa6c]">
                  {formatCurrency(props.price, props.currency)}
                </p>
              </div>
              <div className="mt-3 text-gray-600 text-sm md:text-base">
                *De beste rozen van de wereld vind je bij FastFlower
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
