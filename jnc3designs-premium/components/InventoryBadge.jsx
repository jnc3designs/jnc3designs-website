import Badge from "./Badge";
import {
  getInventoryStatus,
  getInventoryBadge,
} from "../data/inventory";

export default function InventoryBadge({ stock }) {
  const count = Number(stock);
  const status = getInventoryStatus(count);
  const label = getInventoryBadge(count);

  const badgeColors = {
    in: "green",
    low: "yellow",
    critical: "red",
    out: "red",
  };

  const badgeColor = badgeColors[status] || "dark";

  return <Badge color={badgeColor}>{label}</Badge>;
}
