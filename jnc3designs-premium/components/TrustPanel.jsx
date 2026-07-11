import JNCCard from "./JNCCard";

const points = [
  "Authorized ZYLtech Engineering Filament Reseller",
  "Local Pickup in Midland, Texas",
  "Active 3D Printing Business",
  "Custom Design & Manufacturing",
  "Industrial & Hobby Printing Solutions",
  "Fast, Personal Customer Support",
];

export default function TrustPanel() {
  return (
    <JNCCard className="trust-panel" hover={false}>
      <h2>Why Customers Choose JNC3Designs</h2>

      <div className="trust-grid">
        {points.map((point) => (
          <div key={point} className="trust-item">
            ✓ {point}
          </div>
        ))}
      </div>
    </JNCCard>
  );
}
