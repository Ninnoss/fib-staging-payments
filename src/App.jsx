import { Route, Routes } from 'react-router-dom';
import Layout from '../Layout';
import './App.css';
import NotFound from './pages/NotFound';
import PaymentDetails from './pages/PaymentDetails';
import Home from './pages/Home';
import CreatePayment from './pages/CreatePayment';
import CancelPayment from './pages/CancelPayment';
import RefundPayment from './pages/RefundPayment';
import CheckPaymentStatus from './pages/CheckPaymentStatus';
import Payments from './pages/Payments';
import UserProfile from './pages/UserProfile';

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-payment" element={<CreatePayment />} />
          <Route path="/payment/:id" element={<PaymentDetails />} />
          <Route path="/check-payment-status" element={<CheckPaymentStatus />} />
          <Route path="/cancel-payment" element={<CancelPayment />} />
          <Route path="/refund-payment" element={<RefundPayment />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
