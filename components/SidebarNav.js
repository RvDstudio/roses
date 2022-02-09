import Image from "next/image";

function SidebarNav() {
  return (
    <div className=" bg-[#15162d] text-gray-500  h-screen">
      <nav className="p-2 flex flex-col">
        <a
          href="#"
          className="flex items-center py-2 px-4 rounded transition duration-200 hover:bg-[#AC842C] hover:text-white border-b border-[#111a5c] mb-4"
        >
          <p className="ml-3 font-medium text-[#cfaa6c]">
            Bekijk onze collectie
          </p>
        </a>

        <a
          href="#"
          className="flex items-center py-2 px-4 rounded transition duration-200 hover:bg-[#AC842C] hover:text-white border-b border-[#162174] mb-4"
        >
          <p className="ml-3 font-medium text-[#cfaa6c]">Valentijnsdag</p>
        </a>

        <a
          href="#"
          className="flex items-center py-2 px-4 rounded transition duration-200 hover:bg-[#AC842C] hover:text-white border-b border-[#162174] mb-4"
        >
          <p className="ml-3 font-medium text-[#cfaa6c]">Vazen</p>
        </a>

        <a
          href="/AboutUs"
          className="flex items-center py-2 px-4 rounded transition duration-200 hover:bg-[#AC842C] hover:text-white border-b border-[#162174] mb-4"
        >
          <p className="ml-3 font-medium text-[#cfaa6c]">Over ons</p>
        </a>

        <a
          href="/contact"
          className="flex items-center py-2 px-4 rounded transition duration-200 hover:bg-[#AC842C] hover:text-white border-b border-[#162174] mb-4"
        >
          <p className="ml-3 font-medium text-[#cfaa6c]">Contact</p>
        </a>
      </nav>
    </div>
  );
}

export default SidebarNav;
