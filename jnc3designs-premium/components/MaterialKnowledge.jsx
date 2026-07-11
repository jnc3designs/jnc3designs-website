import { productKnowledge } from "../data/productKnowledge";
import Badge from "./Badge";
import JNCCard from "./JNCCard";

function getKnowledgeKey(category) {
  const aliases = {
    "pla-high-speed": "pla",
    "pla-plus": "pla",
    "pla-metallic": "pla",
    silk: "pla",
    "petg-hf": "petg",
  };

  return aliases[category] || category;
}

function getDifficultyLabel(level) {
  if (level <= 1) return "Beginner Friendly";
  if (level === 2) return "Easy–Moderate";
  if (level === 3) return "Intermediate";
  return "Advanced";
}

export default function MaterialKnowledge({
  material,
  className = "",
}) {
  const knowledgeKey = getKnowledgeKey(material);
  const info = productKnowledge[knowledgeKey];

  if (!info) {
    return null;
  }

  return (
    <JNCCard
      className={`material-knowledge ${className}`}
      hover={false}
    >
      <div className="material-knowledge-badges">
        <Badge color={info.outdoor ? "green" : "dark"}>
          {info.outdoor ? "☀️ Outdoor Suitable" : "🏠 Best for Indoor Use"}
        </Badge>

        <Badge color={info.uvResistant ? "green" : "dark"}>
          {info.uvResistant ? "✓ UV Resistant" : "UV Resistance Limited"}
        </Badge>

        <Badge color="blue">
          ⭐ {getDifficultyLabel(info.difficulty)}
        </Badge>
      </div>

      <div className="material-knowledge-grid">
        <div>
          <h3>Best For</h3>

          <ul>
            {info.bestFor.map((item) => (
              <li key={item}>✓ {item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3>Avoid For</h3>

          <ul>
            {info.avoidFor.map((item) => (
              <li key={item}>– {item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="material-rating-grid">
        <div>
          <span>Strength</span>
          <strong>{info.strength}/5</strong>
        </div>

        <div>
          <span>Flexibility</span>
          <strong>{info.flexibility}/5</strong>
        </div>

        <div>
          <span>Difficulty</span>
          <strong>{info.difficulty}/5</strong>
        </div>
      </div>
    </JNCCard>
  );
}
