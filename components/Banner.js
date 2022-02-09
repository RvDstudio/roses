function Banner() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-1 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-4 items-center text-center">
          <h1 className="frosa xs:text-3xl text-5xl mb-4 font-medium text-[#cfaa6c]">
            Welkom bij Fast Flower
          </h1>
          <p className="mb-4 md:mb-8 text-[20px] text-gray-500 leading-relaxed">
            Welkom bij Fast Flower Bloemen en planten direct van de kweker
            geleverd, vers in huis en keer op keer topkwaliteit. Samen met onze
            kwekers selecteren we de beste seizoensbloemen. We besparen onze
            bloemen de omweg via de veiling en groothandel, zodat jij lang kan
            genieten van verse bloemen!
          </p>
        </div>
        <div className="lg:max-w-lg w-full md:w-1/2">
          <img
            className="object-cover object-center rounded-xl"
            alt="hero"
            src="https://images.unsplash.com/photo-1509145539237-f90cafb810ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          />
        </div>
      </div>
    </section>
  );
}

export default Banner;
