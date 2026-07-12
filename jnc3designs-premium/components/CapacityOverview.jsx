import { printers } from "../data/printers";
import Badge from "./Badge";
import JNCCard from "./JNCCard";

export default function CapacityOverview() {
  const printing = printers.filter(
    (p) => p.status === "Printing"
  ).length;

  const idle = printers.filter(
    (p) => p.status === "Idle"
  ).length;

  const future = printers.filter(
    (p) => p.status === "Future"
  ).length;

  const utilization =
    Math.round(
      (printing / (printing + idle || 1)) * 100
    );

  return (
    <section className="section">

      <Badge color="orange">
        📊 Capacity
      </Badge>

      <h2>Print Farm Capacity</h2>

      <div className="capacity-grid">

        <JNCCard hover={false}>
          <strong>{printing}</strong>
          <p>Printing</p>
        </JNCCard>

        <JNCCard hover={false}>
          <strong>{idle}</strong>
          <p>Available</p>
        </JNCCard>

        <JNCCard hover={false}>
          <strong>{future}</strong>
          <p>Future Printers</p>
        </JNCCard>

        <JNCCard hover={false}>
          <strong>{utilization}%</strong>
          <p>Current Utilization</p>
        </JNCCard>

      </div>

    </section>
  );
}
