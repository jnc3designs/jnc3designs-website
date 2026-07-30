import Badge from "./Badge";
import JNCCard from "./JNCCard";
import { getPrinterStats } from "../lib/printerStats";

export default function CapacityOverview() {
  const {
    printingPrinters,
    idlePrinters,
    futurePrinters,
    activeCapacityPercentage,
  } = getPrinterStats();

  return (
    <section className="section">

      <Badge color="orange">
        📊 Capacity
      </Badge>

      <h2>Print Farm Capacity</h2>

      <div className="capacity-grid">

        <JNCCard hover={false}>
          <strong>{printingPrinters}</strong>
          <p>Printing</p>
        </JNCCard>

        <JNCCard hover={false}>
          <strong>{idlePrinters}</strong>
          <p>Available</p>
        </JNCCard>

        <JNCCard hover={false}>
          <strong>{futurePrinters}</strong>
          <p>Future Printers</p>
        </JNCCard>

        <JNCCard hover={false}>
          <strong>{activeCapacityPercentage}%</strong>
          <p>Active Capacity</p>
        </JNCCard>

      </div>

    </section>
  );
}
