import Badge from "./Badge";
import JNCButton from "./JNCButton";
import JNCCard from "./JNCCard";

export default function OperationsModuleCard({
  badge,
  badgeColor = "blue",
  title,
  description,
  href,
  buttonText = "Open Module",
  status = "future",
}) {
  return (
    <JNCCard className="operations-module-card" hover={false}>
      <Badge color={badgeColor}>{badge}</Badge>

      <h3>{title}</h3>

      <p>{description}</p>

      <div className="operations-module-footer">
        <span
          className={
            status === "active"
              ? "operations-active-module"
              : "operations-coming-soon"
          }
        >
          {status === "active" ? "● Module Active" : "○ Coming Soon"}
        </span>

        {href && (
          <JNCButton href={href}>
            {buttonText}
          </JNCButton>
        )}
      </div>
    </JNCCard>
  );
}
