import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import useTokenRefresh from '../hooks/useTokenRefresh';

const CancelPayment = () => {
  const [paymentId, setPaymentId] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();
  const accessToken = useTokenRefresh();

  const handleCancelPayment = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');
    setIsSuccess(false);
    try {
      const response = await fetch(`https://fib.stage.fib.iq/protected/v1/payments/${paymentId}/cancel`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (response.status === 204) {
        setMessage('Payment cancelled successfully.');
        setIsSuccess(true);
        setTimeout(() => navigate('/'), 3000); // Redirect to home after 3 seconds
      } else {
        throw new Error('Failed to cancel payment');
      }
    } catch (error) {
      console.error('Error cancelling payment:', error);
      setMessage('Error cancelling payment.');
      setIsSuccess(false);
    } finally {
      setIsLoading(false);
    }
  };
  const messageStyle = isSuccess ? 'text-green-500' : 'text-red-500';
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <form
        className="bg-white p-6 rounded shadow-md w-full max-w-md"
        onSubmit={handleCancelPayment}>
        <h2 className="text-2xl font-bold mb-4">Cancel Payment</h2>
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
          {isLoading ? 'Cancelling...' : 'Cancel Payment'}
        </Button>
        {message && <p className={`mt-4 text-center ${messageStyle}`}>{message}</p>}
      </form>
    </div>
  );
};

export default CancelPayment;
