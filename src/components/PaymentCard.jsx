/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useTokenRefresh from '../hooks/useTokenRefresh';
import Button from './Button';
import PaymentCardSkeleton from './PaymentCardSkeleton';

const PaymentCard = ({ payment, onDelete }) => {
  const accessToken = useTokenRefresh();
  const { paymentForm, paymentData } = payment;
  const [paymentStatus, setPaymentStatus] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchPaymentStatus = async () => {
    if (!paymentData?.paymentId || !accessToken) {
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch(
        `https://fib.stage.fib.iq/protected/v1/payments/${paymentData.paymentId}/status`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      const statusData = await response.json();
      setPaymentStatus(statusData);
    } catch (error) {
      console.error('Error fetching payment status:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Load payment status on component mount or when dependencies change
  useEffect(() => {
    if (paymentData?.paymentId) {
      fetchPaymentStatus();
    }
  }, [paymentData.paymentId, accessToken]);

  // Handle delete payment action
  const handleDelete = () => {
    onDelete(paymentData?.paymentId);
  };

  // Render based on payment status
  const renderPaidOrDeclined = () => {
    if (paymentStatus?.status === 'PAID' || paymentStatus?.status === 'DECLINED') {
      return (
        <div className="bg-white shadow-md rounded-lg p-6 mb-4">
          <h2 className="text-xl font-bold mb-2">Payment ID: {paymentData?.paymentId}</h2>
          <p className="mb-2">Status: {paymentStatus?.status}</p>
          <p className="mb-2">
            Amount: {paymentStatus?.amount.amount} {paymentStatus?.amount.currency}
          </p>
          {paymentStatus?.decliningReason && (
            <p className="mb-2">Declining Reason: {paymentStatus?.decliningReason}</p>
          )}
          <p className="mb-2">Paid At: {paymentStatus?.paidAt}</p>
          <p className="mb-2">
            Paid By:<span> {paymentStatus?.paidBy?.name}</span>
          </p>
          <p className="mb-2">
            IBAN:<span> {paymentStatus?.paidBy?.iban}</span>
          </p>
        </div>
      );
    } else {
      return (
        <div className="bg-white shadow-md rounded-lg p-6 mb-4">
          <h2 className="text-xl font-bold mb-2">Payment ID: {paymentData?.paymentId}</h2>
          {isLoading ? (
            <PaymentCardSkeleton />
          ) : (
            <>
              <p className="mb-2">
                Amount: {paymentForm?.amount} {paymentData?.currency}
              </p>
              <p className="mb-2">Description: {paymentForm?.description}</p>
              <p className="mb-2">Expires In: {paymentForm?.expiresIn}</p>
              <p className="mb-2">Refundable For: {paymentForm?.refundableFor}</p>
              <p className="mb-2">Status: {paymentStatus?.status}</p>
              {/* <p className="mb-2">Status Callback URL: {paymentForm?.statusCallbackUrl}</p> */}
              <div className="mt-4">
                <strong>Pay through:</strong>
                <div className="flex justify-between items-center">
                  <p className="mb-2">
                    Readable Code: <strong>{paymentData?.readableCode}</strong>
                  </p>
                  {paymentData?.qrCode && (
                    <div className="mb-2">
                      <img
                        src={paymentData.qrCode}
                        alt="QR Code"
                        className="w-28 h-28"
                      />
                    </div>
                  )}
                </div>
              </div>
              <strong>Or use your application:</strong>

              <div className="mt-1 flex flex-col gap-y-1">
                <Link
                  className="font-medium hover:font-bold duration-300"
                  to={paymentData.personalAppLink}>
                  Personal App
                </Link>
                <Link
                  className="font-medium hover:font-bold duration-300"
                  to={paymentData.businessAppLink}>
                  Business App
                </Link>
                <Link
                  className="font-medium hover:font-bold duration-300"
                  to={paymentData.corporateAppLink}>
                  Corporate App
                </Link>
              </div>
              <div className="flex space-x-4 mt-4">
                <Button
                  onClick={fetchPaymentStatus}
                  className="bg-blue-500 text-white py-2 px-4 rounded">
                  Check Status
                </Button>
                <button
                  onClick={handleDelete}
                  className="bg-red-500 text-white py-2 px-4 rounded-lg">
                  Delete
                </button>
              </div>
            </>
          )}
        </div>
      );
    }
  };

  return <>{renderPaidOrDeclined()}</>;
};

export default PaymentCard;
