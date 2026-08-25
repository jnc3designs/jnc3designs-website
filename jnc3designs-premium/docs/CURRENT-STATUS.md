# JNC OS — Current Status

## Current Forge

### JNC OS Version

v0.32

### Current Milestone

Live Fleet Intelligence

### Architecture Status

Stable — Multi-Printer Live Infrastructure Active

---

# Architecture Snapshot

## Presentation Layer

- Mission Control
- Admin Pages
- Production Dashboard
- Live Print Farm Status
- Capacity Overview
- Smart Alerts
- Next Actions
- Daily Mission

## Business Engines

### Orders Engine

- BusinessMetrics
- PriorityCenter
- SmartAlerts
- NextActions
- DailyMission

### Inventory Engine

- PriorityCenter
- InventorySummary
- DailyBrief
- SmartAlerts
- NextActions
- DailyMission

### Printer Fleet Engine

Primary module:

`lib/printerStats.js`

Responsibilities:

- Merge registered printers with live telemetry
- Determine connection health
- Determine operational state
- Track live printers
- Track stale printers
- Track offline printers
- Identify printing printers
- Identify ready printers
- Identify paused printers
- Identify printers requiring attention
- Calculate live production capacity
- Provide fleet intelligence to Mission Control

## Shared Data

- Orders
- Products
- Printer Registry

---

# Live Printer Architecture

## JNC Bridge

JNC Bridge is the local infrastructure service connecting the physical JNC3Designs printer fleet to JNC OS.

JNC Bridge now supports the multi-printer architecture used by the JNC3Designs print farm.

Current printer fleet:

- Bambu Lab P1S
- Bambu Lab P2S
- Bambu Lab X1C
- Bambu Lab H2D

JNC Bridge maintains printer telemetry and publishes fleet state to JNC OS.

---

# Live Telemetry Pipeline

Current architecture:

Bambu Printer Fleet  
→ Local MQTT  
→ JNC Bridge  
→ Fleet State Engine  
→ Persistent Bridge State  
→ Cloud Publisher  
→ JNC OS Bridge API  
→ Printer Fleet Engine  
→ Mission Control

This architecture separates physical printer communication from JNC OS business intelligence.

---

# JNC Bridge Responsibilities

JNC Bridge currently handles:

- Local Bambu MQTT connections
- Multi-printer telemetry collection
- Printer state normalization
- Per-printer state storage
- Per-printer `lastSeen` timestamps
- Fleet state management
- Cloud publishing
- Local printer/fleet inspection

JNC Bridge operates independently from the JNC OS website repository.

---

# JNC Bridge Repository

JNC Bridge is maintained in its own Git repository.

Repository:

`jnc-printer-bridge`

This separates local printer infrastructure from the main JNC3Designs website and JNC OS application.

Sensitive configuration and runtime state are excluded from Git through `.gitignore`.

Examples include:

- `.env`
- `node_modules/`
- `logs/`
- `bridge-state.json`

---

# JNC OS Bridge API

Route:

`/api/bridge/printers`

Status:

LIVE

The endpoint provides the cloud connection between JNC Bridge and JNC OS.

Mission Control uses this telemetry as the source for live printer intelligence.

---

# Printer Health Intelligence

JNC OS now evaluates printer connection health using telemetry timestamps.

Supported connection states:

## Live

Printer telemetry has been received recently.

## Stale

The printer has stopped reporting within the expected live interval but has not yet exceeded the offline threshold.

## Offline

The printer is no longer reporting valid telemetry to JNC OS.

This allows Mission Control to distinguish between printer operation and communication health.

---

# Printer Operational Intelligence

JNC OS normalizes printer states into operational states.

Current operational states include:

- Printing
- Ready
- Paused
- Needs Attention
- Unknown

Printer connection health and operational state are evaluated independently.

Example:

A printer may be physically idle and operationally ready while still being considered offline if telemetry is no longer reaching JNC OS.

---

# Mission Control Live Fleet Integration

Mission Control now uses live printer telemetry across its primary operational intelligence systems.

## Print Farm Status

Displays the live state of the printer fleet.

Current information can include:

