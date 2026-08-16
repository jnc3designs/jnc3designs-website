# JNC OS — Current Status

## Current Forge

### JNC OS Version

v0.31

### Current Milestone

Live Production Infrastructure

### Architecture Status

Stable — Live Infrastructure Active

---

# Architecture Snapshot

## Presentation Layer

- Mission Control Components
- Admin Pages
- Production Dashboard
- Live Printer Status

## Business Engines

### Orders Engine

- BusinessMetrics
- PriorityCenter
- SmartAlerts
- NextActions

### Inventory Engine

- PriorityCenter
- InventorySummary
- DailyBrief
- SmartAlerts

### Printer Fleet Engine

- printerStats.js
- Printer fleet state analysis
- Printer availability logic
- Production status support

## Shared Data

- Orders
- Products
- Printers

## Live Integrations

### JNC Bridge

Local bridge service connecting JNC OS to physical printers on the JNC3Designs network.

Current supported connection:

- Bambu Lab P1S

Planned fleet expansion:

- Bambu Lab P2S
- Bambu Lab X1C
- Bambu Lab H2D

### Live Telemetry Pipeline

Current telemetry flow:

Bambu Printer  
→ Local MQTT  
→ JNC Bridge  
→ Persistent Bridge State  
→ Cloud Publisher  
→ JNC OS API  
→ Production Dashboard

### Cloud API

Endpoint:

`/api/bridge/printers`

The API receives printer telemetry published by JNC Bridge and exposes the latest printer state to JNC OS.

### Production Dashboard

Route:

`/admin/production`

The Production workspace now displays live printer information synchronized through JNC Bridge.

Current telemetry includes:

- Printer name
- Printer state
- Active job
- Print progress
- Remaining print time
- Current layer
- Total layers
- Nozzle temperature
- Bed temperature
- Last cloud update

The dashboard automatically refreshes printer information.

---

# Current Live Printer

## Bambu P1S

Status:

LIVE

The P1S is currently connected to JNC Bridge and has successfully transmitted real production telemetry into JNC OS.

Verified states include:

- Printing / RUNNING
- Ready / IDLE
- Job progress
- Remaining time
- Layer progress
- Nozzle temperature
- Bed temperature

JNC OS has successfully followed the printer through active print jobs and subsequent printer states.

---

# Infrastructure Components

## JNC Bridge

Location:

Local JNC3Designs infrastructure

Responsibilities:

- Connect to Bambu printers through local MQTT
- Listen for printer telemetry
- Maintain the latest printer state
- Provide a local printer API
- Publish printer state to JNC OS

## Bridge Local API

Current local endpoint:

`http://localhost:3100/api/printer`

Used for inspecting the printer state directly from the machine running JNC Bridge.

## Cloud Publisher

The Cloud Publisher reads the current bridge state and synchronizes printer information with JNC OS.

Current destination:

`https://www.jnc3designs.com/api/bridge/printers`

## JNC OS Production API

Route:

`/api/bridge/printers`

Current status:

LIVE

The endpoint is deployed through the JNC3Designs website and receives telemetry from JNC Bridge.

---

# Recently Completed Forges

## Forge #106 — Begin Cloud Publisher Integration

Established the Cloud Publisher foundation for transmitting printer state from JNC Bridge to JNC OS.

## Live Telemetry Integration

Completed the first end-to-end telemetry path between a physical Bambu printer and JNC OS.

Verified:

- MQTT printer connection
- Live printer status
- Persistent bridge state
- Cloud publishing
- JNC OS API reception

## Forge #110 — Live Production Dashboard

Connected the JNC OS Production workspace to live printer telemetry.

The Production page now contains a live Print Farm Activity section displaying actual printer information.

## Forge #111 — Live Printer Auto Refresh

Added automatic refresh behavior to the live printer dashboard.

The Production dashboard can now update printer telemetry without requiring manual browser refreshes.

---

# Production Workspace

Route:

`/admin/production`

Current sections:

## Print Farm Activity

LIVE

Displays real printer telemetry from JNC Bridge.

## Print Queue

Planned

Future production scheduling and queued-job management.

## Maintenance

Planned

Future tracking for:

- Nozzle changes
- Lubrication
- Printer maintenance
- Maintenance schedules

## Production Metrics

Planned

Future production statistics and printer utilization analytics.

---

# Printer Fleet

Current JNC3Designs printer fleet planned for JNC OS integration:

| Printer | Bridge Status |
| --- | --- |
| Bambu P1S | LIVE |
| Bambu P2S | Pending Integration |
| Bambu X1C | Pending Integration |
| Bambu H2D | Planned |

The architecture is being designed for a multi-printer environment rather than a single-printer dashboard.

---

# Current Operational Requirement

JNC Bridge currently runs on the local MacBook.

The bridge process must remain running for live printer telemetry to continue reaching JNC OS.

Future infrastructure work should move JNC Bridge to an always-on system so telemetry does not depend on the MacBook Terminal remaining open.

Potential infrastructure includes:

- Mini PC
- Home server
- Dedicated JNC Bridge host

---

# Current Milestone

The first physical printer is now connected end-to-end to JNC OS.

JNC OS is no longer operating solely on demonstration printer data.

Real-world production telemetry is flowing through the system.

---

# Next Direction

Expand the JNC Bridge architecture from a single-printer connection into the JNC3Designs printer fleet.

Primary next objectives:

1. Prepare JNC Bridge configuration for multiple printers.
2. Preserve the working P1S connection.
3. Add additional printers incrementally.
4. Display multiple live printers inside Production.
5. Maintain one shared telemetry architecture for the entire farm.

---

# Forge Principle

BUILD ONCE. IMPROVE FOREVER.
