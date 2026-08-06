"use client";

import { useEffect, useState } from "react";
import JNCCard from "./JNCCard";
import Badge from "./Badge";

function formatMinutes(minutes) {
  const safeMinutes = Number(minutes || 0);

  if (safeMinutes < 60) {
    return `${safeMinutes} min`;
  }

  const hours = Math.floor(safeMinutes / 60);
  const remainingMinutes = safeMinutes % 60;

  return `${hours}h ${remainingMinutes}m`;
}

function formatUpdatedTime(timestamp) {
  if (!timestamp) {
    return "Unknown";
  }

  const date = new Date(timestamp);

  if (Number.isNaN(date.getTime())) {
    return "Unknown";
  }

  return date.toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
  });
}

function getStatusLabel(state) {
  const normalizedState = String(
    state || ""
  ).toUpperCase();

  if (normalizedState === "RUNNING") {
    return "Printing";
  }

  if (
    normalizedState === "IDLE" ||
    normalizedState === "FINISH"
  ) {
    return "Ready";
  }

  if (normalizedState === "PAUSE") {
    return "Paused";
  }

  if (normalizedState === "FAILED") {
    return "Needs Attention";
  }

  return state || "Unknown";
}

export default function LivePrinterStatus() {
  const [printers, setPrinters] = useState([]);
  const [receivedAt, setReceivedAt] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

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

        const data = await response.json();

        if (!response.ok) {
          throw new Error(
            data.message ||
              "Unable to load printer status."
          );
        }

        if (!isMounted) {
          return;
        }

        setPrinters(
          Array.isArray(data.printers)
            ? data.printers
            : []
        );

        setReceivedAt(
          data.receivedAt ||
            data.timestamp ||
            ""
        );

        setError("");
      } catch (loadError) {
        if (!isMounted) {
          return;
        }

        setError(loadError.message);
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    loadPrinterState();

    return () => {
      isMounted = false;
    };
  }, []);

  if (isLoading) {
    return (
      <JNCCard hover={false}>
        <h3>🖨️ Live Printer Status</h3>

        <p className="operations-muted">
          Loading live printer data...
        </p>
      </JNCCard>
    );
  }

  if (error) {
    return (
      <JNCCard hover={false}>
        <h3>⚠ Live Printer Status</h3>

        <p className="operations-muted">
          {error}
        </p>
      </JNCCard>
    );
  }

  if (printers.length === 0) {
    return (
      <JNCCard hover={false}>
        <h3>🖨️ Live Printer Status</h3>

        <p className="operations-muted">
          No live printers are reporting.
        </p>
      </JNCCard>
    );
  }

  return (
    <div className="operations-grid">
      {printers.map((printer) => {
        const progress = Math.min(
          Math.max(
            Number(printer.progress || 0),
            0
          ),
          100
        );

        return (
          <JNCCard
            key={
              printer.name ||
              printer.ip
            }
            className="live-printer-card"
            hover={false}
          >
            <div className="live-printer-heading">
              <div>
                <Badge color="green">
                  🟢 Live Printer
                </Badge>

                <h3>
                  {printer.name ||
                    "Bambu Printer"}
                </h3>
              </div>

              <strong>
                {getStatusLabel(
                  printer.state
                )}
              </strong>
            </div>

            <p className="live-printer-job">
              {printer.job ||
                "No Active Print"}
            </p>

            <div className="printer-progress">
              <div
                className="printer-progress-fill"
                style={{
                  width: `${progress}%`,
                }}
              />
            </div>

            <p className="printer-progress-text">
              {progress}% Complete
            </p>

            <div className="customer-stats">
              <div>
                <strong>
                  {printer.currentLayer ?? 0}
                  {" / "}
                  {printer.totalLayers ?? 0}
                </strong>

                <span>Layer</span>
              </div>

              <div>
                <strong>
                  {formatMinutes(
                    printer.remainingMinutes
                  )}
                </strong>

                <span>Remaining</span>
              </div>

              <div>
                <strong>
                  {Math.round(
                    Number(
                      printer.nozzleTemperature ||
                        0
                    )
                  )}
                  °C
                </strong>

                <span>Nozzle</span>
              </div>

              <div>
                <strong>
                  {Math.round(
                    Number(
                      printer.bedTemperature ||
                        0
                    )
                  )}
                  °C
                </strong>

                <span>Bed</span>
              </div>
            </div>

            <p className="operations-muted">
              Last cloud update:{" "}
              {formatUpdatedTime(
                receivedAt
              )}
            </p>
          </JNCCard>
        );
      })}
    </div>
  );
}
