"use client";

import { useEffect, useState } from "react";

import { products } from "../data/catalog";
import { getOrderStats } from "../lib/orderStats";
import { getPrinterStats } from "../lib/printerStats";

import Badge from "./Badge";
import JNCCard from "./JNCCard";

export default function NextActions() {
  const actions = [];

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
          "Next Actions telemetry error:",
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

  const {
    activeRushOrdersList,
  } = getOrderStats();

  const {
    readyPrintersList,
    attentionPrintersList,
    pausedPrintersList,
    stalePrintersList,
    offlinePrintersList,
  } = getPrinterStats(livePrinters);

  const rushOrder =
    activeRushOrdersList[0];

  if (rushOrder) {
    actions.push(
      `Review rush order ${rushOrder.id}.`
    );
  }

  const attentionPrinter =
    attentionPrintersList[0];

  if (attentionPrinter) {
    actions.push(
      `Check ${attentionPrinter.name}. It needs attention.`
    );
  }

  const pausedPrinter =
    pausedPrintersList[0];

  if (pausedPrinter) {
    actions.push(
      `Review paused printer ${pausedPrinter.name}.`
    );
  }

  const stalePrinter =
    stalePrintersList[0];

  if (stalePrinter) {
    actions.push(
      `Check JNC Bridge connection for ${stalePrinter.name}. Telemetry is stale.`
    );
  }

  const offlinePrinter =
    offlinePrintersList[0];

  if (offlinePrinter) {
    actions.push(
      `Check ${offlinePrinter.name}. It is currently offline.`
    );
  }

  const readyPrinter =
    readyPrintersList[0];

  if (readyPrinter) {
    actions.push(
      `Assign the next production job to ${readyPrinter.name}.`
    );
  }

  const lowMaterial = products.find(
    (product) =>
      Number(product.stock) <= 2
  );

  if (lowMaterial) {
    actions.push(
      `Restock ${lowMaterial.name}.`
    );
  }

  if (
    !isLoading &&
    actions.length === 0
  ) {
    actions.push(
      "Everything is caught up. Great job!"
    );
  }

  if (
    isLoading &&
    actions.length === 0
  ) {
    actions.push(
      "Checking live production status..."
    );
  }

  return (
    <section className="section">
      <Badge color="green">
        ✅ Next Actions
      </Badge>

      <h2>Recommended Next Steps</h2>

      <div className="next-actions-grid">
        {actions.map((action) => (
          <JNCCard
            key={action}
            hover={false}
          >
            {action}
          </JNCCard>
        ))}
      </div>
    </section>
  );
}