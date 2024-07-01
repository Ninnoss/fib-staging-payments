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

  return (
    <main className="flex flex-col items-center py-16 md:py-28">
      <h1 className="text-2xl mb-10 text-center font-bold text-darkerGreen">Payments</h1>
      <div className="w-full max-w-2xl">
        {payments.length === 0 ? (
          <p>No payments found.</p>
        ) : (
          payments.map((payment, index) => (
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
