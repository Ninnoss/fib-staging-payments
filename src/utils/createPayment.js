const createPayment = async (accessToken, formData) => {
  try {
    const paymentResponse = await fetch('https://fib.stage.fib.iq/protected/v1/payments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        monetaryValue: {
          amount: formData.amount,
          currency: formData.currency,
        },
        description: formData.description,
        expiresIn: formData.expiresIn,
        refundableFor: formData.refundableFor,
        statusCallbackUrl: 'https://URL_TO_UPDATE_YOUR_PAYMENT_STATUS',
      }),
    });

    if (!paymentResponse.ok) {
      throw new Error(`Error creating payment: ${paymentResponse.status} - ${paymentResponse.statusText}`);
    }

    const paymentData = await paymentResponse.json();
    return paymentData.id;
  } catch (error) {
    console.error('Error creating payment:', error);
    return null;
  }
};

export default createPayment;
