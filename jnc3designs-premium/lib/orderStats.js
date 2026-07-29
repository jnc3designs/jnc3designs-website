import { orders } from "../data/orders";

const COMPLETED_STAGES = [
  "Completed",
  "Picked Up",
  "Delivered",
  "Closed",
];

function normalizeText(value) {
  return String(value || "").trim().toLowerCase();
}

function isCompletedOrder(order) {
  const stage = normalizeText(order.stage);

  return COMPLETED_STAGES.some(
    (completedStage) =>
      stage === normalizeText(completedStage)
  );
}

function isRushOrder(order) {
  return normalizeText(order.priority) === "rush";
}

export function getOrderStats(orderList = orders) {
  const safeOrders = Array.isArray(orderList) ? orderList : [];

  const activeOrdersList = safeOrders.filter(
    (order) => !isCompletedOrder(order)
  );

  const completedOrdersList = safeOrders.filter(isCompletedOrder);

  const activeRushOrdersList = activeOrdersList.filter(isRushOrder);

  const totalSales = safeOrders.reduce(
    (sum, order) => sum + Number(order.total || 0),
    0
  );

  const paymentsReceived = safeOrders.reduce(
    (sum, order) => sum + Number(order.amountPaid || 0),
    0
  );

  const balanceDue = safeOrders.reduce((sum, order) => {
    const total = Number(order.total || 0);
    const amountPaid = Number(order.amountPaid || 0);

    return sum + Math.max(total - amountPaid, 0);
  }, 0);

  return {
    totalOrders: safeOrders.length,
    activeOrders: activeOrdersList.length,
    completedOrders: completedOrdersList.length,
    rushOrders: activeRushOrdersList.length,
    totalSales,
    paymentsReceived,
    balanceDue,
    activeOrdersList,
    completedOrdersList,
    activeRushOrdersList,
  };
}
