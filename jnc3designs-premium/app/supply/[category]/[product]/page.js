import { products, materialDetails } from "../../../../data/catalog";
import Badge from "../../../../components/Badge";
import FilamentSwatch from "../../../../components/FilamentSwatch";
import InventoryBadge from "../../../../components/InventoryBadge";
import JNCButton from "../../../../components/JNCButton";
import JNCCard from "../../../../components/JNCCard";
import MaterialHighlights from "../../../../components/MaterialHighlights";
import { canPurchase } from "../../../../data/inventory";

export default async function ProductPage({ params }) {
  const { category, product: productSlug } = await params;

  const product = products.find(
    (item) =>
      item.category === category &&
      item.slug === productSlug
  );

  if (!product) {
    return (
      <main>
        <section className="section">
          <h1>Product Not Found</h1>

          <JNCButton href="/supply">
            Back to JNC3 Supply
          </JNCButton>
        </section>
      </main>
    );
  }

  const material = materialDetails[product.category];

  const relatedColors = products.filter(
    (item) => item.category === product.category
  );

  const reserveHref =
    `/supply/reserve?product=${encodeURIComponent(product.name)}` +
    `&material=${encodeURIComponent(product.material)}` +
    `&color=${encodeURIComponent(product.color)}` +
    `&price=${product.price}` +
    `&stock=${product.stock}` +
    `&image=${encodeURIComponent(product.image || "")}`;

  const squareHref = product.square || reserveHref;

  return (
    <main>
      <section className="section">
        <nav className="breadcrumbs">
          <a href="/">Home</a>
          <span>›</span>
          <a href="/supply">JNC3 Supply</a>
          <span>›</span>
          <a href={`/supply/${product.category}`}>
            {product.material}
          </a>
          <span>›</span>
          <span>{product.color}</span>
        </nav>

        <div className="product-hero">
          <JNCCard
            className="product-photo-placeholder"
            hover={false}
          >
            {product.image ? (
              <img
                src={product.image}
                alt={product.name}
                className="product-detail-image"
              />
            ) : (
              <div className="product-image-fallback">
                <FilamentSwatch
                  color={product.color}
                  size={120}
                />

                <span>{product.color}</span>
              </div>
            )}
          </JNCCard>

          <div className="product-info">
            <Badge>
              ⭐ Official ZYLtech Engineering Filament
            </Badge>

            <h1>{product.name}</h1>

            <p className="hero-rating">
              ★★★★★ Premium Printing Material
            </p>

            <p style={{ opacity: 0.85, lineHeight: 1.7 }}>
              {product.description ||
                material?.notes ||
                `${product.name} is available for local pickup through JNC3 Supply.`}
            </p>

            <p className="product-detail-price">
              ${product.price.toFixed(2)}
            </p>

            <div className="product-status-row">
              <InventoryBadge stock={product.stock} />

              <Badge color="dark">
                📍 Local Pickup in Midland, TX
              </Badge>
            </div>

            <div className="hero-buttons">
              <JNCButton href={reserveHref}>
                Reserve Pickup
              </JNCButton>

              {canPurchase(product.stock) ? (
  <JNCButton href={squareHref}>
    Buy with Square
  </JNCButton>
) : (
  <span
    className="button-primary"
    style={{
      opacity: 0.5,
      cursor: "not-allowed",
      pointerEvents: "none",
    }}
  >
    Out of Stock
  </span>
)}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Why Choose This Material?</h2>

        <MaterialHighlights
          material={product.category}
          showTitle={false}
        />
      </section>

      <section className="section">
        <h2>Product Details</h2>

        <div className="spec-grid">
          <JNCCard className="spec-card" hover={false}>
            <span>🧵</span>
            <h3>Material</h3>
            <p>{product.material}</p>
          </JNCCard>

          <JNCCard className="spec-card" hover={false}>
            <span>🎨</span>
            <h3>Color</h3>
            <p>{product.color}</p>
          </JNCCard>

          <JNCCard className="spec-card" hover={false}>
            <span>🏷️</span>
            <h3>Brand</h3>
            <p>{product.brand}</p>
          </JNCCard>

          <JNCCard className="spec-card" hover={false}>
            <span>📦</span>
            <h3>Spool</h3>
            <p>1kg • 1.75mm</p>
          </JNCCard>
        </div>
      </section>

      <section className="section">
        <h2>Material Specifications</h2>

        <div className="spec-grid">
          <JNCCard className="spec-card" hover={false}>
            <span>🔥</span>
            <h3>Nozzle Temperature</h3>
            <p>{material?.nozzleTemp || "Confirm with manufacturer"}</p>
          </JNCCard>

          <JNCCard className="spec-card" hover={false}>
            <span>🛏️</span>
            <h3>Bed Temperature</h3>
            <p>{material?.bedTemp || "Confirm with manufacturer"}</p>
          </JNCCard>

          <JNCCard className="spec-card" hover={false}>
            <span>⭐</span>
            <h3>Difficulty</h3>
            <p>{material?.difficulty || "Varies by printer"}</p>
          </JNCCard>

          <JNCCard className="spec-card" hover={false}>
            <span>🧩</span>
            <h3>Best For</h3>
            <p>{material?.bestFor || "General 3D printing"}</p>
          </JNCCard>
        </div>

        {material?.notes && (
          <p
            style={{
              opacity: 0.85,
              marginTop: "24px",
              maxWidth: "900px",
              lineHeight: 1.7,
            }}
          >
            {material.notes}
          </p>
        )}
      </section>

      {product.applications?.length > 0 && (
        <section className="section">
          <h2>Recommended Uses</h2>

          <ul className="feature-list">
            {product.applications.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      )}

      {product.printerCompatibility?.length > 0 && (
        <section className="section">
          <h2>Compatible Printers</h2>

          <ul className="feature-list">
            {product.printerCompatibility.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      )}

      <section className="section">
        <JNCCard
          className="product-recommendation"
          hover={false}
        >
          <Badge color="blue">
            💡 JNC3Designs Recommendation
          </Badge>

          <h2>{product.name}</h2>

          <p>
            This material is a dependable option for makers, businesses,
            schools, prototypes, and everyday printing projects. Local pickup
            also means less waiting when you need to keep your printers moving.
          </p>
        </JNCCard>
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
              <FilamentSwatch
                color={item.color}
                size={42}
              />

              <span>{item.color}</span>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
