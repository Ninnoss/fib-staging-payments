import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const MobileNavbar = ({ toggleMobileMenu }) => {
  return (
    <section className="fixed inset-0 flex flex-col items-start justify-start bg-primaryGreen text-white p-4 transform-gpu transition-transform duration-300 ease-in-out">
      <button onClick={toggleMobileMenu}>
        <AiOutlineClose size={24} />
      </button>
      <ul className="mt-8 space-y-4">
        <li>
          <Link
            to="/"
            className="uppercase hover:font-semibold">
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/payments"
            className="uppercase hover:font-semibold">
            Payments
          </Link>
        </li>
        <li>
          <Link
            to="/developers"
            className="uppercase hover:font-semibold">
            Developers
          </Link>
        </li>
        <li>
          <Link
            to="/?getApp=true"
            className="uppercase hover:font-semibold">
            GET Staging APPs
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default MobileNavbar;
