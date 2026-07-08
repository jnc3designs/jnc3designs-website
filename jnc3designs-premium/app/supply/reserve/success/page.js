import JNCCard from "../../../../components/JNCCard";
import JNCButton from "../../../../components/JNCButton";

export default function ReservationSuccessPage() {
  return (
    <main className="section">
      <section className="section success-page">
        <div className="success-icon">✅</div>

        <h1>Reservation Received!</h1>

        <p className="success-message">
          Thank you for reserving filament with JNC3 Supply. We’ll review your
          request and contact you shortly to confirm availability and arrange
          local pickup in Midland, TX.
        </p>

        <p className="success-local">
          Thanks for supporting a local West Texas business.
        </p>

        <div className="spec-grid" style={{ marginTop: "34px" }}>
          <JNCCard className="spec-card">
            <span>📦</span>
            <h3>Reservation Submitted</h3>
            <p>Your request has been sent to JNC3Designs.</p>
          </JNCCard>

          <JNCCard className="spec-card">
            <span>📍</span>
            <h3>Local Pickup</h3>
            <p>Pickup is available in Midland, Texas.</p>
          </JNCCard>

          <JNCCard className="spec-card">
            <span>📞</span>
            <h3>We’ll Contact You</h3>
            <p>We’ll reach out to confirm details and pickup timing.</p>
          </JNCCard>
        </div>

        <section className="success-help">
          <h2>Need Help?</h2>

          <p>
            Have a question about pickup, availability, or which filament is best
            for your project? Reach out anytime — we’re happy to help.
          </p>

          <div className="hero-buttons" style={{ marginTop: "22px" }}>
            <JNCButton href="tel:4328940429">
  Call 432-894-0429
</JNCButton>

<JNCButton href="https://www.facebook.com/profile.php?id=61579552738924">
  Message on Facebook
</JNCButton>
          </div>
        </section>

        <div className="hero-buttons" style={{ marginTop: "34px" }}>
          <JNCButton href="/supply">
  Back to JNC3 Supply
</JNCButton>

<JNCButton href="/gallery">
  View Gallery
</JNCButton>
        </div>
      </section>
    </main>
  );
}
