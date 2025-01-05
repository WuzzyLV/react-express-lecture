export const Button = ({ children, onClick, type, disabled }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={`border border-accent text-accent hover:underline hover:bg-accent/20 active:bg-success/20 font-bold py-2 px-4 mt-4 ${
        disabled ? "opacity-50 cursor-not-allowed text-error border-error " : "active:text-success active:border-success"
      }`}
    >
      {children}
    </button>
  );
};
