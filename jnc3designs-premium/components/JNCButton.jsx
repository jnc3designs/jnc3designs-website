export default function JNCButton({
  children,
  href,
  variant = "primary",
  className = "",
  type = "button",
}) {
  const classes = `jnc-button jnc-button-${variant} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes}>
      {children}
    </button>
  );
}
