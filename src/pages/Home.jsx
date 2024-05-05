import { useState } from 'react';
import useTokenRefresh from '../hooks/useTokenRefresh';
import PaymentForm from '../components/PaymentForm';

const Home = () => {
  const accessToken = window.sessionStorage.getItem('access_token');
  const [paymentId, setPaymentId] = useState(null);
  const [formData, setFormData] = useState({
    amount: '500.00',
    currency: 'IQD',
    description: 'Lorem ipsum dolor sit amet.',
    expiresIn: 'PT8H6M12.345S',
    refundableFor: 'PT48H',
  });
  useTokenRefresh();

  const createPayment = async () => {
    try {
      const paymentResponse = await fetch('https://fib.stage.fib.iq/protected/v1/payments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          monetaryValue: {
            amount: formData.amount,
            currency: formData.currency,
          },
          description: formData.description,
          expiresIn: formData.expiresIn,
          refundableFor: formData.refundableFor,
        }),
      });

      if (!paymentResponse.ok) {
        throw new Error(`Error creating payment: ${paymentResponse.status} - ${paymentResponse.statusText}`);
      }

      const paymentData = await paymentResponse.json();
      setPaymentId(paymentData.id);
    } catch (error) {
      console.error('Error creating payment:', error);
    }
  };

  return (
    <main className="text-red-400 flex justify-center items-center py-44">
      <PaymentForm
        formData={formData}
        setFormData={setFormData}
        createPayment={createPayment}
      />
      {paymentId && <p>Payment ID: {paymentId}</p>}
    </main>
  );
};

export default Home;
