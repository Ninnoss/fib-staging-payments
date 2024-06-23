import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';
import Logo from '../Logo';
import MobileNavbar from './MobileNavbar';
import { navLinks } from '../../data/navLinks';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <section className="hidden md:flex justify-between items-center p-4 px-16 bg-primaryGreen">
        <Link
          to="/"
          className="flex items-center gap-x-4">
          <Logo />
          <h1 className="text-3xl text-white font-semibold uppercase hidden lg:block">Staging Area</h1>
        </Link>
        <div></div>
        <ul className="flex justify-center space-x-4">
          {navLinks.map((link, index) => (
            <li key={index}>
              {link.external ? (
                <a
                  href={link.to}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="uppercase text-white hover:font-semibold">
                  {link.text}
                </a>
              ) : (
                <Link
                  to={link.to}
                  className="uppercase text-white hover:font-semibold">
                  {link.text}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </section>
      <section className="md:hidden flex justify-between items-center p-4 px-6 bg-primaryGreen">
        <Link to="/">
          <Logo />
        </Link>
        <button onClick={toggleMobileMenu}>
          <div className="text-white">{isMobileMenuOpen ? <AiOutlineClose size={24} /> : <div>☰</div>}</div>
        </button>
      </section>
      {isMobileMenuOpen && <MobileNavbar toggleMobileMenu={toggleMobileMenu} />}
    </>
  );
};

export default Navbar;
