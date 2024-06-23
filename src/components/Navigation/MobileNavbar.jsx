/* eslint-disable react/prop-types */
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { navLinks } from '../../data/navLinks';

const MobileNavbar = ({ toggleMobileMenu }) => {
  return (
    <section className="fixed inset-0 flex flex-col items-start justify-start bg-primaryGreen text-white p-4 transform-gpu transition-transform duration-300 ease-in-out">
      <button onClick={toggleMobileMenu}>
        <AiOutlineClose size={24} />
      </button>
      <ul className="mt-8 space-y-4">
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
      </ul>
    </section>
  );
};

export default MobileNavbar;
