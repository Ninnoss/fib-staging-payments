const PaymentCardSkeleton = () => {
  return (
    <div className="animate-pulse">
      {/* Skeleton for Payment ID */}
      <h2 className="text-xl font-bold mb-2 h-8 bg-gray-300 rounded-sm"></h2>

      {/* Skeleton for Status */}
      <p className="mb-2 h-4 bg-gray-200 w-1/2 rounded-sm"></p>

      {/* Skeleton for Amount */}
      <p className="mb-2 h-4 bg-gray-200 w-1/2 rounded-sm"></p>

      {/* Skeleton for Declining Reason (optional) */}
      <p className="mb-2 h-4 bg-gray-200 w-3/4 rounded-sm"></p>

      {/* Skeleton for Paid At */}
      <p className="mb-2 h-4 bg-gray-200 w-1/4 rounded-sm"></p>

      {/* Skeleton for Paid By */}
      <p className="mb-2 h-4 bg-gray-200 w-1/2 rounded-sm"></p>

      {/* Skeleton for IBAN */}
      <p className="mb-2 h-4 bg-gray-200 w-1/2 rounded-sm"></p>

      {/* Skeleton for Readable Code */}
      <p className="mb-2 h-4 bg-gray-200 w-1/2 rounded-sm"></p>

      {/* Skeleton for QR Code */}
      <div className="mb-2 h-28 w-28 bg-gray-200 rounded-sm"></div>

      {/* Skeleton for App Links */}
      <div className="mt-1 flex flex-col gap-y-1">
        <div className="font-medium hover:font-bold duration-300 h-4 bg-gray-200 rounded-sm"></div>
        <div className="font-medium hover:font-bold duration-300 h-4 bg-gray-200 rounded-sm"></div>
        <div className="font-medium hover:font-bold duration-300 h-4 bg-gray-200 rounded-sm"></div>
      </div>
    </div>
  );
};

export default PaymentCardSkeleton;
