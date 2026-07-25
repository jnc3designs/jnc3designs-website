export function getInventoryStatus(stock) {
  const count = Number(stock);

  if (count <= 0) return "out";
  if (count === 1) return "critical";
  if (count <= 3) return "low";

  return "in";
}

export function getInventoryBadge(stock) {
  const count = Number(stock);

  switch (getInventoryStatus(count)) {
    case "out":
      return "🔴 Out of Stock";

    case "critical":
      return "🔴 Only 1 Roll Left";

    case "low":
      return `🟡 Low Stock • ${count} Rolls`;

    case "in":
    default:
      return `🟢 In Stock • ${count} Rolls`;
  }
}

export function canPurchase(stock) {
  return Number(stock) > 0;
}
