import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';
import Logo from '../Logo';
import MobileNavbar from './MobileNavbar';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <section className="hidden md:flex justify-between items-center p-4 px-16 bg-primaryGreen">
        <Link to="/">
          <Logo />
        </Link>
        <div>
          <h1 className="text-2xl text-white font-semibold">FIB Staging Area</h1>
        </div>
        <ul className="flex justify-center space-x-4">
          <li>
            <Link
              to="/"
              className="uppercase text-white hover:font-semibold">
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/payments"
              className="uppercase text-white hover:font-semibold">
              Payments
            </Link>
          </li>
          <li>
            <Link
              to="/developers"
              className="uppercase text-white hover:font-semibold">
              Developers
            </Link>
          </li>
          <li>
            <Link
              to="/?getApp=true"
              className="uppercase text-white hover:font-semibold">
              GET Staging APPs
            </Link>
          </li>
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
