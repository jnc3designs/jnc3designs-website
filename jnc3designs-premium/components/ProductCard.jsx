import JNCButton from "./JNCButton";
import JNCCard from "./JNCCard";
import InventoryBadge from "./InventoryBadge";

function getProductSwatch(color) {
  const name = color.toLowerCase();

  if (name.includes("white")) return "#f5f5f5";
  if (name.includes("black")) return "#111111";
  if (name.includes("blue")) return "#1e6bff";
  if (name.includes("red")) return "#d71920";
  if (name.includes("green")) return "#2fb344";
  if (name.includes("orange")) return "#f97316";
  if (name.includes("purple")) return "#7c3aed";
  if (name.includes("magenta")) return "#d946ef";
  if (name.includes("brown") || name.includes("khaki")) return "#8b5e34";
  if (name.includes("gray") || name.includes("grey")) return "#808080";
  if (name.includes("maroon")) return "#800000";
  if (name.includes("transparent")) return "rgba(255,255,255,0.25)";
  if (name.includes("rainbow")) return "linear-gradient(135deg, red, orange, yellow, green, blue, purple)";
  if (name.includes("dual")) return "linear-gradient(135deg, #111, #d71920)";

  return "#4f7cff";
}

export default function ProductCard({ product }) {
  const reserveHref = `/supply/reserve?product=${encodeURIComponent(
    product.name
  )}&material=${encodeURIComponent(product.material)}&color=${encodeURIComponent(
    product.color
  )}&price=${product.price}&stock=${product.stock}&image=${encodeURIComponent(
    product.image
  )}`;

  return (
    <JNCCard className="product-card">
      <a
        href={`/supply/${product.category}/${product.slug}`}
        className="product-card-link"
      >
        <div
          className="product-swatch"
          style={{ background: product.swatch || getProductSwatch(product.color) }}
        />

        <h3>{product.name}</h3>

        <p className="product-brand">
          Official ZYLtech Engineering Filament
        </p>

        <InventoryBadge stock={product.stock} />

        <p style={{ opacity: 0.8 }}>Color: {product.color}</p>
        <p style={{ opacity: 0.8 }}>Material: {product.material}</p>

        <h2>${product.price.toFixed(2)}</h2>
      </a>

      <div className="product-bottom">
        <JNCButton href={reserveHref}>Reserve</JNCButton>
        <JNCButton href={product.square || reserveHref}>Buy with Square</JNCButton>
      </div>
    </JNCCard>
  );
}
