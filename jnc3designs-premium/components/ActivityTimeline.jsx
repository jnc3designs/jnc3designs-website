import { activity } from "../data/activity";
import Badge from "./Badge";
import JNCCard from "./JNCCard";

export default function ActivityTimeline() {
  return (
    <section className="section">

      <Badge color="dark">
        📜 Activity
      </Badge>

      <h2>Recent Activity</h2>

      <div className="activity-list">

        {activity.map((item) => (

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

              <small>{item.time}</small>

            </div>

          </JNCCard>

        ))}

      </div>

    </section>
  );
}
