import Image from "next/image";

function Banner() {
  return (
    <div className="container mx-auto px-4 mb-10">
      <div className="relative h-[455px]">
        <Image
          alt="banner"
          className="rounded-3xl"
          src="/banner.png"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
}

export default Banner;
