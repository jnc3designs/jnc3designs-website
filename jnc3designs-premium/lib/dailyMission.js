import { getOrderStats } from "./orderStats";
import { getInventoryStats } from "./inventoryStats";
import { getPrinterStats } from "./printerStats";

export function getDailyMission(
  livePrinters = []
) {
  const orderStats = getOrderStats();
  const inventoryStats =
    getInventoryStats();
  const printerStats =
    getPrinterStats(livePrinters);

  const mission = [];

  // Highest Priority — Specific Active Rush Order
  const firstRushOrder =
    orderStats.activeRushOrdersList[0];

  if (firstRushOrder) {
    const customerName =
      firstRushOrder.customer ||
      "the customer";

    mission.push({
      priority: 1,
      icon: "🚨",
      title: `Rush Order ${firstRushOrder.id}`,
      action:
        `Complete rush order ${firstRushOrder.id} for ` +
        `${customerName} before starting new production.`,
    });
  }

  // Printer Needs Attention
  const attentionPrinter =
    printerStats.attentionPrintersList[0];

  if (attentionPrinter) {
    mission.push({
      priority: 2,
      icon: "⚠️",
      title: "Printer Needs Attention",
      action:
        `Check ${attentionPrinter.name}. ` +
        "It is reporting an error or failed state.",
    });
  }

  // Paused Printer
  const pausedPrinter =
    printerStats.pausedPrintersList[0];

  if (pausedPrinter) {
    mission.push({
      priority: 3,
      icon: "⏸️",
      title: "Printer Paused",
      action:
        `Review ${pausedPrinter.name}. ` +
        "The current print is paused.",
    });
  }

  // Offline Printer
  const offlinePrinter =
    printerStats.offlinePrintersList[0];

  if (offlinePrinter) {
    mission.push({
      priority: 4,
      icon: "🔴",
      title: "Printer Offline",
      action:
        `Check ${offlinePrinter.name}. ` +
        "It is not currently reporting to JNC Bridge.",
    });
  }

  // Stale Printer Telemetry
  const stalePrinter =
    printerStats.stalePrintersList[0];

  if (stalePrinter) {
    mission.push({
      priority: 5,
      icon: "🟡",
      title: "Printer Telemetry",
      action:
        `Check the JNC Bridge connection for ` +
        `${stalePrinter.name}. Telemetry is stale.`,
    });
  }

  // Outstanding Payments
  if (orderStats.balanceDue > 0) {
    mission.push({
      priority: 6,
      icon: "💰",
      title: "Outstanding Payments",
      action: `Collect $${orderStats.balanceDue.toFixed(
        2
      )} in outstanding balances.`,
    });
  }

  // Out-of-Stock Inventory
  if (
    inventoryStats.outOfStockProducts > 0
  ) {
    mission.push({
      priority: 7,
      icon: "📦",
      title: "Out of Stock",
      action: `Replace ${
        inventoryStats.outOfStockProducts
      } out-of-stock product${
        inventoryStats.outOfStockProducts >
        1
          ? "s"
          : ""
      }.`,
    });
  }

  // Low Inventory
  if (
    inventoryStats.lowInventoryProducts > 0
  ) {
    mission.push({
      priority: 8,
      icon: "🧵",
      title: "Inventory",
      action: `Restock ${
        inventoryStats.lowInventoryProducts
      } low-inventory product${
        inventoryStats.lowInventoryProducts >
        1
          ? "s"
          : ""
      }.`,
    });
  }

  // Printer Capacity
  const readyPrinter =
    printerStats.readyPrintersList[0];

  if (readyPrinter) {
    mission.push({
      priority: 9,
      icon: "🖨️",
      title: "Printer Capacity",
      action:
        `Assign the next production job to ` +
        `${readyPrinter.name}.`,
    });
  }

  // Full Production
  if (
    printerStats.livePrinters > 0 &&
    printerStats.printingPrinters ===
      printerStats.livePrinters
  ) {
    mission.push({
      priority: 10,
      icon: "🏭",
      title: "Production Full",
      action:
        "All live printers are currently printing.",
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
