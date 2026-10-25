'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navlink = ({ href, children }) => {
  const pathName = usePathname();
  const isActive = href === '/' ? pathName === '/' : pathName.startsWith(href);

  return (
    <Link
      href={href}
      className={`transition pb-1 ${
        isActive
          ? "text-[#403F3F] font-bold border-b-2 border-[#D72050]"
          : "text-[#706F6F] hover:text-[#403F3F]"
      }`}
    >
      {children}
    </Link>
  );
};

export default Navlink;
