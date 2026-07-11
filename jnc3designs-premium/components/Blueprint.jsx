import JNCCard from "./JNCCard";
import Badge from "./Badge";

const sections = [
  {
    title: "Customer Platform",
    icon: "🌐",
    color: "blue",
    items: [
      "Homepage",
      "Supply",
      "Projects",
      "Quote Requests",
      "Reservations",
    ],
  },
  {
    title: "Operations",
    icon: "⚙️",
    color: "green",
    items: [
      "Orders",
      "Inventory",
      "Print Queue",
      "Customers",
      "Analytics",
      "Assistant",
    ],
  },
  {
    title: "Forge",
    icon: "⚒️",
    color: "orange",
    items: [
      "Components",
      "Design System",
      "Data Libraries",
      "Release Journal",
      "Engineering Principles",
    ],
  },
  {
    title: "Future",
    icon: "🚀",
    color: "purple",
    items: [
      "Customer Accounts",
      "Order Tracking",
      "Supplier Portal",
      "Printer Fleet",
      "Business Dashboard",
    ],
  },
];

export default function Blueprint() {
  return (
    <section className="section">

      <h2>⚒️ JNC Platform Blueprint</h2>

      <p className="blueprint-copy">
        Every forging has a purpose.
        Every system has a place.
        This blueprint guides the long-term evolution of JNC Platform.
      </p>

      <div className="blueprint-grid">

        {sections.map((section) => (
          <JNCCard
            key={section.title}
            className="blueprint-card"
            hover={false}
          >
            <Badge color={section.color}>
              {section.icon} {section.title}
            </Badge>

            <ul>
              {section.items.map((item) => (
                <li key={item}>
                  ✓ {item}
                </li>
              ))}
            </ul>
          </JNCCard>
        ))}

      </div>

    </section>
  );
}
