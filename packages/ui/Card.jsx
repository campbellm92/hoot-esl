export default function Card({
  className = "",
  variant = "primary",
  image = null,
  title,
  content,
  button = null,
  ...rest
}) {
  const baseStyles = "flex flex-col w-full max-w-[20rem] p-4 rounded-lg";
  const withSpacing = image ? "justify-evenly" : "justify-start";
  const variants = {
    primary: "bg-primary text-text-secondary",
    primaryOutline: "bg-background text-text-primary border-4 border-primary",
  };
  return (
    <div
      className={`${baseStyles} ${withSpacing} ${variants[variant]} ${className}`}
      {...rest}
    >
      {image && (
        <div className="w-full h-38 overflow-hidden rounded-lg mb-4">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          ></img>
        </div>
      )}

      <div>
        <h3 className="font-semibold mb-4">{title}</h3>
        <p className="mb-4">{content}</p>
      </div>
      <div>{button && <div className="">{button}</div>}</div>
    </div>
  );
}
