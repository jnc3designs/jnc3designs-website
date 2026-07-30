import { printers } from "../data/printers";
import { getOrderStats } from "../lib/orderStats";
import { getInventoryStats } from "../lib/inventoryStats";
import { getPrinterStats } from "../lib/printerStats";
import Badge from "./Badge";
import JNCCard from "./JNCCard";

export default function SmartAlerts() {
  const alerts = [];

  const { rushOrders } = getOrderStats();

  const {
    lowInventoryProducts,
    outOfStockProducts,
  } = getInventoryStats();

  // Rush Orders
  if (rushOrders > 0) {
    alerts.push({
      type: "warning",
      title: `${rushOrders} Rush Order${rushOrders > 1 ? "s" : ""}`,
      message: "Review these jobs before starting new production.",
    });
  }

  // Low Inventory
  const inventoryAttention =
    lowInventoryProducts + outOfStockProducts;

  if (inventoryAttention > 0) {
    alerts.push({
      type: "inventory",
      title: `${inventoryAttention} Low Inventory Item${
        inventoryAttention > 1 ? "s" : ""
      }`,
      message: "Consider placing a filament restock order.",
    });
  }

  // Idle Printers
  const { idlePrinters } = getPrinterStats();

  if (idlePrinters.length > 0) {
    alerts.push({
      type: "printer",
      title: `${idlePrinters.length} Printer${
        idlePrinters.length > 1 ? "s" : ""
      } Available`,
      message: "Production capacity is available for another job.",
    });
  }

  if (alerts.length === 0) {
    alerts.push({
      type: "success",
      title: "Everything Looks Good",
      message: "No immediate action is required.",
    });
  }

  return (
    <section className="section">
      <Badge color="red">
        🚨 Smart Alerts
      </Badge>

      <h2>Mission Control Alerts</h2>

      <div className="smart-alert-grid">
        {alerts.map((alert, index) => (
          <JNCCard
            key={index}
            className="smart-alert-card"
            hover={false}
          >
            <h3>{alert.title}</h3>

            <p>{alert.message}</p>
          </JNCCard>
        ))}
      </div>
    </section>
  );
}
