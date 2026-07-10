"use client";

import { useState } from "react";
import { supplyCategories, products } from "../../data/catalog";
import ProductCard from "../../components/ProductCard";
import SupplyHero from "../../components/SupplyHero";

export default function SupplyPage() {
    const [activeCategory, setActiveCategory] = useState("all");
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      activeCategory === "all" || product.category === activeCategory;

    const matchesSearch =
      product.name.toLowerCase().includes(search.toLowerCase()) ||
      product.color.toLowerCase().includes(search.toLowerCase()) ||
      product.material.toLowerCase().includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });
  return (
    <main>
      <SupplyHero />

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
            <section className="section">
  <h2>Featured Filament</h2>

  <p style={{ opacity: 0.8, marginBottom: "24px" }}>
    Browse our current inventory of ZYLtech Engineering Filament available for
    local pickup in Midland, TX.
  </p>

  <div className="product-grid">
    {products.slice(0, 6).map((product) => (
      <ProductCard key={product.id} product={product} />
    ))}
  </div>
</section>
    <section id="inventory" className="section">
  <h2>Browse All Inventory</h2>

  <p style={{ opacity: 0.8, marginBottom: "20px" }}>
    Search by color, material, or product name.
  </p>

  <div className="supply-filter-bar">
    <button
      className={activeCategory === "all" ? "filter-active" : ""}
      onClick={() => setActiveCategory("all")}
    >
      All
    </button>

    {supplyCategories.map((category) => (
      <button
        key={category.slug}
        className={activeCategory === category.slug ? "filter-active" : ""}
        onClick={() => setActiveCategory(category.slug)}
      >
        {category.name}
      </button>
    ))}
  </div>

  <input
    className="supply-search"
    type="text"
    placeholder="Search blue, PETG, silk..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
  />

  <p style={{ opacity: 0.7, marginTop: "16px", marginBottom: "20px" }}>
    Showing {filteredProducts.length} product
    {filteredProducts.length === 1 ? "" : "s"}.
  </p>

  <div className="product-grid">
    {filteredProducts.map((product) => (
      <ProductCard key={product.id} product={product} />
    ))}
  </div>
</section>
      <section id="filament-order" className="section">
  <h2>Reserve Filament for Pickup</h2>

  <p style={{ opacity: 0.8, marginBottom: "20px" }}>
    Ready to reserve filament? Message JNC3Designs with the material, color,
    and quantity you need. Local pickup available in Midland, TX.
  </p>

  <div className="hero-buttons">
    <a
      href="https://www.facebook.com/profile.php?id=61579552738924"
      target="_blank"
      rel="noreferrer"
      className="button-primary"
    >
      Message on Facebook
    </a>

    <a href="tel:4328940429" className="button-primary">
      Call 432-894-0429
    </a>
  </div>
</section>
    </main>
  );
}
