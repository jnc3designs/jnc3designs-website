Foundational Business Engines

JNC OS currently contains three primary shared business engines.

Orders Engine

Primary module:

lib/orderStats.js

Responsibilities include shared order calculations and reusable order collections.

Consumers include Mission Control systems such as:

Business Metrics
Priority Center
Smart Alerts
Next Actions
Daily Mission
Inventory Engine

Primary module:

lib/inventoryStats.js

Responsibilities include shared inventory calculations and inventory-condition intelligence.

Consumers include:

Inventory Summary
Priority Center
Smart Alerts
Daily Mission
Printer Fleet Engine

Primary module:

lib/printerStats.js

The Printer Fleet Engine converts raw printer telemetry into operational fleet intelligence.

Responsibilities include:

Merge registered printers with live telemetry
Determine connection health
Normalize printer operational states
Identify printing printers
Identify ready printers
Identify paused printers
Identify printers requiring attention
Identify stale printers
Identify offline printers
Calculate operational fleet size
Calculate active production capacity
Provide printer collections to Mission Control
Physical Production Architecture

Physical printers do not communicate directly with the JNC3Designs website.

JNC Bridge acts as the controlled infrastructure layer between the local printer network and JNC OS.

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
             Mission Control Intelligence
Physical Printer Fleet

The current JNC3Designs printer fleet consists of:

Bambu P1S
Bambu P2S
Bambu X1C
Bambu H2D

The architecture is fleet-oriented rather than printer-specific.

Additional printers should be integrated through the existing JNC Bridge architecture rather than creating separate telemetry systems.

JNC Bridge

JNC Bridge is the local physical-infrastructure service for JNC OS.

It is maintained separately from the JNC3Designs website.

Responsibilities

JNC Bridge handles:

Local printer communication
Bambu MQTT connections
Multi-printer telemetry collection
Fleet state management
Per-printer state updates
Per-printer lastSeen timestamps
Persistent bridge state
Cloud publishing

JNC Bridge should remain responsible for physical printer communication.

JNC OS should remain responsible for business and operational intelligence.

Repository Boundary

JNC OS and JNC Bridge are separate source-control projects.

JNC3Designs Website / JNC OS Repository

Responsibilities include:

Public website
Mission Control
Admin workspaces
Business engines
Printer Fleet Engine
Production intelligence
Bridge API
Business data
JNC Bridge Repository

Repository:

jnc-printer-bridge

Responsibilities include:

Physical printer connections
Local MQTT
Telemetry collection
Fleet state
Cloud publishing

Sensitive Bridge configuration and runtime state must not be committed.

Examples include:

.env
node_modules/
logs/
bridge-state.json
JNC OS Bridge API

Current endpoint:

/api/bridge/printers

The Bridge API provides the controlled cloud boundary between JNC Bridge and JNC OS.

JNC Bridge publishes printer telemetry to this endpoint.

Mission Control consumes printer information through JNC OS rather than connecting directly to physical printers.

Printer Connection Health

Connection health is evaluated independently from printer operational state.

Current connection-health states:

Live

The printer has reported telemetry within the expected live interval.

Stale

Telemetry exists, but the printer has not reported within the normal live interval.

Offline

The printer has exceeded the allowed telemetry interval or has no valid live state.

This prevents an old printer state from being mistaken for current production information.

Printer Operational State

Raw printer state is normalized by the Printer Fleet Engine.

Current operational states include:

Printing
Ready
Paused
Needs Attention
Unknown

Connection health and operational state must remain separate concepts.

Example:

A printer may have last reported that it was printing, but if its telemetry becomes outdated, Mission Control should treat its connection as stale or offline rather than assuming that old state is still current.

Mission Control Live Consumers

Live printer intelligence currently feeds multiple Mission Control systems.

Print Farm Status

Provides individual printer visibility.

Capacity Overview

Calculates current fleet production capacity.

Smart Alerts

Uses live printer conditions when identifying operational issues and available capacity.

Next Actions

Uses live printer availability when recommending production actions.

Daily Mission

Combines printer conditions with:

Rush orders
Outstanding balances
Inventory conditions
Business priorities

This creates a shared operational view across business and production systems.

Production Workspace

Route:

/admin/production

The Production workspace provides dedicated production visibility.

Current live functionality includes printer telemetry.

Planned systems include:

Production Queue
Maintenance
Production Metrics
Production scheduling
Fleet performance analytics
Data Flow Principle

Raw data should move upward through controlled layers.

RAW DATA
   │
   ▼
SHARED DATA / INTEGRATION
   │
   ▼
BUSINESS ENGINE
   │
   ▼
OPERATIONAL INTELLIGENCE
   │
   ▼
PRESENTATION COMPONENT

Components should not independently recreate calculations already available from an engine.

External integrations should not bypass controlled integration boundaries.

Next Architecture Direction
Production Queue Intelligence

The next major production architecture should connect existing order intelligence with live printer intelligence.

Target architecture:

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
Printer capability
Build volume
Nozzle requirements
Estimated print duration
Current printer workload
Printer availability

The Production Queue should build on the existing Orders Engine and Printer Fleet Engine rather than create duplicate order or printer systems.

Future External Integrations

Potential future integrations may include:

Square
Google Sheets
Marketing platforms
AI services
Customer communications
Inventory suppliers

Each external system should connect through a controlled integration layer and feed existing JNC OS engines whenever possible.

Architecture Rule

One source of truth.

One engine for each business responsibility.

One controlled path for physical infrastructure.

Build on stable foundations instead of replacing them.

Forge Principle

BUILD ONCE. IMPROVE FOREVER.