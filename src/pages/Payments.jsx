import { useEffect, useState } from 'react';
import PaymentCard from '../components/PaymentCard';

const Payments = () => {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    const savedPayments = JSON.parse(localStorage.getItem('payments')) || [];

    savedPayments.sort((a, b) => {
      // Sort by payment status first (unpaid first)
      if (a.paymentStatus === 'UNPAID' && b.paymentStatus !== 'UNPAID') {
        return -1;
      } else if (a.paymentStatus !== 'UNPAID' && b.paymentStatus === 'UNPAID') {
        return 1;
      } else {
        // If both are unpaid or both are paid, sort by timestamp
        return new Date(a.timestamp) - new Date(b.timestamp);
      }
    });

    setPayments(savedPayments);
  }, []);

  const handleDeletePayment = (paymentId) => {
    const updatedPayments = payments.filter((payment) => payment.paymentData.paymentId !== paymentId);
    setPayments(updatedPayments);
    localStorage.setItem('payments', JSON.stringify(updatedPayments));
  };

  return (
    <main className="flex flex-col items-center py-16 md:py-28 relative">
      <p className="text-darkerBlue absolute bottom-3 left-3 md:left-3">
        Note: Payments are stored <strong>ON-DEVICE</strong>
      </p>
      <h1 className="text-2xl mb-10 text-center font-bold text-darkerGreen">Payments</h1>
      <div className="w-full max-w-2xl space-y-6">
        {payments.length === 0 ? (
          <p>No payments found.</p>
        ) : (
          payments?.map((payment, index) => (
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
