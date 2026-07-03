import { supplyCategories, products } from "../../../data/catalog";
import ProductCard from "../../../components/ProductCard";

export default function CategoryPage({ params }) {
  const category = supplyCategories.find(
    (item) => item.slug === params.category
  );

  const categoryProducts = products.filter(
    (product) => product.category === params.category
  );

  if (!category) {
    return (
      <main>
        <section className="section">
          <h1>Material Not Found</h1>
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
        <a href="/supply" className="underline">
          ← Back to JNC3 Supply
        </a>

        <h1>{category.name} Filament</h1>

        <p style={{ opacity: 0.85, maxWidth: "900px" }}>
          {category.description}
        </p>

        <p className="hero-subnote">
          Local Pickup Available • Midland, TX • Official ZYLtech Reseller
        </p>
      </section>

      <section className="section">
        <h2>Available {category.name}</h2>

        <p style={{ opacity: 0.75, marginBottom: "24px" }}>
          Showing {categoryProducts.length} product
          {categoryProducts.length === 1 ? "" : "s"}.
        </p>

        <div className="product-grid">
          {categoryProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}
