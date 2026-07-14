import Badge from "./Badge";
import JNCCard from "./JNCCard";

export default function JNCAssistant() {
  return (
    <section className="section">

      <Badge color="purple">
        🤖 JNC Assistant
      </Badge>

      <h2>Business Partner</h2>

      <JNCCard
        className="assistant-card"
        hover={false}
      >

        <h3>Today's Recommendation</h3>

        <p>
          Welcome to JNC Assistant.
        </p>

        <p>
          As JNC OS grows, this assistant will learn from
          your Orders, Inventory, Customers, and Print Farm
          to provide smarter recommendations every day.
        </p>

        <blockquote>

          "The goal isn't to replace decisions.

          It's to make good decisions easier."

        </blockquote>

      </JNCCard>

    </section>
  );
}
