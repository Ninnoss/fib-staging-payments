import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import PaymentStatus from '../components/PaymentStatus';
import useTokenRefresh from '../hooks/useTokenRefresh';
import { proxyUrl } from '../utils/proxyUrl';

const PaymentDetails = () => {
  const accessToken = useTokenRefresh();
  const location = useLocation();
  const paymentData = location.state?.paymentData;
  const paymetStatusUrl = proxyUrl(
    `https://fib.stage.fib.iq/protected/v1/payments/${paymentData.paymentId}/status`
  );

  const [paymentStatus, setPaymentStatus] = useState(null);
  const [showPaymentStatus, setShowPaymentStatus] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const fetchPaymentStatus = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(paymetStatusUrl, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      const statusData = await response.json();
      setPaymentStatus(statusData);
    } catch (error) {
      console.error('Error fetching payment status:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCheckPaymentStatus = () => {
    setShowPaymentStatus(true);
    fetchPaymentStatus();
  };

  const validUntilDate = new Date(paymentData.validUntil);
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  const formattedValidUntil = validUntilDate.toLocaleDateString('en-US', options);

  return (
    <main className="py-24 px-4">
      <h1 className="text-2xl mb-10 text-center font-bold text-darkerGreen">Payment Details</h1>
      <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg overflow-hidden py-4">
        <div className="px-4 py-2">
          <p>
            Payment ID: <span className="text-gray-600">{paymentData.paymentId}</span>
          </p>
          <p>
            Readable Code: <span className="text-gray-600">{paymentData.readableCode}</span>
          </p>
          <div className="py-6">
            <img
              src={paymentData.qrCode}
              alt="QR Code"
              className="w-60 h-60 mx-auto my-4"
            />
          </div>
          <p>Valid Until: {formattedValidUntil}</p>

          <div className="mt-4 flex flex-col gap-y-1">
            <Link
              className="font-medium hover:font-bold duration-300"
              to={paymentData.personalAppLink}>
              {' '}
              Personal App
            </Link>
            <Link
              className="font-medium hover:font-bold duration-300"
              to={paymentData.businessAppLink}>
              {' '}
              Business App
            </Link>
            <Link
              className="font-medium hover:font-bold duration-300"
              to={paymentData.corporateAppLink}>
              {' '}
              Corporate App
            </Link>
          </div>
          <button
            className="bg-darkerGreen hover:bg-primaryGreen text-white font-bold py-2 px-4 rounded mt-4"
            onClick={handleCheckPaymentStatus}>
            Check Payment Status
          </button>
          {showPaymentStatus && (
            <PaymentStatus
              paymentStatus={paymentStatus}
              isLoading={isLoading}
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default PaymentDetails;
