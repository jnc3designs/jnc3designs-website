import { printers } from "../data/printers";

function getStatusColor(status) {
  switch (status) {
    case "Printing":
      return "#22c55e";

    case "Idle":
      return "#3b82f6";

    case "Future":
    case "Offline":
      return "#9ca3af";

    default:
      return "#f59e0b";
  }
}

function getActivityMessage(printer) {
  if (printer.status === "Printing") {
    return printer.remaining && printer.remaining !== "--"
      ? `${printer.remaining} remaining`
      : "Print in progress";
  }

  if (printer.status === "Idle") {
    return "Ready for Job";
  }

  return "No Active Print";
}

export default function PrintFarmStatus() {
  return (
    <section className="print-farm-card">
      <div className="print-farm-header">
        <div>
          <h2>🖨 Print Farm Status</h2>

          <p className="print-farm-demo-label">
            Demo production data • Live printer integration coming later
          </p>
        </div>
      </div>

      <div className="printer-grid">
        {printers.map((printer) => {
          const statusColor = getStatusColor(printer.status);
          const activityMessage = getActivityMessage(printer);
          const isPrinting = printer.status === "Printing";

          return (
            <div
              className="printer-card"
              key={printer.id}
            >
              <div
                className="printer-status-dot"
                style={{
                  backgroundColor: statusColor,
                }}
              />

              <h3>{printer.name}</h3>

              <p className="printer-status">
                {printer.status}
              </p>

              <small>{activityMessage}</small>

              {isPrinting ? (
                <>
                  <div className="printer-progress">
                    <div
                      className="printer-progress-fill"
                      style={{
                        width: `${printer.utilization}%`,
                        backgroundColor: statusColor,
                      }}
                    />
                  </div>

                  <p className="printer-progress-text">
                    {printer.utilization}% Utilization
                  </p>
                </>
              ) : (
                <p className="printer-progress-text">
                  {activityMessage}
                </p>
              )}

              <p className="printer-job">
                📦 {printer.job}
              </p>

              <p className="printer-material">
                🧵 {printer.material}
              </p>

              <p className="printer-finish">
                🛠 Health: {printer.health}
              </p>

              <p className="printer-finish">
                ✅ Completed Today: {printer.completedToday}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
