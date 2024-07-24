import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { loginWithFIBUrl } from '../data/loginWithFIBUrl';
import { useAuth } from '../hooks/useAuth';

const Home = () => {
  const { userData } = useAuth();

  return (
    <main className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-6 py-16 md:py-28 lg:py-64">
      <Link to="/create-payment">
        <Button>Create Payment</Button>
      </Link>
      <Link to="/check-payment-status">
        <Button>Check Payment Status</Button>
      </Link>
      <Link to="/cancel-payment">
        <Button>Cancel Payment</Button>
      </Link>
      <Link to="/refund-payment">
        <Button>Refund Payment</Button>
      </Link>
      {!userData && (
        <Link to={loginWithFIBUrl}>
          <Button>Login with FIB</Button>
        </Link>
      )}
    </main>
  );
};

export default Home;
