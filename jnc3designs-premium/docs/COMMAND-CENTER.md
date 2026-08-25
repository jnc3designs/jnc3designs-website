# JNC OS Command Center

## Purpose

A one-screen operational briefing that helps run JNC3Designs each day.

The Command Center should surface what needs attention, what capacity is available, and what action should happen next.

---

# Current JNC OS Version

v0.32

## Current Milestone

Live Fleet Intelligence

## Next Major Direction

Production Queue Intelligence

---

# Core Principles

- Action over information
- One source of truth
- Surface exceptions first
- Recommendations over raw data
- Live operational data when available
- Business engines calculate and interpret data
- Components present decisions clearly
- Physical systems connect through controlled integration layers

---

# Command Center Sections

1. Today's Mission
2. Business Health
3. Production
4. Inventory
5. Smart Alerts
6. Next Actions
7. Growth
8. JNC Assistant

---

# Live Production Integration

## Status

LIVE — Multi-Printer Fleet

JNC OS receives real production telemetry from the physical JNC3Designs printer fleet through JNC Bridge.

Current live printer fleet:

- Bambu P1S
- Bambu P2S
- Bambu X1C
- Bambu H2D

---

# Live Telemetry Flow

```text
Bambu Printer Fleet
        │
        ▼
   Local MQTT
        │
        ▼
    JNC Bridge
        │
        ▼
 Fleet State Engine
        │
        ▼
Persistent Bridge State
        │
        ▼
 Cloud Publisher
        │
        ▼
 JNC OS Bridge API
        │
        ▼
Printer Fleet Engine
        │
        ▼
Mission Control
Production route:

/admin/production

Printer API:

/api/bridge/printers

Live printer interfaces automatically refresh telemetry.

Printer Fleet Intelligence

The Printer Fleet Engine interprets raw telemetry before Mission Control uses it.

Primary module:

lib/printerStats.js

Connection Health

Supported states:

Live
Stale
Offline
Operational State

Supported states:

Printing
Ready
Paused
Needs Attention
Unknown

Connection health and operational state are evaluated separately.

This prevents old telemetry from being mistaken for current printer activity.

Mission Control Live Production Systems
Print Farm Status

Displays current physical printer conditions.

Current live information can include:

Printer name
Connection health
Operational state
Active job
Print progress
Remaining time
Layer progress
Material
Production status
Capacity Overview

Uses live fleet telemetry to calculate current production capacity.

Current intelligence includes:

Printing printers
Available printers
Offline or stale printers
Active production capacity

Capacity is based on live fleet state rather than demonstration data.

Smart Alerts

Smart Alerts combines business conditions and physical production conditions.

Current alert sources include:

Rush orders
Inventory conditions
Printer availability
Printer attention states
Paused printers
Stale telemetry
Offline printers

The goal is to surface exceptions before they become operational problems.

Next Actions

Next Actions recommends specific work based on current conditions.

Current recommendation sources include:

Rush orders
Low inventory
Printer availability
Printer errors
Printer pauses
Stale telemetry
Offline printers

When a printer is live and available, Mission Control can recommend assigning the next production job to that printer.

Daily Mission
Purpose

Provide a 30-second operational briefing at the start of the day.

Today's Mission combines business priorities and live production conditions.

Current priority sources include:

Rush orders
Outstanding payments
Out-of-stock inventory
Low inventory
Printer errors
Paused printers
Offline printers
Stale telemetry
Available printer capacity
Full production capacity
Design Principle

Every Daily Mission item should do at least one of the following:

identify work requiring attention
highlight a developing risk
surface available capacity
recommend a next action

Live integrations should improve decisions rather than simply add more information.

Production Workspace

Route:

/admin/production

Current
Print Farm Activity

LIVE

Displays real printer telemetry through JNC Bridge.

Planned
Production Queue

Future scheduling and queued-job management.

Maintenance

Future tracking for:

Nozzle changes
Lubrication
Maintenance intervals
Service history
Production Metrics

Future intelligence may include:

Printer utilization
Production hours
Completed jobs
Material usage
Fleet performance
JNC Bridge

JNC Bridge is the physical printer integration layer for JNC OS.

It is maintained as a separate Git repository:

jnc-printer-bridge

Responsibilities include:

Local printer communication
MQTT connections
Multi-printer telemetry
Fleet state
Per-printer lastSeen
Persistent Bridge state
Cloud publishing

The JNC3Designs website should never communicate directly with the physical printers.

Current Infrastructure Requirement

JNC Bridge currently runs on local JNC3Designs infrastructure.

If JNC Bridge stops:

Physical printers continue operating normally.
JNC OS retains the last synchronized telemetry.
Printer health eventually becomes stale or offline.
New telemetry does not reach JNC OS until the Bridge resumes.

Future infrastructure should move JNC Bridge to an always-on host.

Potential options include:

Mini PC
Home server
Dedicated JNC Bridge host
Current Milestone

Mission Control has progressed beyond printer monitoring.

JNC OS now:

receives live multi-printer telemetry
interprets printer health
understands operational state
calculates production capacity
detects availability
surfaces printer issues
incorporates production conditions into business priorities

Mission Control is beginning to operate as a real command center rather than a passive dashboard.

Next Development Priority
Production Queue Intelligence

The next major Command Center objective is connecting order priority with live printer availability.

Target direction:

Orders
   │
   ▼
Production Priority
   │
   ▼
Production Queue
   │
   ▼
Job Requirements
   │
   ▼
Printer Capability
   │
   ▼
Live Printer Availability
   │
   ▼
Recommended Assignment
   │
   ▼
Live Production

Future scheduling intelligence may consider:

Rush status
Due date
Order priority
Material
Build volume
Printer capability
Nozzle requirements
Estimated print duration
Current workload
Printer availability

The Production Queue should build on the existing Orders Engine and Printer Fleet Engine.

Future Integrations

Potential future Command Center integrations include:

Square
Website orders
Google Sheets
Marketing analytics
Production queue
Printer maintenance
Production metrics
Notifications
Customer communications
AI-assisted production planning
Command Center Principle

Every section must either:

identify work that needs attention
highlight a developing risk
show meaningful capacity
recommend a next action

If it does none of those, reconsider whether it belongs in Mission Control.

BUILD ONCE. IMPROVE FOREVER.
