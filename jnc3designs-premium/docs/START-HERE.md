# JNC OS – Start Here

Welcome to the JNC OS project.

This document is the primary entry point for anyone continuing development of Mission Control.

---

# Read in this order

1. CURRENT-STATUS.md
2. FORGE-LEDGER.md
3. ARCHITECTURE.md
4. DATA-MODEL.md
5. TECH-STACK.md
6. FORGING-PHILOSOPHY.md
7. JNC-OS-VISION.md

---

# Development Philosophy

Mission Control is built around a simple principle:

**Components display data.**
**Business engines calculate data.**

Business logic belongs inside reusable engines.

Components should remain presentation-focused whenever possible.

---

# Forge Workflow

Every Forge must contain:

## Objective

Why are we making this change?

## Scope

Exactly which files will change.

## Expected Result

What should happen after the change?

## Implementation

The actual code changes.

## Verification

Confirm:

- Saved
- Builds
- Deploys
- UI works

## Documentation

Update:

- CURRENT-STATUS.md
- FORGE-LEDGER.md

---

# Engineering Rules

Before making changes ask:

1. Why?
2. What problem does it solve?
3. Is there a simpler solution?

Avoid unnecessary refactoring.

Respect existing architecture.

Build on stable foundations.

---

# Current Architecture

Business Engines

- orderStats.js
- inventoryStats.js

Mission Control Components

- BusinessMetrics
- PriorityCenter
- InventorySummary

These currently consume the shared business engines.

Future components should use existing engines whenever possible.

---

Forge by Forge.

Feature by Feature.

Always leave the project better than you found it.

⚒️ LET'S KEEP FORGING.
