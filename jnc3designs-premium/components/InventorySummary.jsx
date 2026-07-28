import { getInventoryStats } from "../lib/inventoryStats";
import Badge from "./Badge";
import InventoryBadge from "./InventoryBadge";
import JNCCard from "./JNCCard";

export default function InventorySummary() {
  const {
    totalProducts,
    totalUnits,
    lowInventoryProducts,
    outOfStockProducts,
    lowInventoryProductsList,
    outOfStockProductsList,
  } = getInventoryStats();

  const inventoryAttention = [
    ...outOfStockProductsList,
    ...lowInventoryProductsList,
  ]
    .sort((a, b) => Number(a.stock) - Number(b.stock))
    .slice(0, 6);

  return (
    <section className="section">
      <div className="operations-section-heading">
        <div>
          <Badge color="green">🧵 Live Catalog Data</Badge>

          <h2>Inventory Overview</h2>

          <p>
            Current stock information calculated directly from the JNC3 Supply
            catalog.
          </p>
        </div>
      </div>

      <div className="operations-stat-grid">
        <JNCCard className="operations-stat-card" hover={false}>
          <span>📦</span>
          <strong>{totalProducts}</strong>
          <p>Products Listed</p>
        </JNCCard>

        <JNCCard className="operations-stat-card" hover={false}>
          <span>🧵</span>
          <strong>{totalUnits}</strong>
          <p>Total Rolls Available</p>
        </JNCCard>

        <JNCCard className="operations-stat-card" hover={false}>
          <span>🟡</span>
          <strong>{lowInventoryProducts}</strong>
          <p>Low-Stock Products</p>
        </JNCCard>

        <JNCCard className="operations-stat-card" hover={false}>
          <span>🔴</span>
          <strong>{outOfStockProducts}</strong>
          <p>Out-of-Stock Products</p>
        </JNCCard>
      </div>

      <JNCCard className="inventory-attention-card" hover={false}>
        <h3>Inventory Needing Attention</h3>

        {inventoryAttention.length > 0 ? (
          <div className="inventory-attention-list">
            {inventoryAttention.map((product) => (
              <div className="inventory-attention-item" key={product.id}>
                <div>
                  <strong>{product.name}</strong>

                  <span>
                    {product.material} • {product.color}
                  </span>
                </div>

                <InventoryBadge stock={product.stock} />
              </div>
            ))}
          </div>
        ) : (
          <p className="operations-muted">
            All current products have healthy inventory levels.
          </p>
        )}
      </JNCCard>
    </section>
  );
}
