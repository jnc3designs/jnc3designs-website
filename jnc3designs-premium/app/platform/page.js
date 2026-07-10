import Badge from "../../components/Badge";
import JNCButton from "../../components/JNCButton";
import JNCCard from "../../components/JNCCard";
import JNCInput from "../../components/JNCInput";
import InventoryBadge from "../../components/InventoryBadge";
import MaterialHighlights from "../../components/MaterialHighlights";

export default function PlatformPage() {
  return (
    <main className="section">
      <h1>⚒️ JNC Forge</h1>

      <p style={{ opacity: 0.8, maxWidth: "760px" }}>
        Build Once. Improve Forever.
      </p>

      <section className="section">
        <h2>Buttons</h2>

        <div className="hero-buttons">
          <JNCButton>Primary</JNCButton>
          <JNCButton variant="outline">Outline</JNCButton>
        </div>
      </section>

      <section className="section">
        <h2>Cards</h2>

        <JNCCard style={{ padding: "30px" }}>
          <h3>Platform Card</h3>
          <p>This is our reusable card component.</p>
        </JNCCard>
      </section>

      <section className="section">
        <h2>Badges</h2>

        <div className="hero-buttons">
          <Badge>Official Reseller</Badge>
          <Badge color="green">In Stock</Badge>
          <Badge color="yellow">Low Stock</Badge>
          <Badge color="red">Out of Stock</Badge>
        </div>
      </section>

      <section className="section">
        <h2>Inputs</h2>

        <JNCCard style={{ padding: "30px" }}>
          <JNCInput label="Customer Name" placeholder="John Smith" />
          <div style={{ height: "18px" }} />
          <JNCInput label="Email" type="email" placeholder="john@email.com" />
          <div style={{ height: "18px" }} />
          <JNCInput
            label="Notes"
            rows={4}
            placeholder="Tell us about your project..."
          />
        </JNCCard>
      </section>

      <section className="section">
        <h2>Business Components</h2>

        <JNCCard style={{ padding: "30px" }}>
          <h3>Inventory Badge</h3>

          <div className="hero-buttons">
            <InventoryBadge stock={8} />
            <InventoryBadge stock={3} />
            <InventoryBadge stock={1} />
            <InventoryBadge stock={0} />
          </div>
        </JNCCard>
      </section>
    </main>
  );
}
