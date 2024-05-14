/* eslint-disable react/prop-types */
import LoadingSpinner from './LoadingSpinner';

const PaymentStatus = ({ paymentStatus, isLoading }) => {
  return (
    <div className="flex flex-col mt-4">
      {isLoading && <LoadingSpinner />}
      {!isLoading && paymentStatus && (
        <>
          <p>Status: {paymentStatus?.status}</p>
          {paymentStatus?.status === 'PAID' && (
            <>
              <p>Paid At: {new Date(paymentStatus.paidAt).toLocaleString()}</p>
              <p>Paid By: {paymentStatus?.paidBy.name}</p>
              <p>IBAN: {paymentStatus?.paidBy.iban}</p>
            </>
          )}
          {paymentStatus?.status === 'UNPAID' && (
            <p>Description: The transaction is not paid yet and is still pending.</p>
          )}
          {paymentStatus?.status === 'DECLINED' && <p>Description: Payment has been declined.</p>}
        </>
      )}
    </div>
  );
};

export default PaymentStatus;
