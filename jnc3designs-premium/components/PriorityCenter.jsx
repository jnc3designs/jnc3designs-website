import { getOrderStats } from "../lib/orderStats";
import { getInventoryStats } from "../lib/inventoryStats";
import Badge from "./Badge";
import JNCCard from "./JNCCard";

export default function PriorityCenter() {
  const { rushOrders } = getOrderStats();

  const {
    lowInventoryProducts,
  } = getInventoryStats();

  return (
    <section className="section">
      <Badge color="red">
        🚨 Priority Center
      </Badge>

      <h2>Needs Attention</h2>

      <div className="priority-grid">
        <JNCCard hover={false}>
          <h3>🚀 Rush Orders</h3>

          <strong>{rushOrders}</strong>

          <p>
            Require immediate attention.
          </p>
        </JNCCard>

        <JNCCard hover={false}>
          <h3>🧵 Low Inventory</h3>

          <strong>{lowInventoryProducts}</strong>

          <p>
            Products needing restock.
          </p>
        </JNCCard>
      </div>
    </section>
  );
}
