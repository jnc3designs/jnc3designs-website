# JNC OS Architecture

## Purpose

This document defines the overall architecture of JNC OS.

Its purpose is to ensure every future Forge builds toward one unified platform instead of isolated features.

---

# Guiding Principle

JNC OS has one source of truth.

Every module reads from and writes to the same business data.

No duplicate systems.

No duplicate data entry.

---

# High-Level Architecture

                Website
                    │
                    ▼
           Mission Control
                    │
 ┌──────────┬──────────┬──────────┬──────────┐
 ▼          ▼          ▼          ▼
Orders   Customers  Inventory  Print Farm
 │          │          │          │
 └──────────┴──────────┴──────────┘
                    │
                    ▼
            Business Database
                    │
 ┌──────────┬──────────┬──────────┬──────────┐
 ▼          ▼          ▼          ▼
Square   Printers  Google Sheets  AI Assistant

---

# Core Modules

## Mission Control

Purpose:

Provide one dashboard for the entire business.

Responsibilities:

- Business overview
- Smart alerts
- Daily brief
- Recommendations
- Quick actions
- Production awareness

---

## Orders

Tracks every customer order.

Future capabilities:

- Quotes
- Deposits
- Status
- Production queue
- Delivery
- Order history

---

## Customers

Maintains customer relationships.

Future capabilities:

- Contact information
- Order history
- Preferred materials
- Favorite colors
- Notes
- Lifetime value

---

## Inventory

Tracks:

- Filament
- Hardware
- Packaging
- Supplies
- Low stock alerts
- Purchase history

---

## Print Farm

Tracks:

- Printers
- Active jobs
- Print queue
- Estimated completion
- Maintenance
- Utilization

Current printers:

- Bambu Lab P1S
- Bambu Lab X1C
- Bambu Lab P2S

Planned:

- Bambu Lab H2D

---

# Future Integrations

## Square

Will provide:

- Payments
- Customers
- Orders
- Inventory adjustments

---

## Printer Integration

Future live data:

- Print progress
- Temperatures
- Camera status
- Errors
- Remaining time

---

## Google Sheets

Current role:

Legacy operational data.

Future role:

Migration tool

Backup

Import/export

---

## AI Assistant

Purpose:

Become the operational assistant for JNC3Designs.

Examples:

"What should I print next?"

"Which customer has not picked up an order?"

"Which printer finishes first?"

"What filament needs reordering?"

---

# Data Flow

Customer
        │
        ▼
Quote
        │
        ▼
Deposit
        │
        ▼
Order
        │
        ▼
Print Queue
        │
        ▼
Printer
        │
        ▼
Quality Check
        │
        ▼
Ready for Pickup
        │
        ▼
Delivered
        │
        ▼
Customer History

---

# Development Priorities

Phase 1

✔ Documentation

✔ Architecture

⬜ Database

⬜ Authentication improvements

---

Phase 2

Orders

Customers

Inventory

Print Farm

---

Phase 3

Square

Printers

Google Sheets

---

Phase 4

Automation

AI Assistant

Analytics

Business Intelligence

---

# Forge Rule

Every new feature should answer:

1. Which module owns this?

2. Which data does it use?

3. Does another module already solve this?

4. Does this simplify the business?

If the answer to #4 is "no", reconsider the Forge.
