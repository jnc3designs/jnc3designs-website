"use client";

import { useEffect, useState } from "react";

import Badge from "./Badge";
import JNCCard from "./JNCCard";
import { getPrinterStats } from "../lib/printerStats";

export default function CapacityOverview() {
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
          "Capacity telemetry error:",
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
    printingPrinters,
    readyPrinters,
    stalePrinters,
    offlinePrinters,
    activeCapacityPercentage,
  } = getPrinterStats(livePrinters);

  const unavailablePrinters =
    stalePrinters + offlinePrinters;

  return (
    <section className="section">
      <Badge color="orange">
        📊 Capacity
      </Badge>

      <h2>Print Farm Capacity</h2>

      <div className="capacity-grid">
        <JNCCard hover={false}>
          <strong>
            {isLoading ? "—" : printingPrinters}
          </strong>
          <p>Printing</p>
        </JNCCard>

        <JNCCard hover={false}>
          <strong>
            {isLoading ? "—" : readyPrinters}
          </strong>
          <p>Available</p>
        </JNCCard>

        <JNCCard hover={false}>
          <strong>
            {isLoading ? "—" : unavailablePrinters}
          </strong>
          <p>Offline / Stale</p>
        </JNCCard>

        <JNCCard hover={false}>
          <strong>
            {isLoading
              ? "—"
              : `${activeCapacityPercentage}%`}
          </strong>
          <p>Active Capacity</p>
        </JNCCard>
      </div>
    </section>
  );
}