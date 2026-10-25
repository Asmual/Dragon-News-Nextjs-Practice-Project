import Navbar from '@/components/shared/Navbar';
import { montserrat } from '../layout';

export const metadata = {
  title: "Authentication - Dragon News",
};

const AuthLayout = ({ children }) => {
  return (
    <div className={`min-h-screen bg-[#F3F3F3] ${montserrat.className} flex flex-col`}>
      <header className="bg-white border-b border-gray-100">
        <Navbar />
      </header>
      <main className="flex-1 flex items-center justify-center p-4">
        {children}
      </main>
    </div>
  );
};

export default AuthLayout;
