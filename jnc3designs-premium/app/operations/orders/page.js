import Badge from "../../../components/Badge";
import JNCCard from "../../../components/JNCCard";

export default function OrdersPage() {
  return (
    <main className="section">

      <Badge color="blue">
        📦 Operations Module
      </Badge>

      <h1>Order Queue</h1>

      <p className="operations-intro">
        Every customer order will move through its entire lifecycle here.
      </p>

      <div className="operations-grid">

        <JNCCard hover={false}>
          <h3>📝 Quotes</h3>

          <p>
            Quotes waiting to be approved.
          </p>
        </JNCCard>

        <JNCCard hover={false}>
          <h3>💰 Deposits</h3>

          <p>
            Orders waiting for payment.
          </p>
        </JNCCard>

        <JNCCard hover={false}>
          <h3>🖨️ Printing</h3>

          <p>
            Active production jobs.
          </p>
        </JNCCard>

        <JNCCard hover={false}>
          <h3>✅ Ready</h3>

          <p>
            Orders ready for pickup or shipping.
          </p>
        </JNCCard>

      </div>

    </main>
  );
}
