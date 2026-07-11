import { orderStages } from "../data/orderStages";
import JNCCard from "./JNCCard";
import Badge from "./Badge";

export default function OrderTimeline({
  currentStage = "Quote Requested",
}) {
  const currentIndex = orderStages.indexOf(currentStage);

  return (
    <JNCCard className="order-timeline" hover={false}>
      <Badge color="blue">
        📈 Standard Workflow
      </Badge>

      <h2>Order Timeline</h2>

      <div className="timeline-list">
        {orderStages.map((stage, index) => (
          <div
            key={stage}
            className={
              index <= currentIndex
                ? "timeline-step complete"
                : "timeline-step"
            }
          >
            <span className="timeline-icon">
              {index <= currentIndex ? "✓" : "○"}
            </span>

            <span>{stage}</span>
          </div>
        ))}
      </div>
    </JNCCard>
  );
}
