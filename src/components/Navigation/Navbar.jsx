import { useState } from 'react';
import { Link } from 'react-router-dom';
import { navLinks } from '../../data/navLinks';
import Logo from '../Logo';
import UserProfileDropdown from '../UserProfileDropdown';
import MobileNavbar from './MobileNavbar';

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
        <UserProfileDropdown/>
      </section>

      {/* Mobile navbar */}
      <section className="md:hidden flex justify-between items-center p-4 px-6 bg-primaryGreen">
        <Link to="/">
          <img
            src="/fib-white.png"
            width={200}
          />
        </Link>
        <button
          aria-label="Toggle Menu"
          className={`w-10 h-10 relative bg-transparent border-none outline-none flex flex-col justify-around p-2 z-50`}
          onClick={toggleMobileMenu}>
          {/* Add 3 spans to form a Menu, then make the middle one disppear when clicked and change location of the first and last to form X */}
          {Array.from({ length: 3 }, (_, index) => (
            <span
              key={index}
              className={
                `block bg-white h-0.5 w-full transition-transform duration-300 ease-in-out origin-center ` +
                `${
                  isMobileMenuOpen
                    ? index === 0
                      ? 'transform rotate-45 translate-y-2'
                      : ''
                    : 'transform rotate-0'
                } ` +
                `${isMobileMenuOpen && index === 1 ? 'opacity-0' : ''} ` +
                `${
                  isMobileMenuOpen
                    ? index === 2
                      ? 'transform -rotate-45 -translate-y-2'
                      : ''
                    : 'transform rotate-0'
                }`
              }></span>
          ))}
        </button>
      </section>
      {isMobileMenuOpen && (
        <MobileNavbar
          toggleMobileMenu={toggleMobileMenu}
          isMobileMenuOpen={isMobileMenuOpen}
        />
      )}
    </>
  );
};

export default Navbar;
