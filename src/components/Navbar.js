import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [navbarBg, setNavbarBg] = useState('bg-black');
  const [textColor, setTextColor] = useState('text-white');
  const [borderColor, setBorderColor] = useState('border-black');
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollPositionToShowWhite = 500;

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > scrollPositionToShowWhite) {
        setNavbarBg('bg-white');
        setTextColor('text-black');
        setBorderColor('border-black');
      } else {
        setNavbarBg('bg-black');
        setTextColor('text-white');
        setBorderColor('border-white');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMenuLeave = () => {
    setHoveredIndex(null);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth',
      });
      setIsOpen(false); // Tutup menu setelah klik
    } else {
      console.error(`Section with ID ${sectionId} not found.`);
    }
  };

  const handleGalleryClick = (event) => {
    event.preventDefault(); // Mencegah perilaku default dari anchor
    scrollToSection('our-moment');
  };

  const handleHomeClick = (event) => {
    event.preventDefault(); // Mencegah perilaku default dari anchor
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Pergi ke bagian atas halaman
    setIsOpen(false); // Tutup menu setelah klik
  };

  const handleAboutClick = (event) => {
    event.preventDefault(); // Mencegah perilaku default dari anchor
    scrollToSection('footer');
  };

  const handleDonClick = (event) => {
    event.preventDefault(); // Mencegah perilaku default dari anchor
    window.location.href = '/monyet'; // Mengarahkan pengguna ke '/monyet'
  };

  return (
    <nav className={`p-4 fixed w-full top-0 z-50 ${navbarBg}`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex-1 flex justify-center items-center">
          <a href="#" className={`font-bold text-xl metal-mania-regular ${textColor}`} onClick={handleHomeClick}>OurAddict</a>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className={`focus:outline-none focus:${textColor}`}>
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${textColor}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${textColor}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
        <div className="hidden md:flex md:items-center md:w-auto">
          <ul className="md:flex space-x-4">
            <li>
              <a
                href="#"
                className={`hover:border-b-2 hover:border-black ${textColor} ${borderColor}`}
                onMouseEnter={() => handleMenuEnter(0)}
                onMouseLeave={handleMenuLeave}
                onClick={handleHomeClick}
                style={{ borderBottom: hoveredIndex === 0 ? '2px solid ' + (navbarBg === 'bg-black' ? 'white' : 'black') : 'none' }}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`hover:border-b-2 hover:border-black ${textColor} ${borderColor}`}
                onMouseEnter={() => handleMenuEnter(1)}
                onMouseLeave={handleMenuLeave}
                onClick={handleGalleryClick}
                style={{ borderBottom: hoveredIndex === 1 ? '2px solid ' + (navbarBg === 'bg-black' ? 'white' : 'black') : 'none' }}
              >
                Gallery
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`hover:border-b-2 hover:border-black ${textColor} ${borderColor}`}
                onMouseEnter={() => handleMenuEnter(2)}
                onMouseLeave={handleMenuLeave}
                onClick={handleAboutClick}
                style={{ borderBottom: hoveredIndex === 2 ? '2px solid ' + (navbarBg === 'bg-black' ? 'white' : 'black') : 'none' }}
              >
                About Us
              </a>
            </li>
            {/* Item "Don't Click" */}
            <li>
              <a
                href="#"
                className={`hover:border-b-2 hover:border-black ${textColor} ${borderColor}`}
                onMouseEnter={() => handleMenuEnter(3)}
                onMouseLeave={handleMenuLeave}
                onClick={handleDonClick}
                style={{ borderBottom: hoveredIndex === 3 ? '2px solid ' + (navbarBg === 'bg-black' ? 'white' : 'black') : 'none' }}
              >
                Dont Click
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={`md:hidden fixed inset-y-0 left-0 w-64 ${navbarBg} z-50 transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="pt-4 flex justify-center items-center">
          <div className={`text-xl font-bold px-4 metal-mania-regular ${textColor}`}>OurAddict</div>
        </div>
        <ul className="mt-4">
          <li><a href="#" className={`block py-2 px-4 hover:bg-gray-700 hover:border-b-2 hover:border-black ${textColor}`} onClick={handleHomeClick}>Home</a></li>
          <li><a href="#" className={`block py-2 px-4 hover:bg-gray-700 hover:border-b-2 hover:border-black ${textColor}`} onClick={handleGalleryClick}>Gallery</a></li>
          <li><a href="#" className={`block py-2 px-4 hover:bg-gray-700 hover:border-b-2 hover:border-black ${textColor}`} onClick={handleAboutClick}>About Us</a></li>
          {/* Item "Don't Click" */}
          <li><a href="#" className={`block py-2 px-4 hover:bg-gray-700 hover:border-b-2 hover:border-black ${textColor}`} onClick={handleDonClick}>Dont Click</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;