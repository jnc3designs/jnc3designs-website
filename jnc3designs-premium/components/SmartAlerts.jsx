import { orders } from "../data/orders";
import { products } from "../data/catalog";
import { printers } from "../data/printers";

import Badge from "./Badge";
import JNCCard from "./JNCCard";

export default function SmartAlerts() {
  const alerts = [];

  // Rush Orders
  const rushOrders = orders.filter(
    (order) => order.priority === "Rush"
  );

  if (rushOrders.length > 0) {
    alerts.push({
      type: "warning",
      title: `${rushOrders.length} Rush Order${rushOrders.length > 1 ? "s" : ""}`,
      message: "Review these jobs before starting new production.",
    });
  }

  // Low Stock
  const lowStock = products.filter(
    (product) => Number(product.stock) <= 3
  );

  if (lowStock.length > 0) {
    alerts.push({
      type: "inventory",
      title: `${lowStock.length} Low Inventory Item${lowStock.length > 1 ? "s" : ""}`,
      message: "Consider placing a filament restock order.",
    });
  }

  // Idle Printers
  const idlePrinters = printers.filter(
    (printer) => printer.status === "Idle"
  );

  if (idlePrinters.length > 0) {
    alerts.push({
      type: "printer",
      title: `${idlePrinters.length} Printer Available`,
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
