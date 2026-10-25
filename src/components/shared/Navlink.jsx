'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navlink = ({ href, children }) => {
  const pathName = usePathname();
  const isActive = href === '/' ? pathName === '/' : pathName.startsWith(href);

  return (
    <Link
      href={href}
      className={`px-3 py-1.5 rounded-lg text-sm transition-all duration-200 ${
        isActive
          ? "text-rose-600 font-semibold bg-rose-50 shadow-xs"
          : "text-slate-600 font-medium hover:text-slate-900 hover:bg-slate-100"
      }`}
    >
      {children}
    </Link>
  );
};

export default Navlink;
