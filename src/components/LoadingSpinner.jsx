import { FaSpinner } from 'react-icons/fa';

const LoadingSpinner = (isInBottom = false) => {
  /**
   * LoadingSpinner used as placeholder for loading component,
   * and with React Lazy -> Suspense
   *
   * @example
   * import LoadingSpinner from '@/components/LoadingSpinner';
   * import { lazy, Suspense } from 'react';
   *
   * // Inside component
   * <Suspense fallback={<LoadingSpinner />}>
   *  ...
   * </Suspense>
   */

  return (
    <div className={`flex justify-center items-center ${isInBottom ? 'h-3/6 absolute bottom-0 z-[6000] bg-white w-full' : 'h-screen'}`}>
      <FaSpinner className="animate-spin text-4xl text-gray-300" />
    </div>
  );
};

export default LoadingSpinner;
