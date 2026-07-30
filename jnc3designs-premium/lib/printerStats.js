import { printers } from "../data/printers";

function normalizeText(value) {
  return String(value || "").trim().toLowerCase();
}

export function getPrinterStats(printerList = printers) {
  const safePrinters = Array.isArray(printerList)
    ? printerList
    : [];

  const printingPrintersList = safePrinters.filter(
    (printer) =>
      normalizeText(printer.status) === "printing"
  );

  const idlePrintersList = safePrinters.filter(
    (printer) =>
      normalizeText(printer.status) === "idle"
  );

  const futurePrintersList = safePrinters.filter(
    (printer) =>
      normalizeText(printer.status) === "future"
  );

  const offlinePrintersList = safePrinters.filter(
    (printer) =>
      normalizeText(printer.status) === "offline"
  );

  const operationalPrinters =
    printingPrintersList.length +
    idlePrintersList.length;

  const activeCapacityPercentage =
    operationalPrinters === 0
      ? 0
      : Math.round(
          (printingPrintersList.length /
            operationalPrinters) *
            100
        );

  return {
    totalPrinters: safePrinters.length,

    printingPrinters:
      printingPrintersList.length,

    idlePrinters:
      idlePrintersList.length,

    futurePrinters:
      futurePrintersList.length,

    offlinePrinters:
      offlinePrintersList.length,

    operationalPrinters,

    activeCapacityPercentage,

    printingPrintersList,
    idlePrintersList,
    futurePrintersList,
    offlinePrintersList,
  };
}
