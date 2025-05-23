export default function Button({
  children,
  className = "",
  onClick,
  variant = "primary",
  icon,
  type = "button",
  ...rest
}) {
  const baseStyles = "p-2 rounded-lg font-bold cursor-pointer";
  const variants = {
    primary: "bg-primary text-text-secondary",
    primaryOutline: "bg-background text-text-primary border-4 border-primary",
    secondary: "bg-secondary text-text-primary",
    secondaryOutline:
      "bg-background text-text-primary border-4 border-secondary",
    neutral: "bg-neutral text-text-primary",
    neutralOutline: "bg-background text-text-primary border-4 border-neutral",
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