- Printer name
- Operational state
- Connection health
- Active job
- Print progress
- Material
- Remaining print time
- Completed jobs

## Capacity Overview

Uses live fleet state to calculate:

- Printing printers
- Available printers
- Active production capacity

Capacity is based on current live printer telemetry rather than demonstration printer status.

## Smart Alerts

Smart Alerts now evaluates live printer availability.

Mission Control can identify when production capacity is available instead of relying on static printer data.

## Next Actions

Next Actions now uses live fleet intelligence when recommending production work.

When a live printer is ready, Mission Control can recommend assigning the next job to that specific printer.

## Daily Mission

Today's Mission now consumes live printer telemetry.

Daily Mission can combine:

- Rush orders
- Outstanding payments
- Inventory conditions
- Printer errors
- Paused printers
- Offline printers
- Stale telemetry
- Available printer capacity
- Full production capacity

This allows Mission Control to generate business priorities using both operational business data and physical production conditions.

---

# Production Workspace

Route:

`/admin/production`

## Print Farm Activity

LIVE

Displays actual printer telemetry from JNC Bridge.

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
- Printer service history

## Production Metrics

Planned

Future production intelligence including:

- Printer utilization
- Completed jobs
- Production hours
- Material usage
- Fleet performance

---

# Printer Fleet

Current JNC3Designs fleet architecture:

| Printer | JNC OS Status |
| --- | --- |
| Bambu P1S | LIVE |
| Bambu P2S | LIVE |
| Bambu X1C | LIVE |
| Bambu H2D | LIVE |

The architecture is now operating as a multi-printer fleet rather than a single-printer proof of concept.

---

# Recently Completed Forges

## Forge #106 — Begin Cloud Publisher Integration

Established the Cloud Publisher foundation for transmitting printer state from JNC Bridge to JNC OS.

## Live Telemetry Integration

Completed the first end-to-end telemetry path between a physical Bambu printer and JNC OS.

## Forge #110 — Live Production Dashboard

Connected the JNC OS Production workspace to live printer telemetry.

## Forge #111 — Live Printer Auto Refresh

Added automatic telemetry refresh behavior to the Production dashboard.

## Multi-Printer Fleet Expansion

Expanded JNC Bridge beyond the original P1S proof of concept.

The JNC3Designs printer fleet can now report through the shared bridge architecture.

## Printer Fleet Health Foundation

Added fleet-level printer intelligence including:

- Live state
- Stale state
- Offline state
- Operational state
- Fleet merging
- Capacity calculations

## Mission Control Live Fleet Integration

Connected live printer telemetry to:

- Print Farm Status
- Capacity Overview
- Smart Alerts
- Next Actions
- Daily Mission

Mission Control now uses physical production conditions when generating operational information and recommendations.

---

# Current Operational Requirement

JNC Bridge currently depends on local JNC3Designs infrastructure remaining active.

For live telemetry to continue reaching JNC OS, the bridge service must remain running and maintain network access to the printer fleet.

Future infrastructure should move JNC Bridge to a dedicated always-on host.

Potential infrastructure includes:

- Mini PC
- Home server
- Dedicated JNC Bridge host

---

# Current Milestone

JNC OS has moved beyond its original live-printer proof of concept.

The system now has a functioning multi-printer telemetry architecture.

Physical printer state flows into JNC OS and is consumed by Mission Control business intelligence.

JNC OS is no longer only monitoring the print farm.

It is beginning to reason about production conditions and use those conditions when determining business priorities.

---

# Next Direction

## Production Queue Intelligence

The next major production milestone is connecting orders and live printer capacity into a unified production queue.

Target architecture:

Orders  
→ Production Priority  
→ Production Queue  
→ Printer Capability  
→ Available Printer  
→ Recommended Assignment  
→ Live Production

Future production intelligence may consider:

- Rush status
- Due date
- Order priority
- Printer availability
- Printer capability
- Build volume
- Material requirements
- Nozzle requirements
- Estimated job duration
- Current printer workload

The objective is to evolve Mission Control from production monitoring into production management.

---

# Forge Principle

BUILD ONCE. IMPROVE FOREVER.