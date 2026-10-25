import logo from '@/assets/logo.png';
import Image from 'next/image';
import Link from 'next/link';
import { format } from "date-fns";

const Header = () => {
  return (
    <header className="text-center pt-8 pb-4 space-y-2">
      <Link href="/" className="inline-block">
        <Image
          src={logo}
          alt="The Dragon News"
          width={450}
          height={80}
          priority
          className="mx-auto h-auto max-w-full"
        />
      </Link>
      <p className="text-[#706F6F] text-base font-normal">
        Journalism Without Fear or Favour
      </p>
      <p className="text-base font-medium text-[#706F6F]">
        <span className="font-semibold text-[#403F3F]">
          {format(new Date(), "EEEE")}
        </span>
        , {format(new Date(), "MMMM dd, yyyy")}
      </p>
    </header>
  );
};

export default Header;
