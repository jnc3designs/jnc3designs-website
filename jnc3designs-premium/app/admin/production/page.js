import OperationsHeader from "../../../components/OperationsHeader";
import JNCCard from "../../../components/JNCCard";
import Badge from "../../../components/Badge";
import LivePrinterStatus from "../../../components/LivePrinterStatus";
import ProductionQueue from "../../../components/ProductionQueue";

export default function ProductionPage() {
  return (
    <main>
      <OperationsHeader
        badge="🖨️ Operations Module"
        badgeColor="yellow"
        title="Production"
        description="Monitor live printer activity, production jobs, maintenance, and print workflow."
        backHref="/admin"
        backLabel="Operations"
      />

      <section className="section">
        <Badge color="yellow">
          🏗 Live Production Workspace
        </Badge>

        <h2>Print Farm Activity</h2>

        <p className="operations-muted">
          Current printer information synchronized through JNC Bridge.
        </p>

        <LivePrinterStatus />
      </section>

      <ProductionQueue />

      <section className="section">
        <Badge color="blue">
          🛠 Production Management
        </Badge>

        <div className="operations-grid">
          <JNCCard hover={false}>
            <h3>⚠ Maintenance</h3>

            <p>
              Track nozzle changes, lubrication, and scheduled maintenance.
            </p>
          </JNCCard>

          <JNCCard hover={false}>
            <h3>📈 Production Metrics</h3>

            <p>
              Future print statistics and printer utilization.
            </p>
          </JNCCard>
        </div>
      </section>
    </main>
  );
}