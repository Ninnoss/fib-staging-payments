import { useState } from 'react';
import useTokenRefresh from '../hooks/useTokenRefresh';
import PaymentForm from '../components/PaymentForm';
import createPayment from '../utils/createPayment';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const accessToken = useTokenRefresh();
  const navigate = useNavigate();
  const [paymentData, setPaymentData] = useState(null);

  const [formData, setFormData] = useState({
    amount: '500',
    currency: 'IQD',
    description: 'Lorem ipsum dolor sit amet.',
    expiresIn: 'PT8H6M12.345S',
    refundableFor: 'PT48H',
    statusCallbackUrl: 'https://URL_TO_UPDATE_YOUR_PAYMENT_STATUS',
  });
  const [showPaymentForm, setShowPaymentForm] = useState(false);

  const handleCreatePayment = async () => {
    const payment = await createPayment(accessToken, formData);
    setPaymentData(payment);
    navigate('/payment', { state: { paymentData: payment } });
  };

  console.log(paymentData);
  return (
    <main className="flex justify-center items-center py-44">
      {showPaymentForm ? (
        <>
          <PaymentForm
            formData={formData}
            setFormData={setFormData}
            createPayment={handleCreatePayment}
          />
        </>
      ) : (
        <Button onClick={() => setShowPaymentForm(true)}>Create Payment</Button>
      )}
    </main>
  );
};

export default Home;
