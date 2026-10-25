import Image from "next/image";
import Link from "next/link";
import userAvatar from "@/assets/user.png";
import Navlink from "./Navlink";

const Navbar = () => {
  return (
    <nav className="w-full max-w-6xl mx-auto px-4 py-2.5 flex items-center justify-between">
      {/* Spacer for center balance */}
      <div className="w-24 hidden md:block"></div>

      {/* Center Links */}
      <ul className="flex items-center gap-2 p-1 bg-white/70 backdrop-blur-md rounded-xl border border-slate-200/70 shadow-xs">
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

      {/* Right User & Login Button */}
      <div className="flex items-center gap-3">
        <Link
          href="/login"
          className="w-9 h-9 rounded-full overflow-hidden bg-slate-100 flex items-center justify-center ring-2 ring-slate-200 hover:ring-rose-400 transition"
        >
          <Image
            src={userAvatar}
            alt="User Avatar"
            width={34}
            height={34}
            className="rounded-full object-cover"
          />
        </Link>
        <Link
          href="/login"
          className="btn min-h-0 h-9 px-5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-medium text-xs tracking-wide shadow-sm hover:shadow-md hover:shadow-slate-900/15 border-none transition-all duration-200 active:scale-95 flex items-center gap-1.5"
        >
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
