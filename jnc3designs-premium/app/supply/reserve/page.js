"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Badge from "../../../components/Badge";

function getStockText(stock) {
  const count = Number(stock);

  if (!count) return "Stock availability will be confirmed";
  if (count === 1) return "Only 1 Roll Available";
  return `${count} Rolls Available`;
}

function ReserveForm() {
  const params = useSearchParams();

  const product = params.get("product") || "";
  const material = params.get("material") || "";
  const color = params.get("color") || "";
  const price = params.get("price") || "";
  const stock = params.get("stock") || "";
  const image = params.get("image") || "";

  return (
    <main className="section">
      <h1>Reserve Your Filament</h1>

      <p style={{ opacity: 0.8, marginBottom: "30px", maxWidth: "850px" }}>
        We’ll hold your filament for local pickup in Midland, TX. No payment is
        required through this form.
      </p>

      <div className="reserve-layout">
        <div className="reserve-summary">
          {image && (
            <img src={image} alt={product} className="reserve-image" />
          )}

          <Badge>⭐ Official ZYLtech Engineering Filament</Badge>

          <h2 style={{ marginTop: "18px" }}>{product}</h2>

          <p style={{ opacity: 0.75 }}>
            {material} • {color}
          </p>

          <p className="reserve-price">
            {price ? `$${price}` : "Price confirmed at pickup"}
          </p>

          <p className="reserve-stock">📦 {getStockText(stock)}</p>

          <p style={{ opacity: 0.85 }}>
            📍 Local Pickup
            <br />
            Midland, Texas
          </p>
        </div>

        <form className="reserve-form">
          <label>Product</label>
          <input value={product} readOnly />

          <label>Material</label>
          <input value={material} readOnly />

          <label>Color</label>
          <input value={color} readOnly />

          <label>Price</label>
          <input value={price ? `$${price}` : ""} readOnly />

          <label>Your Name</label>
          <input placeholder="John Smith" />

          <label>Phone Number</label>
          <input placeholder="432-555-1234" />

          <label>Quantity</label>
          <input type="number" defaultValue={1} min={1} />

          <label>Notes</label>
          <textarea rows={5} placeholder="Anything you'd like us to know..." />

          <button className="button-primary" type="button">
            Reserve My Filament
          </button>
        </form>
      </div>
    </main>
  );
}

export default function ReservePage() {
  return (
    <Suspense fallback={<main className="section">Loading...</main>}>
      <ReserveForm />
    </Suspense>
  );
}
