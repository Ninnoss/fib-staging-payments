/* eslint-disable react/prop-types */
import Footer from './src/components/Navigation/Footer';
import Navbar from './src/components/Navigation/Navbar';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
