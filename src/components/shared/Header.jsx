import logo from '@/assets/logo.png';
import Image from 'next/image';
import Link from 'next/link';
import { format } from "date-fns";

const Header = () => {
  return (
    <header className="text-center pt-5 pb-2 space-y-1.5">
      <Link href="/" className="inline-block transition-transform hover:scale-[1.01]">
        <Image
          src={logo}
          alt="The Dragon News"
          width={360}
          height={65}
          priority
          className="mx-auto h-auto max-w-full drop-shadow-sm"
        />
      </Link>
      <p className="text-xs sm:text-sm text-slate-500 font-normal tracking-wide">
        Journalism Without Fear or Favour
      </p>
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-xs text-slate-600 font-medium border border-slate-200/60 shadow-xs">
        <span className="font-semibold text-slate-800">
          {format(new Date(), "EEEE")}
        </span>
        <span>•</span>
        <span>{format(new Date(), "MMMM dd, yyyy")}</span>
      </div>
    </header>
  );
};

export default Header;
