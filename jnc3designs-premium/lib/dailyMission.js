import { getOrderStats } from "./orderStats";
import { getInventoryStats } from "./inventoryStats";
import { getPrinterStats } from "./printerStats";

export function getDailyMission() {
  const orderStats = getOrderStats();
  const inventoryStats = getInventoryStats();
  const printerStats = getPrinterStats();

  const mission = [];

  // Highest Priority — Specific Active Rush Order
  const firstRushOrder = orderStats.activeRushOrdersList[0];

  if (firstRushOrder) {
    const customerName =
      firstRushOrder.customer || "the customer";

    mission.push({
      priority: 1,
      icon: "🚨",
      title: `Rush Order ${firstRushOrder.id}`,
      action:
        `Complete rush order ${firstRushOrder.id} for ` +
        `${customerName} before starting new production.`,
    });
  }

  // Outstanding Payments
  if (orderStats.balanceDue > 0) {
    mission.push({
      priority: 2,
      icon: "💰",
      title: "Outstanding Payments",
      action: `Collect $${orderStats.balanceDue.toFixed(
        2
      )} in outstanding balances.`,
    });
  }

  // Out-of-Stock Inventory
  if (inventoryStats.outOfStockProducts > 0) {
    mission.push({
      priority: 3,
      icon: "📦",
      title: "Out of Stock",
      action: `Replace ${
        inventoryStats.outOfStockProducts
      } out-of-stock product${
        inventoryStats.outOfStockProducts > 1 ? "s" : ""
      }.`,
    });
  }

  // Low Inventory
  if (inventoryStats.lowInventoryProducts > 0) {
    mission.push({
      priority: 4,
      icon: "🧵",
      title: "Inventory",
      action: `Restock ${
        inventoryStats.lowInventoryProducts
      } low-inventory product${
        inventoryStats.lowInventoryProducts > 1 ? "s" : ""
      }.`,
    });
  }

  // Printer Capacity
  if (printerStats.idlePrinters > 0) {
    mission.push({
      priority: 5,
      icon: "🖨️",
      title: "Printer Capacity",
      action: `Assign work to ${
        printerStats.idlePrinters
      } available printer${
        printerStats.idlePrinters > 1 ? "s" : ""
      }.`,
    });
  }

  // Business Running Smoothly
  if (mission.length === 0) {
    mission.push({
      priority: 99,
      icon: "✅",
      title: "Everything Looks Good",
      action:
        "All systems are running normally. Focus on production and customer service today.",
    });
  }

  return mission.sort(
    (a, b) => a.priority - b.priority
  );
}
