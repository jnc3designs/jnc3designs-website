import Badge from "../../components/Badge";
import CustomerHub from "../../components/CustomerHub";
import DailyBrief from "../../components/DailyBrief";
import InventorySummary from "../../components/InventorySummary";
import OperationsModuleCard from "../../components/OperationsModuleCard";
import BusinessMetrics from "../../components/BusinessMetrics";
import PriorityCenter from "../../components/PriorityCenter";

export default function OperationsPage() {
  return (
    <main>
      <section className="section">
        <Badge color="blue">
          ⚙️ Internal Business System
        </Badge>

        <h1>JNC Operations</h1>

        <p className="operations-intro">
          The operating system for JNC3Designs. Track inventory, orders,
          production, customers, and the work that needs your attention.
        </p>

        <div className="operations-grid">
          <OperationsModuleCard
            badge="📦 Orders"
            badgeColor="blue"
            title="Order Queue"
            description="Track customer orders from quote through final pickup."
            href="/operations/orders"
            buttonText="Open Orders"
            status="active"
          />

          <OperationsModuleCard
            badge="🧵 Inventory"
            badgeColor="green"
            title="Inventory"
            description="Monitor filament quantities and products that need restocking."
            status="active"
          />

          <OperationsModuleCard
            badge="🖨️ Production"
            badgeColor="yellow"
            title="Print Queue"
            description="Manage printers, active jobs, deadlines, and maintenance."
          />

          <OperationsModuleCard
            badge="👥 Customers"
            badgeColor="dark"
            title="Customer Hub"
            description="View customer history, notes, feedback, and follow-ups."
            status="active"
          />
        </div>
      </section>

      <DailyBrief />
              <BusinessMetrics />
              <PriorityCenter />

      <InventorySummary />

      <CustomerHub />
    </main>
  );
}
