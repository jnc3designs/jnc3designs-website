export default function Badge({
  children,
  color = "blue",
}) {
  return (
    <span className={`jnc-badge jnc-badge-${color}`}>
      {children}
    </span>
  );
}
