import { products } from "../data/catalog";
import Badge from "./Badge";
import JNCCard from "./JNCCard";

export default function DailyBrief() {
  const lowStock = products.filter(
    (item) => Number(item.stock) > 0 && Number(item.stock) <= 3
  ).length;

  const outOfStock = products.filter(
    (item) => Number(item.stock) <= 0
  ).length;

  const totalProducts = products.length;

  const messages = [];

  if (outOfStock > 0) {
    messages.push(
      `Restock ${outOfStock} out-of-stock product${
        outOfStock > 1 ? "s" : ""
      }.`
    );
  }

  if (lowStock > 0) {
    messages.push(
      `Review ${lowStock} low-stock product${
        lowStock > 1 ? "s" : ""
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
