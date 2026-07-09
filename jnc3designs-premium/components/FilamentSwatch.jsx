import { filamentSwatches } from "../data/swatches";

export default function FilamentSwatch({
  color,
  size = 64,
  className = "",
}) {
  const swatchColor = filamentSwatches[color] || "#4f7cff";

  return (
    <div
      className={`filament-swatch ${className}`}
      title={color}
      style={{
        width: size,
        height: size,
        background: swatchColor,
      }}
    />
  );
}
