import { MdKeyboardArrowDown } from "react-icons/md";

const Navbar = () => {
  return (
    <header className="flex items-center justify-center gap-5 p-6 border-b bg-[linear-gradient(to_right,#ffffff,#FFF7EC)] border-[#E8E8E8] shadow sticky top-0 z-10">
      <p className="text-[#000000] text-sm font-medium font-['Inter']">About</p>
      <p className="text-[#000000] text-sm font-medium font-['Inter']">
        Services <MdKeyboardArrowDown className="inline" />
      </p>
    </header>
  );
};

export default Navbar;
