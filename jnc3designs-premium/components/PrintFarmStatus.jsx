import { printers } from "../data/printers";
import Badge from "./Badge";
import JNCCard from "./JNCCard";

export default function PrintFarmStatus() {
  return (
    <section className="section">

      <Badge color="yellow">
        🖨️ Print Farm
      </Badge>

      <h2>Printer Status</h2>

      <div className="printfarm-grid">

        {printers.map((printer) => (

          <JNCCard
            key={printer.id}
            className="printer-card"
            hover={false}
          >

            <h3>{printer.name}</h3>

            <Badge
              color={
                printer.status === "Printing"
                  ? "green"
                  : printer.status === "Idle"
                  ? "blue"
                  : "dark"
              }
            >
              {printer.status}
            </Badge>

            <div className="printer-details">

              <p>
                <strong>Job:</strong><br />
                {printer.job}
              </p>

              <p>
                <strong>Material:</strong><br />
                {printer.material}
              </p>

              <p>
                <strong>Remaining:</strong><br />
                {printer.remaining}
              </p>

            </div>

          </JNCCard>

        ))}

      </div>

    </section>
  );
}
