import { printers } from "../data/printers";
import { products } from "../data/catalog";
import { getOrderStats } from "../lib/orderStats";

import Badge from "./Badge";
import JNCCard from "./JNCCard";

export default function NextActions() {
  const actions = [];

  const {
    activeRushOrdersList,
  } = getOrderStats();

  const rushOrder = activeRushOrdersList[0];

  if (rushOrder) {
    actions.push(
      `Review rush order ${rushOrder.id}.`
    );
  }

  const idlePrinter = printers.find(
    (printer) => printer.status === "Idle"
  );

  if (idlePrinter) {
    actions.push(
      `Assign a job to ${idlePrinter.name}.`
    );
  }

  const lowMaterial = products.find(
    (product) => Number(product.stock) <= 2
  );

  if (lowMaterial) {
    actions.push(
      `Restock ${lowMaterial.name}.`
    );
  }

  if (actions.length === 0) {
    actions.push(
      "Everything is caught up. Great job!"
    );
  }

  return (
    <section className="section">
      <Badge color="green">
        ✅ Next Actions
      </Badge>

      <h2>Recommended Next Steps</h2>

      <div className="next-actions-grid">
        {actions.map((action) => (
          <JNCCard
            key={action}
            hover={false}
          >
            {action}
          </JNCCard>
        ))}
      </div>
    </section>
  );
}
