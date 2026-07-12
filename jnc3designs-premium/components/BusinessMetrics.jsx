import { orders } from "../data/orders";
import JNCCard from "./JNCCard";
import Badge from "./Badge";

export default function BusinessMetrics() {

  const activeOrders = orders.filter(
    order => order.stage !== "Completed"
  ).length;

  const completedOrders = orders.filter(
    order => order.stage === "Completed"
  ).length;

  const totalRevenue = orders.reduce(
    (sum, order) => sum + Number(order.total),
    0
  );

  const depositsReceived = orders.reduce(
    (sum, order) => sum + Number(order.amountPaid),
    0
  );

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
            ${totalRevenue.toFixed(2)}
          </strong>
          <p>Total Sales</p>
        </JNCCard>

        <JNCCard hover={false}>
          <strong>
            ${depositsReceived.toFixed(2)}
          </strong>
          <p>Payments Received</p>
        </JNCCard>

      </div>

    </section>

  );

}
