import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useTokenRefresh from '../hooks/useTokenRefresh';
import PaymentForm from '../components/PaymentForm';
import createPayment from '../utils/createPayment';

const CreatePayment = () => {
  const accessToken = useTokenRefresh();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    amount: '500',
    currency: 'IQD',
    description: 'Lorem ipsum dolor sit amet.',
    expiresIn: 'PT8H6M12.345S',
    refundableFor: 'PT48H',
    statusCallbackUrl: 'https://URL_TO_UPDATE_YOUR_PAYMENT_STATUS',
  });

  const handleCreatePayment = async () => {
    try {
      const payment = await createPayment(accessToken, formData);
      navigate(`/payment/${payment.paymentId}`, { state: { paymentData: payment } });

      // Save payment to local storage
      if (payment) {
        const timestamp = new Date().toISOString(); // Get current timestamp
        const payments = JSON.parse(localStorage.getItem('payments')) || [];
        payments.push({
          paymentForm: formData,
          paymentData: payment,
          paymentStatus: 'UNPAID',
          timestamp: timestamp,
        });
        localStorage.setItem('payments', JSON.stringify(payments));
      }
    } catch (error) {
      console.error('Error creating payment:', error);
    }
  };

  return (
    <main className="flex justify-center items-center py-16 md:py-28">
      <PaymentForm
        formData={formData}
        setFormData={setFormData}
        createPayment={handleCreatePayment}
      />
    </main>
  );
};

export default CreatePayment;
