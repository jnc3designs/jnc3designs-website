import { getOrderStats } from "../lib/orderStats";
import { products } from "../data/catalog";
import Badge from "./Badge";
import JNCCard from "./JNCCard";

export default function PriorityCenter() {
  const { rushOrders } = getOrderStats();

  const lowInventory = products.filter(
    (product) => Number(product.stock) <= 3
  );

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

          <strong>{lowInventory.length}</strong>

          <p>
            Products needing restock.
          </p>
        </JNCCard>
      </div>
    </section>
  );
}
