import Badge from "../../components/Badge";
import CustomerHub from "../../components/CustomerHub";
import DailyBrief from "../../components/DailyBrief";
import InventorySummary from "../../components/InventorySummary";
import OperationsModuleCard from "../../components/OperationsModuleCard";
import BusinessMetrics from "../../components/BusinessMetrics";
import PriorityCenter from "../../components/PriorityCenter";
import PrintFarmStatus from "../../components/PrintFarmStatus";
import CapacityOverview from "../../components/CapacityOverview";
import MissionControlHero from "../../components/MissionControlHero";

export default function OperationsPage() {
  return (
    <main>
      <section className="section">
       <MissionControlHero />
        <p className="operations-intro">
Mission Control gives you a real-time view of your business, helping you prioritize work, monitor production, track inventory, and stay ahead of customer needs.
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
  href="/operations/inventory"
  buttonText="Open Inventory"
  status="active"
/>
          <OperationsModuleCard
  badge="🖨️ Production"
  badgeColor="yellow"
  title="Production"
  description="Manage printers, active jobs, deadlines, and maintenance."
  href="/operations/production"
  buttonText="Open Production"
  status="active"
/>

          <OperationsModuleCard
  badge="👥 Customers"
  badgeColor="dark"
  title="Customer Hub"
  description="View customer history, notes, feedback, and follow-ups."
  href="/operations/customers"
  buttonText="Open Customers"
  status="active"
/>
        </div>
      </section>

      <DailyBrief />
              <BusinessMetrics />
              <PriorityCenter />
    <PrintFarmStatus />
    <CapacityOverview />

      <InventorySummary />

      <CustomerHub />
    </main>
  );
}
