import { releases } from "../data/releases";
import JNCCard from "./JNCCard";
import Badge from "./Badge";

export default function ForgeJournal() {
  return (
    <section className="section">
      <h2>⚒️ Forge Journal</h2>

      <p className="forge-intro">
        Every major improvement to JNC Platform is recorded here.
        Build Once. Improve Forever.
      </p>

      <div className="forge-release-grid">
        {releases.map((release) => (
          <JNCCard
            key={release.version}
            className="forge-release-card"
            hover={false}
          >
            <div className="forge-release-header">
              <Badge>
                v{release.version}
              </Badge>

              {release.status && (
                <Badge color="green">
                  {release.status}
                </Badge>
              )}
            </div>

            <h3>{release.title}</h3>

            <ul>
              {release.highlights.map((item) => (
                <li key={item}>✓ {item}</li>
              ))}
            </ul>
          </JNCCard>
        ))}
      </div>
    </section>
  );
}
