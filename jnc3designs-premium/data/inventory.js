export function getInventoryStatus(stock) {
  if (stock <= 0) return "out";
  if (stock === 1) return "critical";
  if (stock <= 3) return "low";
  return "in";
}

export function getInventoryBadge(stock) {
  switch (getInventoryStatus(stock)) {
    case "out":
      return "⚫ Out of Stock";
    case "critical":
      return "🔴 Only 1 Left";
    case "low":
      return "🟡 Low Stock";
    default:
      return "🟢 In Stock";
  }
}

export function canPurchase(stock) {
  return stock > 0;
}
