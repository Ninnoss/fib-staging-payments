import { useEffect, useState } from 'react';
import PaymentCard from '../components/PaymentCard';

const Payments = () => {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    const savedPayments = JSON.parse(localStorage.getItem('payments')) || [];
    setPayments(savedPayments);
  }, []);

  const handleDeletePayment = (paymentId) => {
    const updatedPayments = payments.filter((payment) => payment.paymentData.paymentId !== paymentId);
    setPayments(updatedPayments);
    localStorage.setItem('payments', JSON.stringify(updatedPayments));
  };

  // Function to determine sorting order based on payment status
  const comparePayments = (paymentA, paymentB) => {
    const statusA = paymentA.paymentStatus?.status || 'UNPAID'; // Default to 'UNPAID' if status is not available
    const statusB = paymentB.paymentStatus?.status || 'UNPAID'; // Default to 'UNPAID' if status is not available

    // Sort by unpaid first, then by payment ID if both are unpaid
    if (statusA === 'UNPAID' && statusB !== 'UNPAID') {
      return -1;
    } else if (statusA !== 'UNPAID' && statusB === 'UNPAID') {
      return 1;
    } else {
      return 0;
    }
  };

  // Sort payments based on the compare function
  const sortedPayments = [...payments].sort(comparePayments);

  return (
    <main className="flex flex-col items-center py-16 md:py-28">
      <h1 className="text-2xl mb-10 text-center font-bold text-darkerGreen">Payments</h1>
      <div className="w-full max-w-2xl">
        {sortedPayments.length === 0 ? (
          <p>No payments found.</p>
        ) : (
          sortedPayments.map((payment, index) => (
            <PaymentCard
              key={index}
              payment={payment}
              onDelete={handleDeletePayment}
            />
          ))
        )}
      </div>
    </main>
  );
};

export default Payments;
