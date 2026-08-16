# JNC OS Command Center

## Purpose

A one-screen operational briefing that helps run JNC3Designs each day.

## Core Principles

- Action over information
- One source of truth
- Surface exceptions first
- Recommendations over raw data
- Live operational data when available

## Sections

1. Today's Priorities
2. Business Health
3. Production
4. Growth
5. JNC Assistant

---

# Current Live Integrations

## Bambu Printer Telemetry

Status:

LIVE

JNC OS now receives real production telemetry from physical Bambu printers through JNC Bridge.

Current live printer:

- Bambu P1S

Current telemetry includes:

- Printer state
- Active print job
- Print progress
- Remaining time
- Current and total layers
- Nozzle temperature
- Bed temperature
- Last cloud synchronization

Current flow:

Bambu Printer  
→ Local MQTT  
→ JNC Bridge  
→ Persistent Bridge State  
→ Cloud Publisher  
→ JNC OS API  
→ Production Dashboard

Production route:

`/admin/production`

Printer API:

`/api/bridge/printers`

The Production Dashboard automatically checks for updated cloud telemetry every five seconds.

---

# Printer Fleet Expansion

Current JNC3Designs printer fleet:

- Bambu P1S — Live
- Bambu P2S — Pending Integration
- Bambu X1C — Pending Integration
- Bambu H2D — Planned

Current architecture work is focused on expanding JNC Bridge from a single-printer connection into a multi-printer fleet architecture.

The Production UI already consumes a printer collection and is being designed to scale without requiring a separate dashboard for each printer.

---

# Future Integrations

- Square
- Website orders
- Google Sheets
- Marketing analytics
- Production queue
- Printer maintenance tracking
- Production metrics
- Notifications and operational alerts

---

# Daily Mission

## Purpose

Provide a 30-second operational briefing at the start of the day.

## Sections

1. Today's Priorities
2. Print Farm
3. Inventory Watch
4. Business Snapshot
5. JNC Assistant Recommendation

## Design Principle

Every section must either:

- identify work that needs attention,
- highlight a developing risk,
- or recommend a next action.

Live integrations should enhance these decisions rather than simply add more information.

---

# Production Direction

The Print Farm section is transitioning from demonstration printer data to real production telemetry.

Current milestone:

**Physical Production → JNC OS**

Future Command Center production intelligence should build on the live telemetry foundation rather than create a separate printer-data system.

Potential future operational signals include:

- Printer offline
- Print paused
- Print completed
- Print failure
- Remaining production time
- Printer availability
- Queue pressure
- Maintenance due
- Production capacity

---

# Current Infrastructure Requirement

JNC Bridge currently runs locally and must remain active for new printer telemetry to reach JNC OS.

If JNC Bridge stops:

- Physical printers continue operating normally.
- JNC OS retains the last synchronized printer state.
- New telemetry does not reach the cloud until the Bridge resumes.

Future infrastructure should move JNC Bridge toward an always-on service or dedicated Bridge host.

---

# Current Development Priority

## Forge #112 — Multi-Printer Architecture

Objective:

Expand the working JNC Bridge architecture so the full JNC3Designs printer fleet can report through the same live production pipeline.

Engineering priority:

Preserve the known-good P1S integration while adding fleet capability incrementally.

---

BUILD ONCE. IMPROVE FOREVER.
