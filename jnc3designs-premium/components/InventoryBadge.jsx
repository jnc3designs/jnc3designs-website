import Badge from "./Badge";

export default function InventoryBadge({ stock }) {
  const count = Number(stock);

  if (count <= 0) {
    return <Badge color="red">🔴 Out of Stock</Badge>;
  }

  if (count === 1) {
    return <Badge color="red">🔴 Only 1 Roll Left</Badge>;
  }

  if (count <= 3) {
    return <Badge color="yellow">🟡 Low Stock · {count} Rolls</Badge>;
  }

  return <Badge color="green">🟢 In Stock · {count} Rolls</Badge>;
}
