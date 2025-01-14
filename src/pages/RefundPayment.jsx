import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import useTokenRefresh from '../hooks/useTokenRefresh';
import { PAYMENTS_BASE_URL } from '../data/constants';

const RefundPayment = () => {
  const [paymentId, setPaymentId] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const navigate = useNavigate();
  const accessToken = useTokenRefresh();

  const handleRefundPayment = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');
    try {
      const response = await fetch(`${PAYMENTS_BASE_URL}/${paymentId}/refund`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (response.status === 202) {
        setIsSuccess(true);
        setMessage('Refund requested successfully. Check the payment status for updates.');
        setTimeout(() => navigate('/'), 3000); // Redirect to home after 3 seconds
      } else {
        throw new Error('Failed to request refund');
      }
    } catch (error) {
      console.error('Error requesting refund:', error);
      setMessage('Error requesting refund.');
      setIsSuccess(false);
    } finally {
      setIsLoading(false);
    }
  };
  const messageStyle = isSuccess ? 'text-green-500' : 'text-red-500';

  return (
    <div className="flex flex-col items-center justify-center py-16 md:py-28">
      <h1 className="text-2xl mb-10 text-center font-bold text-darkerGreen">Refund Payment</h1>

      <form
        className="bg-white p-6 rounded shadow-md w-full max-w-sm md:max-w-md"
        onSubmit={handleRefundPayment}>
        <div className="mb-4">
          <label
            htmlFor="paymentId"
            className="block text-gray-700">
            Payment ID
          </label>
          <input
            type="text"
            id="paymentId"
            className="w-full px-3 py-2 border rounded"
            value={paymentId}
            onChange={(e) => setPaymentId(e.target.value)}
            required
          />
        </div>
        <Button
          type="submit"
          disabled={isLoading}>
          {isLoading ? 'Requesting Refund...' : 'Refund Payment'}
        </Button>
        {message && <p className={`mt-4 text-center ${messageStyle}`}>{message}</p>}
      </form>
    </div>
  );
};

export default RefundPayment;
