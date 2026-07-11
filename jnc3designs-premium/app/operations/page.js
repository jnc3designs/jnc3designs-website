import Badge from "../../components/Badge";
import InventorySummary from "../../components/InventorySummary";
import JNCCard from "../../components/JNCCard";
import DailyBrief from "../../components/DailyBrief";
import CustomerHub from "../../components/CustomerHub";

export default function OperationsPage() {
  return (
    <main>
      <section className="section">
        <Badge color="blue">⚙️ Internal Business System</Badge>

        <h1>JNC Operations</h1>

        <p className="operations-intro">
          The operating system for JNC3Designs. Track inventory, orders,
          production, customers, and the work that needs your attention.
        </p>

        <div className="operations-grid">
          <JNCCard className="operations-module-card" hover={false}>
            <Badge color="blue">📦 Orders</Badge>

            <h3>Order Queue</h3>

            <p>Track customer orders from quote through final pickup.</p>

            <span className="operations-coming-soon">
              Module coming in a future forging
            </span>
          </JNCCard>

          <JNCCard className="operations-module-card" hover={false}>
            <Badge color="green">🧵 Inventory</Badge>

            <h3>Inventory</h3>

            <p>
              Monitor filament quantities and identify products that need to be
              restocked.
            </p>

            <span className="operations-active-module">
              Live inventory connected
            </span>
          </JNCCard>

          <JNCCard className="operations-module-card" hover={false}>
            <Badge color="yellow">🖨️ Production</Badge>

            <h3>Print Queue</h3>

            <p>Manage printers, active jobs, deadlines, and maintenance.</p>

            <span className="operations-coming-soon">
              Module coming in a future forging
            </span>
          </JNCCard>

          <JNCCard className="operations-module-card" hover={false}>
            <Badge color="dark">👥 Customers</Badge>

            <h3>Customer Hub</h3>

            <p>View customer history, notes, feedback, and follow-ups.</p>

            <span className="operations-coming-soon">
              Module coming in a future forging
            </span>
          </JNCCard>
        </div>
      </section>
                
<DailyBrief />
      <InventorySummary />
                <CustomerHub />
    </main>
  );
}
