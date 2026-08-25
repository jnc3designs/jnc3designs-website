import { orders } from "../data/orders";
import { getProductionQueue } from "../lib/productionQueue";
import Badge from "./Badge";
import JNCCard from "./JNCCard";

function formatDueDate(dueDate) {
  if (!dueDate) {
    return "No Due Date";
  }

  const date = new Date(
    `${dueDate}T00:00:00`
  );

  if (Number.isNaN(date.getTime())) {
    return dueDate;
  }

  return date.toLocaleDateString([], {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function ProductionQueue() {
  const queue = getProductionQueue(
    orders
  );

  return (
    <section className="section">
      <Badge color="blue">
        📋 Production Queue
      </Badge>

      <h2>Queued Production</h2>

      <p className="operations-muted">
        Active orders prioritized by rush status and due date.
      </p>

      {queue.length === 0 ? (
        <JNCCard hover={false}>
          <h3>Queue Clear</h3>

          <p>
            No active production orders are waiting.
          </p>
        </JNCCard>
      ) : (
        <div className="operations-grid">
          {queue.map((order) => (
            <JNCCard
              key={order.id}
              hover={false}
            >
              <div>
                <strong>
                  #{order.queuePosition}
                </strong>

                <h3>{order.item}</h3>
              </div>

              <p>
                <strong>Order:</strong>{" "}
                {order.id}
              </p>

              <p>
                <strong>Customer:</strong>{" "}
                {order.customer}
              </p>

              <p>
                <strong>Quantity:</strong>{" "}
                {order.quantity}
              </p>

              <p>
                <strong>Priority:</strong>{" "}
                {order.priority}
              </p>

              <p>
                <strong>Stage:</strong>{" "}
                {order.stage}
              </p>

              <p>
                <strong>Due:</strong>{" "}
                {formatDueDate(
                  order.dueDate
                )}
              </p>
            </JNCCard>
          ))}
        </div>
      )}
    </section>
  );
}
