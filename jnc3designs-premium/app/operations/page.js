import JNCCard from "../../components/JNCCard";
import Badge from "../../components/Badge";

export default function OperationsPage() {
  return (
    <main className="section">

      <h1>⚙️ JNC Operations</h1>

      <p className="operations-intro">
        The operating system for JNC3Designs.
      </p>

      <div className="operations-grid">

        <JNCCard hover={false}>
          <Badge color="blue">📦 Orders</Badge>

          <h3>Order Queue</h3>

          <p>
            Track customer orders from quote to pickup.
          </p>
        </JNCCard>

        <JNCCard hover={false}>
          <Badge color="green">🧵 Inventory</Badge>

          <h3>Inventory</h3>

          <p>
            Monitor filament, supplies, and stock levels.
          </p>
        </JNCCard>

        <JNCCard hover={false}>
          <Badge color="orange">🖨️ Production</Badge>

          <h3>Print Queue</h3>

          <p>
            Manage printers and active print jobs.
          </p>
        </JNCCard>

        <JNCCard hover={false}>
          <Badge color="purple">👥 Customers</Badge>

          <h3>Customer Hub</h3>

          <p>
            View customer history, notes, and relationships.
          </p>
        </JNCCard>

      </div>

    </main>
  );
}
