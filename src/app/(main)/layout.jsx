import BreakingNews from '@/components/shared/BreakingNews';
import Header from '@/components/shared/Header';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div>
        <Header />
        <BreakingNews />
        <Navbar />
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
