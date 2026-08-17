"use client";

import { useEffect, useState } from "react";
import { printers as printerRegistry } from "../data/printers";
import {
  mergePrinterFleet,
  getPrinterHealth,
  getOperationalState,
} from "../lib/printerStats";

function formatMinutes(minutes) {
  const safeMinutes = Number(minutes || 0);

  if (safeMinutes < 60) {
    return `${safeMinutes} min`;
  }

  const hours = Math.floor(safeMinutes / 60);
  const remainingMinutes = safeMinutes % 60;

  return `${hours}h ${remainingMinutes}m`;
}

function getHealthLabel(health) {
  if (health === "live") {
    return "Live";
  }

  if (health === "stale") {
    return "Stale";
  }

  return "Offline";
}

function getOperationalLabel(state) {
  if (state === "printing") {
    return "Printing";
  }

  if (state === "ready") {
    return "Ready";
  }

  if (state === "paused") {
    return "Paused";
  }

  if (state === "needs-attention") {
    return "Needs Attention";
  }

  return "Unknown";
}

function getStatusColor(connectionHealth, operationalState) {
  if (connectionHealth === "offline") {
    return "#9ca3af";
  }

  if (connectionHealth === "stale") {
    return "#f59e0b";
  }

  if (operationalState === "needs-attention") {
    return "#ef4444";
  }

  if (operationalState === "paused") {
    return "#f59e0b";
  }

  if (operationalState === "ready") {
    return "#3b82f6";
  }

  return "#22c55e";
}

export default function PrintFarmStatus() {
  const [livePrinters, setLivePrinters] = useState([]);
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

        setLivePrinters(
          Array.isArray(data.printers)
            ? data.printers
            : []
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

    const interval = setInterval(() => {
      loadPrinterState();
    }, 5000);

    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, []);

  const fleet = mergePrinterFleet(
    livePrinters,
    printerRegistry
  );

  return (
    <section className="print-farm-card">
      <div className="print-farm-header">
        <div>
          <h2>🖨 Print Farm Status</h2>

          <p className="print-farm-demo-label">
            Live printer telemetry synchronized through JNC Bridge
          </p>
        </div>
      </div>

      {isLoading && (
        <p className="print-farm-demo-label">
          Loading live printer data...
        </p>
      )}

      {error && (
        <p className="print-farm-demo-label">
          Unable to refresh live printer data: {error}
        </p>
      )}

      <div className="printer-grid">
        {fleet.map((printer) => {
          const live = printer.live;

          const connectionHealth = live
            ? getPrinterHealth(live.lastSeen)
            : "offline";

          const operationalState = live
            ? getOperationalState(live.state)
            : "unknown";

          const statusColor = getStatusColor(
            connectionHealth,
            operationalState
          );

          const progress = Math.min(
            Math.max(
              Number(live?.progress || 0),
              0
            ),
            100
          );

          return (
            <div
              className="printer-card"
              key={printer.id}
            >
              <div
                className="printer-status-dot"
                style={{
                  backgroundColor: statusColor,
                }}
              />

              <h3>{printer.name}</h3>

              <p className="printer-status">
                {getOperationalLabel(
                  operationalState
                )}
              </p>

              <small>
                {getHealthLabel(
                  connectionHealth
                )}
              </small>

              {operationalState === "printing" ? (
                <>
                  <div className="printer-progress">
                    <div
                      className="printer-progress-fill"
                      style={{
                        width: `${progress}%`,
                        backgroundColor:
                          statusColor,
                      }}
                    />
                  </div>

                  <p className="printer-progress-text">
                    {progress}% Complete
                  </p>
                </>
              ) : (
                <p className="printer-progress-text">
                  {operationalState === "ready"
                    ? "Ready for Job"
                    : "No Active Print"}
                </p>
              )}

              <p className="printer-job">
                📦{" "}
                {live?.job ||
                  "No Active Print"}
              </p>

              <p className="printer-material">
                🧵 {printer.material || "-"}
              </p>

              <p className="printer-finish">
                🛠 Health:{" "}
                {getHealthLabel(
                  connectionHealth
                )}
              </p>

              <p className="printer-finish">
                ⏱ Remaining:{" "}
                {operationalState === "printing"
                  ? formatMinutes(
                      live?.remainingMinutes
                    )
                  : "--"}
              </p>

              <p className="printer-finish">
                ✅ Completed Today:{" "}
                {printer.completedToday ?? 0}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}