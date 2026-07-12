import OperationsHeader from "../../../components/OperationsHeader";
import OrderQueue from "../../../components/OrderQueue";

export default function OrdersPage() {
  return (
    <main>
      <OperationsHeader
        badge="📦 Operations Module"
        title="Order Queue"
        description="Track every customer order from quote request through production, pickup, and completion."
        backHref="/operations"
        backLabel="Operations"
      />

      <OrderQueue />
    </main>
  );
}
