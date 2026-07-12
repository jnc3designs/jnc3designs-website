import Badge from "../../../components/Badge";
import OrderQueue from "../../../components/OrderQueue";

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
      </section>

      <OrderQueue />
    </main>
  );
}
