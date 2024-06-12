import Navbar from '../components/Navbar';
import Carousel from '../components/Carousel';
import BestMoment from '../components/BestMoment';
import OurMoment from '../components/OurMoment'; // Import komponen OurMoment
import BestVideo from '@/components/BestVideo';
import Footer from '@/components/Footer';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Carousel />
      <BestMoment />
      <OurMoment />
      <BestVideo />
      <Footer /> {/* Tambahkan komponen OurMoment */}
      {/* Tambahkan konten lainnya di sini */}
    </div>
  );
};

export default Home;
