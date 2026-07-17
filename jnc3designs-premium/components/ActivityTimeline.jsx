import { activity } from "../data/activity";
import Badge from "./Badge";
import JNCCard from "./JNCCard";

export default function ActivityTimeline() {

  const activities = [...activity]
    .sort((a, b) => new Date(b.occurredAt) - new Date(a.occurredAt));

  const formatTime = (timestamp) =>
    new Date(timestamp).toLocaleTimeString([], {
      hour: "numeric",
      minute: "2-digit",
    });

  return (
    <section className="section">

      <Badge color="dark">
        📜 Activity
      </Badge>

      <h2>Recent Activity</h2>

      <div className="activity-list">

        {activities.map((item) => (

          <JNCCard
            key={item.id}
            className="activity-card"
            hover={false}
          >

            <div className="activity-header">

              <span className="activity-icon">
                {item.icon}
              </span>

              <div>

                <strong>{item.title}</strong>

                <p>{item.description}</p>

              </div>

              <small>{formatTime(item.occurredAt)}</small>

            </div>

          </JNCCard>

        ))}

      </div>

    </section>
  );
}
