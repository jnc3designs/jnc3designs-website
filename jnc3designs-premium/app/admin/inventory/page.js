import InventorySummary from "../../../components/InventorySummary";
import OperationsHeader from "../../../components/OperationsHeader";

export default function InventoryPage() {
  return (
    <main>
      <OperationsHeader
        badge="🧵 Operations Module"
        badgeColor="green"
        title="Inventory"
        description="Monitor current filament quantities and quickly identify products that need to be restocked."
        backHref="/admin"
        backLabel="Operations"
      />

      <InventorySummary />
    </main>
  );
}
