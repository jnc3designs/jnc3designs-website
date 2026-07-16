export default function PrintFarmStatus() {
  const printers = [
    {
      name: "P1S",
      status: "Printing",
      detail: "3h 12m remaining",
      progress: 68,
      job: "2\" NPT Adapter",
      material: "ASA • Black",
      finish: "8:42 PM",
      color: "#22c55e",
    },
    {
      name: "X1C",
      status: "Idle",
      detail: "Ready",
      progress: 0,
      job: "Waiting for Job",
      material: "PLA • White",
      finish: "6:42 PM",
      color: "#3b82f6",
    },
    {
      name: "P2S",
      status: "Printing",
      detail: "47m remaining",
      progress: 91,
      job: "Veteran Pen Set",
      material: "PETG • Gray",
      finish: "5:42 PM",
      color: "#22c55e",
    },
    {
      name: "H2D",
      status: "Offline",
      detail: "Coming Soon",
      progress: 0,
      job: "Offline",
      material: "--",
      finish: "__",
      color: "#9ca3af",
    },
  ];

  return (
  <section className="print-farm-card">
    <h2>🖨 Print Farm Status</h2>

    <div className="printer-grid">
      {printers.map((printer) => (
        <div className="printer-card" key={printer.name}>
          <div
            className="printer-status-dot"
            style={{ backgroundColor: printer.color }}
          />

          <h3>{printer.name}</h3>

          <p className="printer-status">
            {printer.status}
          </p>

          <small>{printer.detail}</small>
          <div className="printer-progress">
      
  <div
  
    className="printer-progress-fill"
    style={{
      width: `${printer.progress}%`,
      backgroundColor: printer.color,
    }}
  />
</div>
<p className="printer-progress-text">
  {printer.progress}% Complete
</p>
<p className="printer-job">
  📦 {printer.job}
</p>
<p className="printer-material">
  🧵 {printer.material}
</p>
<p className="printer-finish">
  🕒 Estimated Finish: {printer.finish}
</p>
        </div>
      ))}
    </div>
  </section>
  );
}
