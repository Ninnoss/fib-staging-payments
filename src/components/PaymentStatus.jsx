/* eslint-disable react/prop-types */
const PaymentStatus = ({ paymentStatus, isLoading }) => {
  return (
    <div className="flex flex-col mt-4">
      {isLoading ? (
        <SkeletonLoader />
      ) : (
        paymentStatus && (
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
        )
      )}
    </div>
  );
};

export default PaymentStatus;

const SkeletonLoader = () => {
  return (
    <>
      <div className="animate-pulse flex flex-col space-y-4">
        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
        <div className="h-4 bg-gray-200 rounded w-1/4"></div>
      </div>
    </>
  );
};
