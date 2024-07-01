/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom';
import Button from './Button';

const PaymentCard = ({ payment, onDelete }) => {
  const navigate = useNavigate();

  const handleCheckStatus = () => {
    navigate(`/check-payment-status`, { state: { paymentId: payment.paymentId } });
  };

  const handleDelete = () => {
    onDelete(payment.paymentId);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-4">
      <h2 className="text-xl font-bold mb-2">Payment ID: {payment.paymentId}</h2>
      <p className="mb-2">
        Amount: {payment.amount} {payment.currency}
      </p>
      <p className="mb-2">Description: {payment.description}</p>
      <p className="mb-2">Expires In: {payment.expiresIn}</p>
      <p className="mb-2">Refundable For: {payment.refundableFor}</p>
      <p className="mb-2">Status: {payment.status}</p>
      <div className="flex space-x-4">
        <Button
          onClick={handleCheckStatus}
          className="bg-blue-500 text-white py-2 px-4 rounded">
          Check Status
        </Button>
        <button
          onClick={handleDelete}
          className="bg-red-500 text-white py-2 px-4 rounded-lg">
          Delete
        </button>
      </div>
    </div>
  );
};

export default PaymentCard;
