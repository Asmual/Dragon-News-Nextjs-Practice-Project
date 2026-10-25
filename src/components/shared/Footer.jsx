import Image from 'next/image';
import Link from 'next/link';
import logo from '@/assets/logo.png';

const Footer = () => {
  return (
    <footer className="mt-16 border-t border-slate-200/80 bg-white/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 py-10 space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-slate-100">
          <div className="text-center md:text-left space-y-2">
            <Link href="/" className="inline-block">
              <Image
                src={logo}
                alt="Dragon News"
                width={260}
                height={50}
                className="h-auto max-w-full drop-shadow-2xs"
              />
            </Link>
            <p className="text-xs text-slate-500 max-w-sm">
              Delivering accurate, independent, and timely news across the globe. Journalism Without Fear or Favour.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-semibold text-slate-600">
            <Link href="/" className="hover:text-rose-600 transition">Home</Link>
            <Link href="/about" className="hover:text-rose-600 transition">About</Link>
            <Link href="/career" className="hover:text-rose-600 transition">Career</Link>
            <Link href="/login" className="hover:text-rose-600 transition">Login</Link>
            <Link href="/register" className="hover:text-rose-600 transition">Register</Link>
          </div>
        </div>

        {/* Developer Credit Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Dragon News. All rights reserved.</p>

          <div className="flex items-center gap-2 bg-slate-50 px-3.5 py-1.5 rounded-full border border-slate-200/70 shadow-2xs">
            <span className="text-slate-600 font-medium">
              Designed & Developed by{' '}
              <strong className="text-slate-900 font-bold">Asmual Obaidul Hoque</strong>
            </span>
            <span className="text-slate-300">•</span>
            <a
              href="https://asmual-obaidul-hoque.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-semibold text-rose-600 hover:text-rose-700 hover:underline"
            >
              Visit my website
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
