import Badge from "../../../components/Badge";
import OrderQueue from "../../../components/OrderQueue";
import JNCButton from "../../../components/JNCButton";

export default function OrdersPage() {
  return (
    <main>
      <section className="section">
        <Badge color="blue">📦 Operations Module</Badge>

        <h1>Order Queue</h1>

        <p className="operations-intro">
          Track every customer order from quote request through production,
          pickup, and completion.
        </p>
    <div className="hero-buttons">
  <JNCButton href="/operations">
    ← Back to Operations
  </JNCButton>
</div>
      </section>

      <OrderQueue />
    </main>
  );
}
