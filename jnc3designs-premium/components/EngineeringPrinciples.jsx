import JNCCard from "./JNCCard";

const principles = [
  {
    title: "Build Once",
    text: "Every system should be designed to grow with JNC3Designs.",
  },
  {
    title: "Teach the Platform",
    text: "Knowledge belongs in reusable data, not scattered across pages.",
  },
  {
    title: "Purpose Before Features",
    text: "Every new feature must improve the customer experience, business operations, or platform architecture.",
  },
  {
    title: "Systems Before Scale",
    text: "Prepare the business before rapid growth arrives.",
  },
  {
    title: "The Platform Remembers",
    text: "Operations should remember so the owner doesn't have to.",
  },
  {
    title: "Improve Forever",
    text: "Nothing is ever finished. Every release should leave the platform stronger.",
  },
];

export default function EngineeringPrinciples() {
  return (
    <section className="section">

      <h2>⚒️ Engineering Principles</h2>

      <div className="principles-grid">

        {principles.map((item) => (
          <JNCCard
            key={item.title}
            className="principle-card"
            hover={false}
          >
            <h3>{item.title}</h3>

            <p>{item.text}</p>

          </JNCCard>
        ))}

      </div>

    </section>
  );
}
