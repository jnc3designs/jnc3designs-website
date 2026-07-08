import Badge from "../../components/Badge";
import JNCButton from "../../components/JNCButton";
import JNCCard from "../../components/JNCCard";

export default function PlatformLab() {
  return (
    <main className="section">
      <h1>JNC Platform Lab</h1>

      <p style={{ opacity: 0.8, maxWidth: "800px" }}>
        Internal development page used to build and test reusable JNC Platform
        UI components before they are added throughout the website.
      </p>

      <section className="section">

        <h2>Buttons</h2>

        <div className="hero-buttons">
          <JNCButton>Primary Button</JNCButton>

          <JNCButton variant="outline">
            Outline Button
          </JNCButton>
        </div>

      </section>

      <section className="section">

        <h2>Badges</h2>

        <div className="hero-buttons">
          <Badge>Official Reseller</Badge>

          <Badge color="green">
            In Stock
          </Badge>

          <Badge color="yellow">
            Low Stock
          </Badge>

          <Badge color="red">
            Out of Stock
          </Badge>
        </div>

      </section>

      <section className="section">

        <h2>Cards</h2>

        <JNCCard style={{ padding: "30px" }}>
          <h3>JNC Card</h3>

          <p>
            Every future card on the platform should feel consistent.
          </p>
        </JNCCard>

      </section>

    </main>
  );
}
