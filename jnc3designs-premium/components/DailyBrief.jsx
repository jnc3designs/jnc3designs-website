import { getInventoryStats } from "../lib/inventoryStats";
import Badge from "./Badge";
import JNCCard from "./JNCCard";

export default function DailyBrief() {
  const {
    lowInventoryProducts,
    outOfStockProducts,
    totalProducts,
  } = getInventoryStats();

  const messages = [];

  if (outOfStockProducts > 0) {
    messages.push(
      `Restock ${outOfStockProducts} out-of-stock product${
        outOfStockProducts > 1 ? "s" : ""
      }.`
    );
  }

  if (lowInventoryProducts > 0) {
    messages.push(
      `Review ${lowInventoryProducts} low-stock product${
        lowInventoryProducts > 1 ? "s" : ""
      }.`
    );
  }

  if (totalProducts > 0) {
    messages.push(
      "Review new customer reservations before the next market."
    );
  }

  return (
    <section className="section">
      <JNCCard
        className="daily-brief-card"
        hover={false}
      >
        <Badge color="blue">
          ☀️ Daily Brief
        </Badge>

        <h2>Good Morning, Jared</h2>

        <p className="daily-brief-copy">
          Here's what deserves your attention today.
        </p>

        <div className="daily-brief-list">
          {messages.map((message) => (
            <div
              key={message}
              className="daily-brief-item"
            >
              ✓ {message}
            </div>
          ))}
        </div>
      </JNCCard>
    </section>
  );
}
