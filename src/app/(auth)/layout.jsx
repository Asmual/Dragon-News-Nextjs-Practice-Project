import Navbar from '@/components/shared/Navbar';
import { montserrat } from '../layout';

export const metadata = {
  title: "Authentication - Dragon News",
};

const AuthLayout = ({ children }) => {
  return (
    <div className={`min-h-screen md:h-screen md:max-h-screen md:overflow-hidden bg-slate-50/70 ${montserrat.className} flex flex-col relative`}>
      {/* Background ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-rose-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500/5 rounded-full blur-2xl pointer-events-none"></div>

      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200/60 flex-shrink-0 z-20">
        <Navbar />
      </header>

      <main className="flex-1 flex items-center justify-center p-3 sm:p-4 z-10 overflow-y-auto md:overflow-hidden">
        {children}
      </main>
    </div>
  );
};

export default AuthLayout;
