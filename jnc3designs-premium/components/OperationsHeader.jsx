import Badge from "./Badge";
import JNCButton from "./JNCButton";

export default function OperationsHeader({
  badge = "⚙️ Operations",
  badgeColor = "blue",
  title,
  description,
  backHref,
  backLabel = "Back",
  actions,
}) {
  return (
    <section className="section operations-header">

      <Badge color={badgeColor}>
        {badge}
      </Badge>

      <h1>{title}</h1>

      <p className="operations-intro">
        {description}
      </p>

      <div className="operations-header-actions">

        {backHref && (
          <JNCButton href={backHref}>
            ← {backLabel}
          </JNCButton>
        )}

        {actions}

      </div>

    </section>
  );
}
