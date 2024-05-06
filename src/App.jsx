import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components//Navigation/Navbar';
import Footer from './components/Navigation/Footer';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import PaymentCard from './pages/Payment';

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/payment"
          element={<PaymentCard />}
        />
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
