export default function ForgeStatus() {
  const items = [
    { label: "Core UI", status: "complete" },
    { label: "Business Components", status: "complete" },
    { label: "Supply Architecture", status: "complete" },
    { label: "Customer Experience", status: "progress" },
    { label: "Order System", status: "future" },
    { label: "Customer Accounts", status: "future" },
    { label: "Inventory Sync", status: "future" },
  ];

  const icon = {
    complete: "🟢",
    progress: "🟡",
    future: "⚪",
  };

  return (
    <div className="forge-status">
      <h2>Platform Status</h2>

      <ul>
        {items.map((item) => (
          <li key={item.label}>
            <span>{icon[item.status]}</span>
            <span>{item.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
