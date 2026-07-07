export default function JNCCard({
  children,
  className = "",
  hover = true,
}) {
  return (
    <div
      className={`jnc-card ${
        hover ? "jnc-card-hover" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
