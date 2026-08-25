"use client";

import { useEffect, useState } from "react";

import Badge from "./Badge";
import JNCCard from "./JNCCard";
import { getDailyMission } from "../lib/dailyMission";

export default function DailyBrief() {
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
          "Daily Mission telemetry error:",
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

  const mission = getDailyMission(
    livePrinters
  );

  return (
    <section className="section">
      <JNCCard
        className="daily-brief-card"
        hover={false}
      >
        <Badge color="blue">
          🎯 Today's Mission
        </Badge>

        <h2>Good Morning, Jared</h2>

        <p className="daily-brief-copy">
          {isLoading
            ? "Checking live business and production priorities..."
            : "Focus on these priorities before moving on to new work."}
        </p>

        <div className="daily-brief-list">
          {mission.map((item) => (
            <div
              key={`${item.priority}-${item.title}`}
              className="daily-brief-item"
            >
              <strong>
                {item.icon} {item.title}
              </strong>

              <br />

              {item.action}
            </div>
          ))}
        </div>
      </JNCCard>
    </section>
  );
}
