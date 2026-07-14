import OperationsHeader from "../../../components/OperationsHeader";
import JNCCard from "../../../components/JNCCard";
import Badge from "../../../components/Badge";

export default function ProductionPage() {
  return (
    <main>
      <OperationsHeader
        badge="🖨️ Operations Module"
        badgeColor="yellow"
        title="Production"
        description="Monitor printer activity, production jobs, maintenance, and print workflow."
        backHref="/operations"
        backLabel="Operations"
      />

      <section className="section">

        <Badge color="yellow">
          🏗 Production Workspace
        </Badge>

        <div className="operations-grid">

          <JNCCard hover={false}>
            <h3>🖨️ Active Printers</h3>

            <p>
              This module will monitor printer availability and current jobs.
            </p>
          </JNCCard>

          <JNCCard hover={false}>
            <h3>📋 Print Queue</h3>

            <p>
              View every print waiting to be started.
            </p>
          </JNCCard>

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
