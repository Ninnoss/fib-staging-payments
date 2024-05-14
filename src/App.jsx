import { Route, Routes } from 'react-router-dom';
import Layout from '../Layout';
import './App.css';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import PaymentCard from './pages/Payment';

function App() {
  return (
    <>
      <Layout>
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
      </Layout>
    </>
  );
}

export default App;
