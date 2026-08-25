# JNC OS – Start Here

Welcome to the JNC OS project.

This document is the primary entry point for anyone continuing development of JNC OS and Mission Control.

---

# Read in This Order

1. CURRENT-STATUS.md
2. FORGE-LEDGER.md
3. ARCHITECTURE.md
4. DATA-MODEL.md
5. TECH-STACK.md
6. FORGING-PHILOSOPHY.md
7. JNC-OS-VISION.md

Always begin with CURRENT-STATUS.md.

It represents the most current operational state of the project.

---

# Current JNC OS Version

v0.32

## Current Milestone

Live Fleet Intelligence

## Next Major Direction

Production Queue Intelligence

---

# Development Philosophy

Mission Control is built around a simple principle:

**Components display data.**

**Business engines calculate and interpret data.**

Business logic belongs inside reusable engines.

Components should remain presentation-focused whenever practical.

External infrastructure should remain separated from website presentation and business logic.

---

# Current Architecture

JNC OS currently contains three foundational business engines.

## Orders Engine

Primary module:

`lib/orderStats.js`

Provides shared order intelligence to Mission Control.

## Inventory Engine

Primary module:

`lib/inventoryStats.js`

Provides shared inventory intelligence to Mission Control.

## Printer Fleet Engine

Primary module:

`lib/printerStats.js`

Provides shared live printer intelligence including:

- Fleet merging
- Connection health
- Operational state
- Printer availability
- Printer attention states
- Fleet capacity

---

# Live Production Architecture

JNC OS is connected to the physical JNC3Designs printer fleet through JNC Bridge.

Current architecture:

Bambu Printer Fleet  
→ Local MQTT  
→ JNC Bridge  
→ Fleet State Engine  
→ Cloud Publisher  
→ JNC OS Bridge API  
→ Printer Fleet Engine  
→ Mission Control

Current printer fleet:

- Bambu P1S
- Bambu P2S
- Bambu X1C
- Bambu H2D

---

# Mission Control

Mission Control currently combines business data and live production telemetry.

Major systems include:

- Today's Mission
- Business Metrics
- Priority Center
- Inventory Summary
- Print Farm Status
- Print Farm Capacity
- Smart Alerts
- Next Actions

Live printer telemetry is consumed by:

- Print Farm Status
- Capacity Overview
- Smart Alerts
- Next Actions
- Daily Mission

---

# Production Workspace

Route:

`/admin/production`

The Production workspace provides direct visibility into live printer telemetry.

Current live information includes:

- Printer state
- Active job
- Progress
- Remaining time
- Layer information
- Nozzle temperature
- Bed temperature

Future production systems will expand this workspace into production scheduling and management.

---

# Forge Workflow

Every Forge should contain:

## Objective

Why are we making this change?

## Scope

Exactly which files will change.

## Expected Result

What should happen after the change?

## Implementation

Make the smallest change necessary to accomplish the objective.

## Verification

Confirm:

- Saved
- Production build passes
- Deployment succeeds when applicable
- UI works
- Existing systems remain operational

## Documentation

When architecture, project status, or major functionality changes, update the appropriate documentation.

At minimum review:

- CURRENT-STATUS.md
- FORGE-LEDGER.md

For architectural changes also review:

- ARCHITECTURE.md
- START-HERE.md

---

# Engineering Rules

Before making changes ask:

1. Why?
2. What problem does it solve?
3. Is there a simpler solution?
4. Does an existing engine already provide this logic?
5. Will this preserve working infrastructure?

Avoid unnecessary refactoring.

Respect existing architecture.

Do not duplicate business logic across components.

Do not redesign working live infrastructure without a clear reason.

Expand stable systems incrementally.

Build before committing.

Verify before moving to the next Forge.

---

# Repository Boundaries

## JNC3Designs Website / JNC OS

Contains:

- Website
- Mission Control
- Business engines
- Production workspace
- JNC OS Bridge API
- Administrative tools

## JNC Bridge

Separate infrastructure project and Git repository.

Contains:

- Physical printer communication
- Local MQTT connections
- Fleet telemetry
- Bridge state
- Cloud publishing

Sensitive Bridge configuration must never be committed to source control.

---

# Current Direction

The Live Fleet Intelligence milestone establishes the physical production layer of JNC OS.

The next major architecture objective is:

## Production Queue Intelligence

Target direction:

Orders  
→ Production Priority  
→ Production Queue  
→ Printer Requirements  
→ Live Printer Availability  
→ Recommended Assignment  
→ Live Production

This should be developed incrementally on top of the existing Orders Engine and Printer Fleet Engine.

---

# Forge Principle

BUILD ONCE. IMPROVE FOREVER.

Forge by Forge.

Feature by Feature.

Always leave the project better than you found it.

⚒️ LET'S KEEP FORGING.