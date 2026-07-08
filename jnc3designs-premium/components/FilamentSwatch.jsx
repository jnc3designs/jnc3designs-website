export default function FilamentSwatch({
  color,
  name,
  size = 42,
}) {
  return (
    <div
      title={name}
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        background: color,
        border: "2px solid rgba(255,255,255,.18)",
        boxShadow: "0 6px 18px rgba(0,0,0,.30)",
        transition: "all var(--jnc-speed)",
        cursor: "pointer",
      }}
    />
  );
}
