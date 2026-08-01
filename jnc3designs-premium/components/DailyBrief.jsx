import Badge from "./Badge";
import JNCCard from "./JNCCard";
import { getDailyMission } from "../lib/dailyMission";

export default function DailyBrief() {
  const mission = getDailyMission();

  return (
    <section className="section">
      <JNCCard
        className="daily-brief-card"
        hover={false}
      >
        <Badge color="blue">
          🎯 Today's Mission
        </Badge>

        <h2>Good Morning, Jared</h2>

        <p className="daily-brief-copy">
          Focus on these priorities before moving on to new work.
        </p>

        <div className="daily-brief-list">
          {mission.map((item) => (
            <div
              key={`${item.priority}-${item.title}`}
              className="daily-brief-item"
            >
              <strong>
                {item.icon} {item.title}
              </strong>

              <br />

              {item.action}
            </div>
          ))}
        </div>
      </JNCCard>
    </section>
  );
}
