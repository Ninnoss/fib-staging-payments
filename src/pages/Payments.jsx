import { useEffect, useState } from 'react';
import PaymentCard from '../components/PaymentCard';

const Payments = () => {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    const savedPayments = JSON.parse(localStorage.getItem('payments')) || [];
    setPayments(savedPayments);
  }, []);

  const handleDeletePayment = (paymentId) => {
    const updatedPayments = payments.filter((payment) => payment.paymentId !== paymentId);
    setPayments(updatedPayments);
    localStorage.setItem('payments', JSON.stringify(updatedPayments));
  };

  return (
    <main className="flex flex-col items-center py-16 md:py-28">
      <h1 className="text-3xl font-bold mb-8">Payments</h1>
      <div className="w-full max-w-2xl">
        {payments.length === 0 ? (
          <p>No payments found.</p>
        ) : (
          payments.map((payment) => (
            <PaymentCard
              key={payment.paymentId}
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
