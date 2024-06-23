/* eslint-disable react/prop-types */
import Button from '../components/Button';

const PaymentForm = ({ formData, setFormData, createPayment }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="w-full md:w-2/3 lg:w-1/3 px-4">
      <h1 className="text-2xl mb-10 text-center font-bold text-darkerGreen">Payment Details</h1>
      <form>
        <div className="mb-4">
          <label
            htmlFor="amount"
            className="block text-sm font-medium text-gray-700">
            Amount
          </label>
          <input
            type="text"
            id="amount"
            name="amount"
            value={formData.amount}
            onChange={handleInputChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="currency"
            className="block text-sm font-medium text-gray-700">
            Currency
          </label>
          <input
            type="text"
            id="currency"
            name="currency"
            value={formData.currency}
            onChange={handleInputChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <input
            type="text"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="expiresIn"
            className="block text-sm font-medium text-gray-700">
            Expires In
          </label>
          <input
            type="text"
            id="expiresIn"
            name="expiresIn"
            value={formData.expiresIn}
            onChange={handleInputChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="refundableFor"
            className="block text-sm font-medium text-gray-700">
            Refundable For
          </label>
          <input
            type="text"
            id="refundableFor"
            name="refundableFor"
            value={formData.refundableFor}
            onChange={handleInputChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>
      </form>
      <Button
        onClick={createPayment}
        className="mt-4">
        Pay Now
      </Button>
    </div>
  );
};

export default PaymentForm;
