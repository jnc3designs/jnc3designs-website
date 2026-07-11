import { materialInfo } from "../data/materials";
import Badge from "./Badge";
import JNCCard from "./JNCCard";

export default function MaterialHighlights({
  material,
  showTitle = true,
  featureLimit,
  className = "",
}) {
  const info = materialInfo[material];

  if (!info) {
    return null;
  }

  const visibleFeatures =
    typeof featureLimit === "number"
      ? info.features.slice(0, featureLimit)
      : info.features;

  return (
    <JNCCard
      className={`material-highlights ${className}`}
      hover={false}
    >
      {showTitle && <h3>{info.name}</h3>}

      <Badge>{info.badge}</Badge>

      <ul className="material-highlight-list">
        {visibleFeatures.map((feature) => (
          <li key={feature}>✓ {feature}</li>
        ))}
      </ul>
    </JNCCard>
  );
}
