import { useState } from 'react';
import useTokenRefresh from '../hooks/useTokenRefresh';
import PaymentForm from '../components/PaymentForm';
import createPayment from '../utils/createPayment';

const Home = () => {
  const accessToken = useTokenRefresh();

  const [paymentData, setPaymentData] = useState(null);
  const [formData, setFormData] = useState({
    amount: '500',
    currency: 'IQD',
    description: 'Lorem ipsum dolor sit amet.',
    expiresIn: 'PT8H6M12.345S',
    refundableFor: 'PT48H',
    statusCallbackUrl: 'https://URL_TO_UPDATE_YOUR_PAYMENT_STATUS',
  });

  const handleCreatePayment = async () => {
    const payment = await createPayment(accessToken, formData);
    setPaymentData(payment);
  };

  return (
    <main className="flex justify-center items-center py-44">
      <PaymentForm
        formData={formData}
        setFormData={setFormData}
        createPayment={handleCreatePayment}
      />
      {paymentData && <p>Payment ID: {paymentData.paymentId}</p>}
    </main>
  );
};

export default Home;
