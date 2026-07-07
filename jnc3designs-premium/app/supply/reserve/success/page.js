export default function ReservationSuccessPage() {
  return (
    <main className="section">
      <section className="section">
        <h1>Reservation Received!</h1>

        <p style={{ opacity: 0.85, maxWidth: "800px" }}>
          Thank you for reserving filament with JNC3 Supply. We’ll review your
          request and contact you shortly to confirm availability and arrange
          local pickup in Midland, TX.
        </p>

        <div className="spec-grid" style={{ marginTop: "30px" }}>
          <div className="spec-card">
            <span>📦</span>
            <h3>Reservation Submitted</h3>
            <p>Your request has been sent to JNC3Designs.</p>
          </div>

          <div className="spec-card">
            <span>📍</span>
            <h3>Local Pickup</h3>
            <p>Pickup is available in Midland, Texas.</p>
          </div>

          <div className="spec-card">
            <span>📞</span>
            <h3>We’ll Contact You</h3>
            <p>We’ll reach out to confirm details and pickup timing.</p>
          </div>
        </div>

        <div className="hero-buttons" style={{ marginTop: "30px" }}>
          <a href="/supply" className="button-primary">
            Back to JNC3 Supply
          </a>

          <a href="/gallery" className="button-primary">
            View Gallery
          </a>
        </div>
      </section>
    </main>
  );
}
