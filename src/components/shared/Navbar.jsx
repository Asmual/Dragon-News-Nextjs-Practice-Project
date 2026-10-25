import Image from "next/image";
import Link from "next/link";
import userAvatar from "@/assets/user.png";
import Navlink from "./Navlink";

const Navbar = () => {
  return (
    <nav className="w-full max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
      {/* Left empty spacer to keep center aligned */}
      <div className="w-24 hidden md:block"></div>

      {/* Center Links */}
      <ul className="flex items-center gap-8 text-[#706F6F] font-medium text-base">
        <li>
          <Navlink href="/">Home</Navlink>
        </li>
        <li>
          <Navlink href="/about">About</Navlink>
        </li>
        <li>
          <Navlink href="/career">Career</Navlink>
        </li>
      </ul>

      {/* Right User & Login */}
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center bg-gray-100">
          <Image
            src={userAvatar}
            alt="User Avatar"
            width={38}
            height={38}
            className="rounded-full"
          />
        </div>
        <Link
          href="/login"
          className="btn bg-[#403F3F] hover:bg-neutral-800 text-white border-none rounded-none px-8 py-2 font-semibold text-base min-h-0 h-10"
        >
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
