/* eslint-disable react/prop-types */
const Button = ({ type = 'submit', className = '', processing, children, onClick, disabled }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`${className} text-white bg-primaryGreen hover:bg-darkerGreen transition-all duration-300 rounded-lg shadow-lg font-bold px-4 py-2 ${
        processing && 'opacity-75'
      } ${disabled ? 'cursor-not-allowed' : ''} `}
      disabled={disabled} // Disable the button if disabled prop is true
    >
      {children}
    </button>
  );
};

export default Button;
