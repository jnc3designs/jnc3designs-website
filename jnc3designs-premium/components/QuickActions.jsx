import Badge from "./Badge";
import JNCButton from "./JNCButton";

export default function QuickActions() {
  return (
    <section className="section">

      <Badge color="blue">
        ⚡ Quick Actions
      </Badge>

      <h2>Start Your Day</h2>

      <p className="operations-muted">
        Jump directly to the areas you use most throughout the day.
      </p>

      <div className="quick-actions-grid">

        <JNCButton href="/admin/orders">
          📦 Orders
        </JNCButton>

        <JNCButton href="/admin/inventory">
          🧵 Inventory
        </JNCButton>

        <JNCButton href="/admin/customers">
          👥 Customers
        </JNCButton>

        <JNCButton href="/admin/production">
          🖨️ Print Farm
        </JNCButton>

      </div>

    </section>
  );
}
