import { useLocation, Link } from 'react-router-dom';
import LoadingSpinner from '../components/LoadingSpinner';

const Payment = () => {
  const location = useLocation();
  const paymentData = location.state?.paymentData;

 if (!paymentData) {
   return <LoadingSpinner />;
  }
  
  const validUntilDate = new Date(paymentData.validUntil);
  const formattedValidUntil = validUntilDate.toLocaleString();
  return (
    <main className="py-24">
      <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className="px-4 py-2">
          <p className="text-lg font-semibold">Payment Details</p>
          <p>Payment ID: {paymentData.paymentId}</p>
          <p>Readable Code: {paymentData.readableCode}</p>
          <div className="py-12">
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
        </div>
      </div>
    </main>
  );
};

export default Payment;
