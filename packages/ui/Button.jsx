export default function Button({
  children,
  className = "",
  onClick,
  variant = "primary",
  icon,
  type = "button",
  ...rest
}) {
  const baseStyles = "p-2 rounded-md font-bold";
  const variants = {
    primary: "bg-primary text-text-secondary",
  };
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
