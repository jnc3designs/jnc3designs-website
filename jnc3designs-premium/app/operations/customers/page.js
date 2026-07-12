import CustomerHub from "../../../components/CustomerHub";
import OperationsHeader from "../../../components/OperationsHeader";

export default function CustomersPage() {
  return (
    <main>
      <OperationsHeader
        badge="👥 Operations Module"
        badgeColor="dark"
        title="Customer Hub"
        description="Keep customer history, preferences, notes, and relationships organized in one place."
        backHref="/operations"
        backLabel="Operations"
      />

      <CustomerHub />
    </main>
  );
}
