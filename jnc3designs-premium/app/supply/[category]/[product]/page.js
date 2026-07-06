import { products, materialDetails } from "../../../../data/catalog";
import Badge from "../../../../components/Badge";

function getStockBadge(stock) {
  if (stock <= 0) return "⚫ Out of Stock";
  if (stock === 1) return "🔴 Only 1 Left";
  if (stock <= 3) return "🟡 Low Stock";
  return "🟢 In Stock";
}
function getStockText(stock) {
  if (stock <= 0) return "Out of Stock";
  if (stock === 1) return "Only 1 Roll Left";
  return `${stock} Rolls Available`;
}
function getColorSwatch(color) {
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
export default async function ProductPage({ params }) {
  const { category, product: productSlug } = await params;

  const product = products.find(
    (item) =>
      item.category === category &&
      item.slug === productSlug
  );
  const material = materialDetails[product?.category];
  
  const relatedColors = products.filter(
  (item) => item.category === product?.category
);

  if (!product) {
    return (
      <main>
        <section className="section">
          <h1>Product Not Found</h1>
          <a href="/supply" className="button-primary">
            Back to JNC3 Supply
          </a>
        </section>
      </main>
    );
  }

  return (
    <main>
      <section className="section">
        <nav className="breadcrumbs">
  <a href="/">Home</a>
  <span>›</span>
  <a href="/supply">JNC3 Supply</a>
  <span>›</span>
  <a href={`/supply/${product.category}`}>{product.material}</a>
  <span>›</span>
  <span>{product.color}</span>
</nav>

        <div className="product-hero">
          <div className="product-photo-placeholder">
  {product.image ? (
    <img
      src={product.image}
      alt={product.name}
      className="product-detail-image"
    />
  ) : (
    <span>{product.color}</span>
  )}
</div>

          <div className="product-info">
           <Badge>
  ⭐ Official ZYLtech Engineering Filament
</Badge>
  


            <h1>{product.name}</h1>

  <p className="hero-rating">
  ★★★★★ Premium Printing Material
</p>

            <p style={{ opacity: 0.85 }}>
              {product.description}
            </p>

            <h2>${product.price.toFixed(2)}</h2>

            <p className="hero-subnote">
  {getStockBadge(product.stock)} • {getStockText(product.stock)} • Local Pickup in Midland, TX
</p>

            <div className="hero-buttons">
             <a href="/supply#filament-order" className="button-primary">
  Reserve Pickup
</a>

              <a
                href={product.square || "#filament-order"}
                className="button-primary"
              >
                Buy with Square
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Product Details</h2>

        <ul className="feature-list">
          <li>Material: {product.material}</li>
          <li>Color: {product.color}</li>
          <li>Brand: {product.brand}</li>
          <li>1.75mm filament</li>
          <li>1kg spool</li>
        </ul>
      </section>
   <section className="section">
  <h2>Material Specs</h2>

  <div className="spec-grid">
    <div className="spec-card">
      <span>🔥</span>
      <h3>Nozzle Temp</h3>
      <p>{material?.nozzleTemp}</p>
    </div>

    <div className="spec-card">
      <span>🛏️</span>
      <h3>Bed Temp</h3>
      <p>{material?.bedTemp}</p>
    </div>

    <div className="spec-card">
      <span>⭐</span>
      <h3>Difficulty</h3>
      <p>{material?.difficulty}</p>
    </div>

    <div className="spec-card">
      <span>🧩</span>
      <h3>Best For</h3>
      <p>{material?.bestFor}</p>
    </div>
  </div>

  <p style={{ opacity: 0.85, marginTop: "24px", maxWidth: "900px" }}>
    {material?.notes}
  </p>
</section>

      <section className="section">
        <h2>Recommended Uses</h2>

        <ul className="feature-list">
          {product.applications?.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="section">
        <h2>Compatible Printers</h2>

        <ul className="feature-list">
          {product.printerCompatibility?.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="section">
        <h2>JNC3Designs Recommendation</h2>

        <p style={{ opacity: 0.85, maxWidth: "900px" }}>
          {product.name} is a great option for customers who want dependable
          everyday printing, clean detail, and reliable performance. This is the
          type of material we like keeping in stock locally because it works well
          for makers, businesses, schools, and general 3D printing projects.
        </p>
      </section>
            <section className="section">
  <h2>Available {product.material} Colors</h2>

  <div className="color-swatch-grid">
    {relatedColors.map((item) => (
      <a
        key={item.id}
        href={`/supply/${item.category}/${item.slug}`}
        className={`color-swatch-card ${
          item.slug === product.slug ? "active-swatch" : ""
        }`}
      >
        <span
          className="color-swatch-dot"
          style={{ background: getColorSwatch(item.color) }}
        ></span>

        <span>{item.color}</span>
      </a>
    ))}
  </div>
</section>
    </main>
  );
}
