import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sending");

    let data = {
      name,
      email,
      message,
    };

    fetch("/api/sendmail", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log("Response received");
      if (res.status === 200) {
        console.log("Response succeeded!");
        setSubmitted(true);
        setName("");
        setEmail("");
        setMessage("");
      }
    });
  };

  return (
    <div className="container xl:max-w-screen-xl mx-auto  px-6">
      <section className="text-[#cfaa6c] body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-[#cfaa6c]">
              Stuur ons een berichtje
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Heeft uw problemen met het bestellen van een mooie bos rozen?
            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <form action="" className="">
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      htmlFor="name"
                      className="leading-7 text-sm text-[#cfaa6c]"
                    >
                      Naam
                    </label>
                    <input
                      type="text"
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                      id="name"
                      name="name"
                      className="mt-2 w-full bg-[#15162D]  rounded border border-[#202244] focus:border-[#cfaa6c] focus:bg-white focus:ring-2 focus:ring-[#cfaa6c] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      htmlFor="email"
                      className="leading-7 text-sm text-[#cfaa6c]"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      id="email"
                      name="email"
                      className="mt-2 w-full bg-[#15162D]  rounded border border-[#202244] focus:border-[#cfaa6c] focus:bg-white focus:ring-2 focus:ring-[#cfaa6c] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      htmlFor="message"
                      className="leading-7 text-sm text-[#cfaa6c]"
                    >
                      Bericht
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      onChange={(e) => {
                        setMessage(e.target.value);
                      }}
                      className="mt-2 w-full bg-[#15162D] bg-opacity-50 rounded border border-[#202244] focus:border-[#cfaa6c] focus:bg-white focus:ring-2 focus:ring-[#cfaa6c] h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className="p-2 w-full mt-4">
                  <button
                    type="submit"
                    onClick={(e) => {
                      handleSubmit(e);
                    }}
                    className="flex mx-auto text-white bg-[#cfaa6c] border-0 py-2 px-8 focus:outline-none hover:bg-[#AC842C] rounded text-lg"
                  >
                    Versturen
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
