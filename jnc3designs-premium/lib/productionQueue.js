import { getOrderStats } from "./orderStats";

function normalizeText(value) {
  return String(value || "")
    .trim()
    .toLowerCase();
}

function getPriorityWeight(priority) {
  const normalizedPriority =
    normalizeText(priority);

  if (normalizedPriority === "rush") {
    return 1;
  }

  return 2;
}

function getDueDateTime(dueDate) {
  if (!dueDate) {
    return Number.MAX_SAFE_INTEGER;
  }

  const dueDateTime =
    new Date(dueDate).getTime();

  if (Number.isNaN(dueDateTime)) {
    return Number.MAX_SAFE_INTEGER;
  }

  return dueDateTime;
}

export function getProductionQueue(
  orderList
) {
  const {
    activeOrdersList,
  } = getOrderStats(orderList);

  return [...activeOrdersList]
    .sort((a, b) => {
      const priorityDifference =
        getPriorityWeight(a.priority) -
        getPriorityWeight(b.priority);

      if (priorityDifference !== 0) {
        return priorityDifference;
      }

      return (
        getDueDateTime(a.dueDate) -
        getDueDateTime(b.dueDate)
      );
    })
    .map((order, index) => ({
      ...order,
      queuePosition: index + 1,
    }));
}
