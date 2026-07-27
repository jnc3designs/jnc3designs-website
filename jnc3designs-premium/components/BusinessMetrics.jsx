import { getOrderStats } from "../lib/orderStats";
import JNCCard from "./JNCCard";
import Badge from "./Badge";

export default function BusinessMetrics() {
  const {
    activeOrders,
    completedOrders,
    totalSales,
    paymentsReceived,
  } = getOrderStats();

  return (
    <section className="section">
      <Badge color="orange">
        📈 Business Metrics
      </Badge>

      <h2>Business Snapshot</h2>

      <div className="metrics-grid">
        <JNCCard hover={false}>
          <strong>{activeOrders}</strong>
          <p>Active Orders</p>
        </JNCCard>

        <JNCCard hover={false}>
          <strong>{completedOrders}</strong>
          <p>Completed Orders</p>
        </JNCCard>

        <JNCCard hover={false}>
          <strong>
            ${totalSales.toFixed(2)}
          </strong>
          <p>Total Sales</p>
        </JNCCard>

        <JNCCard hover={false}>
          <strong>
            ${paymentsReceived.toFixed(2)}
          </strong>
          <p>Payments Received</p>
        </JNCCard>
      </div>
    </section>
  );
}
