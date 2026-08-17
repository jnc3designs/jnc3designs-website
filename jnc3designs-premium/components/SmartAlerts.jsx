"use client";

import { useEffect, useState } from "react";

import { getOrderStats } from "../lib/orderStats";
import { getInventoryStats } from "../lib/inventoryStats";
import { getPrinterStats } from "../lib/printerStats";

import Badge from "./Badge";
import JNCCard from "./JNCCard";

export default function SmartAlerts() {
  const alerts = [];

  const [livePrinters, setLivePrinters] =
    useState([]);

  const [isLoading, setIsLoading] =
    useState(true);

  useEffect(() => {
    let isMounted = true;

    async function loadPrinterState() {
      try {
        const response = await fetch(
          "/api/bridge/printers",
          {
            cache: "no-store",
          }
        );

        if (!response.ok) {
          throw new Error(
            "Unable to load printer telemetry."
          );
        }

        const data = await response.json();

        if (!isMounted) {
          return;
        }

        setLivePrinters(
          Array.isArray(data.printers)
            ? data.printers
            : []
        );
      } catch (error) {
        console.error(
          "Smart Alerts telemetry error:",
          error
        );
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    loadPrinterState();

    const interval = setInterval(
      loadPrinterState,
      5000
    );

    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, []);

  const { rushOrders } = getOrderStats();

  const {
    lowInventoryProducts,
    outOfStockProducts,
  } = getInventoryStats();

  const {
    readyPrinters,
    stalePrinters,
    offlinePrinters,
    pausedPrinters,
    attentionPrinters,
    readyPrintersList,
    stalePrintersList,
    offlinePrintersList,
    pausedPrintersList,
    attentionPrintersList,
  } = getPrinterStats(livePrinters);

  // Rush Orders
  if (rushOrders > 0) {
    alerts.push({
      type: "warning",
      title: `${rushOrders} Rush Order${
        rushOrders > 1 ? "s" : ""
      }`,
      message:
        "Review these jobs before starting new production.",
    });
  }

  // Low Inventory
  const inventoryAttention =
    lowInventoryProducts +
    outOfStockProducts;

  if (inventoryAttention > 0) {
    alerts.push({
      type: "inventory",
      title: `${inventoryAttention} Low Inventory Item${
        inventoryAttention > 1 ? "s" : ""
      }`,
      message:
        "Consider placing a filament restock order.",
    });
  }

  // Printer Needs Attention
  if (attentionPrinters > 0) {
    alerts.push({
      type: "printer",
      title: `${attentionPrinters} Printer${
        attentionPrinters > 1 ? "s" : ""
      } Need Attention`,
      message: attentionPrintersList
        .map((printer) => printer.name)
        .join(", "),
    });
  }

  // Paused Printers
  if (pausedPrinters > 0) {
    alerts.push({
      type: "printer",
      title: `${pausedPrinters} Printer${
        pausedPrinters > 1 ? "s" : ""
      } Paused`,
      message: pausedPrintersList
        .map((printer) => printer.name)
        .join(", "),
    });
  }

  // Offline Printers
  if (offlinePrinters > 0) {
    alerts.push({
      type: "printer",
      title: `${offlinePrinters} Printer${
        offlinePrinters > 1 ? "s" : ""
      } Offline`,
      message: offlinePrintersList
        .map((printer) => printer.name)
        .join(", "),
    });
  }

  // Stale Telemetry
  if (stalePrinters > 0) {
    alerts.push({
      type: "printer",
      title: `${stalePrinters} Printer${
        stalePrinters > 1 ? "s" : ""
      } Reporting Stale Data`,
      message: stalePrintersList
        .map((printer) => printer.name)
        .join(", "),
    });
  }

  // Available Printers
  if (readyPrinters > 0) {
    alerts.push({
      type: "printer",
      title: `${readyPrinters} Printer${
        readyPrinters > 1 ? "s" : ""
      } Available`,
      message: `${readyPrintersList
        .map((printer) => printer.name)
        .join(", ")} ${
        readyPrinters > 1 ? "are" : "is"
      } ready for another job.`,
    });
  }

  if (!isLoading && alerts.length === 0) {
    alerts.push({
      type: "success",
      title: "Everything Looks Good",
      message:
        "No immediate action is required.",
    });
  }

  if (isLoading && alerts.length === 0) {
    alerts.push({
      type: "success",
      title: "Checking Print Farm",
      message:
        "Loading live printer telemetry...",
    });
  }

  return (
    <section className="section">
      <Badge color="red">
        🚨 Smart Alerts
      </Badge>

      <h2>Mission Control Alerts</h2>

      <div className="smart-alert-grid">
        {alerts.map((alert, index) => (
          <JNCCard
            key={`${alert.type}-${index}`}
            className="smart-alert-card"
            hover={false}
          >
            <h3>{alert.title}</h3>

            <p>{alert.message}</p>
          </JNCCard>
        ))}
      </div>
    </section>
  );
}
