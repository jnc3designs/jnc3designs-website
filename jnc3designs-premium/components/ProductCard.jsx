export default function ProductCard({ product }) {

  let badge = "🟢 In Stock";

  if (product.stock <= 1) {
    badge = "🔴 Last One";
  } else if (product.stock <= 3) {
    badge = "🟡 Low Stock";
  }

  return (
    <div className="product-card">

      <div className="product-top">

        <div className="product-image">

          🧵

        </div>

        <h3>{product.name}</h3>

        <p className="product-brand">
          Official ZYLtech Engineering Filament
        </p>

      </div>

      <div className="product-middle">

        <p>{badge}</p>

        <h2>${product.price.toFixed(2)}</h2>

      </div>

      <div className="product-bottom">

        <button className="button-primary">
          Reserve
        </button>

        <button className="button-primary">
          Buy with Square
        </button>

      </div>

    </div>
  );
}
