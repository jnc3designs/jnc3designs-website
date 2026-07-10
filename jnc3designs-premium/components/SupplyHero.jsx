import Badge from "./Badge";
import JNCButton from "./JNCButton";

export default function SupplyHero() {
  return (
    <section className="section supply-hero">
      <Badge>🧵 JNC3 Supply</Badge>

      <h1 className="supply-hero-title">
        3D Printing Filament Available in Midland, TX
      </h1>

      <p className="supply-hero-copy">
        Shop locally stocked ZYLtech Engineering filament for makers,
        businesses, schools, and production printing throughout Midland,
        Odessa, and the Permian Basin.
      </p>

      <div className="supply-hero-points">
        <span>✓ Authorized ZYLtech Reseller</span>
        <span>✓ Local Pickup</span>
        <span>✓ Current Inventory Online</span>
        <span>✓ Personal Material Support</span>
      </div>

      <div className="hero-buttons supply-hero-buttons">
        <JNCButton href="#inventory">
          Browse Inventory
        </JNCButton>

        <JNCButton href="/supply/reserve" variant="outline">
          Reserve Filament
        </JNCButton>

        <JNCButton href="tel:4328940429" variant="outline">
          Ask About Availability
        </JNCButton>
      </div>
    </section>
  );
}
