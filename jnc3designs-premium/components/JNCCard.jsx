export default function JNCCard({
  children,
  className = "",
  hover = true,
  style = {},
}) {
  return (
    <div
      className={`jnc-card ${hover ? "jnc-card-hover" : ""} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}
