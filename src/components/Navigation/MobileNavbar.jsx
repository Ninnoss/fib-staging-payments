/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { navLinks } from '../../data/navLinks';

const MobileNavbar = ({ toggleMobileMenu, isMobileMenuOpen }) => {
  const classes = !isMobileMenuOpen ? 'slide-out' : 'slide-in';
  return (
    <section
      className={`fixed inset-0 flex flex-col items-center justify-start bg-primaryGreen text-white px-4 py-28 transform-gpu transition-transform duration-300 ease-in-out z-30 ${classes}`}>
      <ul className="mt-8 space-y-8 text-center">
        {navLinks.map((link, index) => (
          <li key={index}>
            {link.external ? (
              <a
                href={link.to}
                target="_blank"
                rel="noopener noreferrer"
                className="uppercase hover:font-semibold"
                onClick={toggleMobileMenu}>
                {link.text}
              </a>
            ) : (
              <Link
                to={link.to}
                className="uppercase hover:font-semibold"
                onClick={toggleMobileMenu}>
                {link.text}
              </Link>
            )}
          </li>
        ))}
        <li>
          <Link
            to={'/profile'}
            className="uppercase hover:font-semibold"
            onClick={toggleMobileMenu}>
            Profile
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default MobileNavbar;
