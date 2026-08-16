# JNC OS Architecture

## Purpose

This document defines the overall architecture of JNC OS.

Its purpose is to ensure every future Forge builds toward one unified platform instead of isolated features.

---

# Guiding Principle

JNC OS has one source of truth.

Every module should consume shared business data and shared engines rather than create duplicate systems.

No duplicate systems.

No unnecessary duplicate data entry.

Live hardware integrations should feed JNC OS through controlled integration layers rather than allowing the website to communicate directly with physical equipment.

---

# High-Level Architecture

```text
                    JNC3Designs Website
                            │
                            ▼
                     Mission Control
                            │
          ┌─────────────────┼─────────────────┐
          │                 │                 │
          ▼                 ▼                 ▼
       Orders           Inventory         Production
          │                 │                 │
          ▼                 ▼                 ▼
     Orders Engine    Inventory Engine   Printer Fleet Engine
          │                 │                 │
          └─────────────────┼─────────────────┘
                            │
                            ▼
                    Shared Business Data

External and physical systems connect through controlled integration layers.

         Physical Printers
                │
                ▼
          Local MQTT
                │
                ▼
           JNC Bridge
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
        Cloud Printer State
                │
                ▼
       Production Dashboard

Future external integrations may include:

Square
Google Sheets
Marketing Platforms
AI Services
