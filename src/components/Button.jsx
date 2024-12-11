/* eslint-disable react/prop-types */
const Button = ({ children, onClick }) => {
  return (
    <button
      className=" bg-lime-400 rounded-lg p-2 font-semibold text-green-800 m-2 "
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
