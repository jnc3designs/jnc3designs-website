import { orders } from "../data/orders";
import Badge from "./Badge";
import JNCCard from "./JNCCard";
import OrderTimeline from "./OrderTimeline";

function getStageColor(stage) {
  if (stage === "Completed" || stage === "Ready for Pickup") {
    return "green";
  }

  if (stage === "Printing" || stage === "Quality Check") {
    return "blue";
  }

  if (stage === "Deposit Received" || stage === "Design Approved") {
    return "yellow";
  }

  return "dark";
}

function formatCurrency(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(Number(value || 0));
}

function formatDate(value) {
  if (!value) return "No due date";

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${value}T00:00:00Z`));
}

export default function OrderQueue() {
  if (orders.length === 0) {
    return (
      <JNCCard className="order-empty-state" hover={false}>
        <h2>No Active Orders</h2>

        <p>
          New customer orders will appear here once they are added to JNC
          Operations.
        </p>
      </JNCCard>
    );
  }

  return (
    <section className="section">
      <div className="operations-section-heading">
        <Badge color="blue">📦 Live Order Data</Badge>

        <h2>Active Order Queue</h2>

        <p>
          Track payment, deadlines, and production progress from one place.
        </p>
      </div>

      <div className="order-queue-list">
        {orders.map((order) => {
          const balance = Number(order.total) - Number(order.amountPaid);

          return (
            <JNCCard
              key={order.id}
              className="order-queue-card"
              hover={false}
            >
              <div className="order-queue-header">
                <div>
                  <div className="order-number-row">
                    <h3>{order.id}</h3>

                    {order.isDemo && (
                      <Badge color="dark">Demo Record</Badge>
                    )}
                  </div>

                  <p>{order.customer}</p>
                </div>

                <Badge color={getStageColor(order.stage)}>
                  {order.stage}
                </Badge>
              </div>

              <div className="order-detail-grid">
                <div>
                  <span>Item</span>
                  <strong>{order.item}</strong>
                </div>

                <div>
                  <span>Quantity</span>
                  <strong>{order.quantity}</strong>
                </div>

                <div>
                  <span>Due Date</span>
                  <strong>{formatDate(order.dueDate)}</strong>
                </div>

                <div>
                  <span>Priority</span>
                  <strong>{order.priority}</strong>
                </div>

                <div>
                  <span>Total</span>
                  <strong>{formatCurrency(order.total)}</strong>
                </div>

                <div>
                  <span>Balance Due</span>
                  <strong>{formatCurrency(balance)}</strong>
                </div>
              </div>

              <OrderTimeline currentStage={order.stage} />
            </JNCCard>
          );
        })}
      </div>
    </section>
  );
}
