import { supplyCategories } from "../../data/products";

export default function SupplyPage() {
  return (
    <main>
      <section className="section">
        <h1>JNC3 Supply</h1>

        <p style={{ opacity: 0.85, maxWidth: "900px" }}>
          West Texas' local source for 3D printing filament. JNC3Designs is an
          official ZYLtech Engineering Filament reseller serving Midland,
          Odessa, and the Permian Basin.
        </p>

        <p className="hero-subnote">
          Local Pickup Available • Midland, TX • Message for Current Inventory
        </p>
      </section>

      <section className="section">
        <h2>Shop by Material</h2>

        <div className="supply-grid">
          {supplyCategories.map((category) => (
            <div className="supply-card" key={category.slug}>
              <h3>{category.name}</h3>
              <p>{category.description}</p>

              <a href={`/supply/${category.slug}`} className="button-primary">
                Shop {category.name} →
              </a>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
