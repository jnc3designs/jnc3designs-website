import { printers } from "../data/printers";

function normalizeText(value) {
  return String(value || "").trim().toLowerCase();
}

export function getPrinterHealth(
  lastSeen,
  now = Date.now()
) {
  if (!lastSeen) {
    return "offline";
  }

  const lastSeenTime = new Date(lastSeen).getTime();

  if (Number.isNaN(lastSeenTime)) {
    return "offline";
  }

  const ageSeconds =
    (now - lastSeenTime) / 1000;

  if (ageSeconds <= 30) {
    return "live";
  }

  if (ageSeconds <= 90) {
    return "stale";
  }

  return "offline";
}

export function getOperationalState(state) {
  const normalizedState = normalizeText(state);

  if (normalizedState === "running") {
    return "printing";
  }

  if (
    normalizedState === "idle" ||
    normalizedState === "finish"
  ) {
    return "ready";
  }

  if (normalizedState === "pause") {
    return "paused";
  }

  if (
    normalizedState === "failed" ||
    normalizedState === "error"
  ) {
    return "needs-attention";
  }

  return "unknown";
}

export function mergePrinterFleet(
  livePrinters = [],
  printerRegistry = printers
) {
  const safeLivePrinters = Array.isArray(
    livePrinters
  )
    ? livePrinters
    : [];

  const safeRegistry = Array.isArray(
    printerRegistry
  )
    ? printerRegistry
    : [];

  return safeRegistry.map((registeredPrinter) => {
    const livePrinter = safeLivePrinters.find(
      (printer) =>
        normalizeText(printer.name) ===
        normalizeText(registeredPrinter.name)
    );

    if (!livePrinter) {
      return {
        ...registeredPrinter,
        connectionHealth: "offline",
        operationalState: "unknown",
        live: null,
      };
    }

    return {
      ...registeredPrinter,
      connectionHealth: getPrinterHealth(
        livePrinter.lastSeen
      ),
      operationalState: getOperationalState(
        livePrinter.state
      ),
      live: livePrinter,
    };
  });
}

export function getPrinterStats(
  livePrinters = [],
  printerRegistry = printers
) {
  const fleet = mergePrinterFleet(
    livePrinters,
    printerRegistry
  );

  const livePrintersList = fleet.filter(
    (printer) =>
      printer.connectionHealth === "live"
  );

  const stalePrintersList = fleet.filter(
    (printer) =>
      printer.connectionHealth === "stale"
  );

  const offlinePrintersList = fleet.filter(
    (printer) =>
      printer.connectionHealth === "offline"
  );

  const printingPrintersList = fleet.filter(
    (printer) =>
      printer.connectionHealth === "live" &&
      printer.operationalState === "printing"
  );

  const readyPrintersList = fleet.filter(
    (printer) =>
      printer.connectionHealth === "live" &&
      printer.operationalState === "ready"
  );

  const pausedPrintersList = fleet.filter(
    (printer) =>
      printer.connectionHealth === "live" &&
      printer.operationalState === "paused"
  );

  const attentionPrintersList = fleet.filter(
    (printer) =>
      printer.connectionHealth === "live" &&
      printer.operationalState ===
        "needs-attention"
  );

  const operationalPrinters =
    livePrintersList.length;

  const activeCapacityPercentage =
    operationalPrinters === 0
      ? 0
      : Math.round(
          (printingPrintersList.length /
            operationalPrinters) *
            100
        );

  return {
    totalPrinters: fleet.length,

    livePrinters: livePrintersList.length,
    stalePrinters: stalePrintersList.length,
    offlinePrinters:
      offlinePrintersList.length,

    printingPrinters:
      printingPrintersList.length,
    readyPrinters:
      readyPrintersList.length,
    pausedPrinters:
      pausedPrintersList.length,
    attentionPrinters:
      attentionPrintersList.length,

    operationalPrinters,
    activeCapacityPercentage,

    fleet,
    livePrintersList,
    stalePrintersList,
    offlinePrintersList,
    printingPrintersList,
    readyPrintersList,
    pausedPrintersList,
    attentionPrintersList,
  };
}
