import { useState } from 'react';
import Button from '../components/Button';
import useTokenRefresh from '../hooks/useTokenRefresh';

const CheckPaymentStatus = () => {
  const [paymentId, setPaymentId] = useState('');
  const [paymentStatus, setPaymentStatus] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const accessToken = useTokenRefresh();

  const handleCheckPaymentStatus = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');
    setPaymentStatus(null);
    try {
      const response = await fetch(`https://fib.stage.fib.iq/protected/v1/payments/${paymentId}/status`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (response.ok) {
        const statusData = await response.json();
        setPaymentStatus(statusData);
      } else {
        setMessage('Failed to fetch payment status.');
      }
    } catch (error) {
      setMessage('Error fetching payment status.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-24 px-4">
      <h1 className="text-2xl mb-10 text-center font-bold text-darkerGreen">Check Payment Status</h1>
      <form
        onSubmit={handleCheckPaymentStatus}
        className="max-w-md w-full bg-white shadow-md rounded-lg p-6">
        <div className="mb-4">
          <label
            htmlFor="paymentId"
            className="block text-sm font-medium text-gray-700">
            Payment ID
          </label>
          <input
            type="text"
            id="paymentId"
            value={paymentId}
            onChange={(e) => setPaymentId(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <Button
          type="submit"
          className="w-full">
          {isLoading ? 'Checking...' : 'Check Payment Status'}
        </Button>
      </form>

      {message && <p className="mt-4 text-red-500">{message}</p>}

      {paymentStatus && (
        <div className="mt-10 max-w-md w-full bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Payment Status</h2>
          <p>
            <span className="font-semibold">Payment ID:</span> {paymentStatus.paymentId}
          </p>
          <p>
            <span className="font-semibold">Status:</span> {paymentStatus.status}
          </p>
          {paymentStatus.status === 'PAID' && (
            <>
              <p>
                <span className="font-semibold">Paid At:</span>{' '}
                {new Date(paymentStatus.paidAt).toLocaleString()}
              </p>
              <p>
                <span className="font-semibold">Amount:</span> {paymentStatus.amount.amount}{' '}
                {paymentStatus.amount.currency}
              </p>
              <p>
                <span className="font-semibold">Paid By:</span> {paymentStatus.paidBy.name} (IBAN:{' '}
                {paymentStatus.paidBy.iban})
              </p>
            </>
          )}
          {paymentStatus.status === 'DECLINED' && (
            <>
              <p>
                <span className="font-semibold">Declining Reason:</span> {paymentStatus.decliningReason}
              </p>
              <p>
                <span className="font-semibold">Declined At:</span>{' '}
                {new Date(paymentStatus.declinedAt).toLocaleString()}
              </p>
            </>
          )}
          {paymentStatus.status === 'UNPAID' && (
            <p>
              <span className="font-semibold">Description:</span> The transaction is not paid yet and is still
              pending.
            </p>
          )}
        </div>
      )}
    </main>
  );
};

export default CheckPaymentStatus;
