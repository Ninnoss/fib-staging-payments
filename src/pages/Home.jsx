import { Link } from 'react-router-dom';
import Button from '../components/Button';

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-6 min-h-screen">
      <Link
        to="/create-payment"
        className="w-full md:w-auto">
        <Button>Create Payment</Button>
      </Link>
      <Link
        to="/check-payment-status"
        className="w-full md:w-auto">
        <Button>Check Payment Status</Button>
      </Link>
      <Link
        to="/cancel-payment"
        className="w-full md:w-auto">
        <Button>Cancel Payment</Button>
      </Link>
      <Link
        to="/refund-payment"
        className="w-full md:w-auto">
        <Button>Refund Payment</Button>
      </Link>
    </div>
  );
};

export default Home;
