import { products, materialDetails } from "../../../../data/catalog";

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

export default async function ProductPage({ params }) {
  const { category, product: productSlug } = await params;

  const product = products.find(
    (item) =>
      item.category === category &&
      item.slug === productSlug
  );
  const material = materialDetails[product?.category];

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
        <a href={`/supply/${product.category}`} className="underline">
          ← Back to {product.material}
        </a>

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
            <p className="product-category-badge">
              Official ZYLtech Engineering Filament
            </p>

            <h1>{product.name}</h1>

            <p style={{ opacity: 0.85 }}>
              {product.description}
            </p>

            <h2>${product.price.toFixed(2)}</h2>

            <p className="hero-subnote">
  {getStockBadge(product.stock)} • {getStockText(product.stock)} • Local Pickup in Midland, TX
</p>

            <div className="hero-buttons">
              <a href="#filament-order" className="button-primary">
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
    </main>
  );
}
