import Image from 'next/image';

const Footer = () => {
  return (
    <footer id="footer" className="bg-white text-gray-800 py-6">
      <div className="container mx-auto px-4 flex flex-col items-center text-center">
        <h2 className="text-2xl font-bold mb-2">OurAddict</h2>
        <p className="mb-2">Find us on</p>
        <div className="flex items-center mb-2">
          <a href="https://www.instagram.com/our_addict" target="_blank" rel="noopener noreferrer">
            <Image 
              src="/images/instagram.png" 
              alt="Instagram Logo" 
              className="h-8 w-8 mr-2 hover:opacity-75 transition-opacity duration-300" 
              width={32}
              height={32}
            />
          </a>
        </div>
        <p className="text-sm md:text-base">&copy; 2024 - OurAddict</p>
      </div>
    </footer>
  );
};

export default Footer;
