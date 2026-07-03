function getStockBadge(stock) {
  if (stock <= 0) return "⚫ Out of Stock";
  if (stock === 1) return "🔴 Last One";
  if (stock <= 3) return "🟡 Low Stock";
  return "🟢 In Stock";
}

function getSwatch(color) {
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
  const swatch = getSwatch(product.color);

  return (
    <a
  href={`/supply/${product.category}/${product.slug}`}
  className="product-card"
>
      <div className="product-top">
        <div
          className="product-swatch"
          style={{ background: swatch }}
        ></div>

        <h3>{product.name}</h3>

        <p className="product-brand">
          Official ZYLtech Engineering Filament
        </p>
      </div>

      <div className="product-middle">
        <p>{getStockBadge(product.stock)}</p>
        <p style={{ opacity: 0.75 }}>Color: {product.color}</p>
        <p style={{ opacity: 0.75 }}>Material: {product.material}</p>

        <h2>${product.price.toFixed(2)}</h2>
      </div>

      <div className="product-bottom">
        <a href="#filament-order" className="button-primary">
          Reserve
        </a>

        <a
          href={product.square || "#filament-order"}
          className="button-primary"
          target={product.square ? "_blank" : undefined}
          rel={product.square ? "noreferrer" : undefined}
        >
          Buy with Square
        </a>
      </div>
    </a>
  );
}
