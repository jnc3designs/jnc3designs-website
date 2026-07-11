import Badge from "../../components/Badge";
import JNCButton from "../../components/JNCButton";
import JNCCard from "../../components/JNCCard";
import JNCInput from "../../components/JNCInput";
import InventoryBadge from "../../components/InventoryBadge";
import MaterialHighlights from "../../components/MaterialHighlights";
import ForgeStatus from "../../components/ForgeStatus";
import ForgeJournal from "../../components/ForgeJournal";
import Blueprint from "../../components/Blueprint";
import EngineeringPrinciples from "../../components/EngineeringPrinciples";

export default function PlatformPage() {
  return (
    <main className="section">
      <h1>⚒️ JNC Forge</h1>

    <p className="hero-copy">
  Engineering Dashboard
</p>

      <p style={{ opacity: 0.8, maxWidth: "760px" }}>
        Build Once. Improve Forever.
      </p>
          
       <ForgeStatus />
          <Blueprint />

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
              <section className="section">

  <h2>Material Intelligence</h2>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
      gap: "24px",
      marginTop: "24px",
    }}
  >

    <MaterialHighlights material="pla" />

    <MaterialHighlights material="petg" />

    <MaterialHighlights material="asa" />

    <MaterialHighlights material="petg-cf" />

  </div>

</section>
    <ForgeJournal />
    <EngineeringPrinciples />
    </main>
  );
}
