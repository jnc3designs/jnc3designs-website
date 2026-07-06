"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";

function ReserveForm() {
  const params = useSearchParams();

  const product = params.get("product") || "";
  const material = params.get("material") || "";
  const color = params.get("color") || "";
  const price = params.get("price") || "";

  return (
    <main className="section">
      <h1>Reserve Filament</h1>

      <p style={{ opacity: 0.8, marginBottom: "30px" }}>
        Complete the form below and we'll reserve your filament for local pickup.
      </p>

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

        <button className="button-primary">
          Reserve Pickup
        </button>
      </form>
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
