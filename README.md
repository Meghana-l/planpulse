# PlanPulse · FP&A Intelligence Dashboard

A revenue planning and forecasting intelligence tool for software businesses. Combines live macroeconomic data with internal plan vs. actuals analysis to support data-driven FP&A decision-making.

## Features

**Live Macro Environment**
- Real-time US GDP growth, Software Producer Price Index, and Tech Employment data pulled directly from the Federal Reserve Economic Data (FRED) API
- Macro indicators feed directly into forecast confidence scoring and forward revenue projections

**Revenue Performance**
- YTD actuals vs. plan with variance flagged at the KPI level
- Month-by-month bar chart overlaying actuals, plan, and macro-adjusted forecast
- Forecast adjusts dynamically based on real GDP — above-trend growth shifts projections upward, below-trend triggers downward revision

**Variance Analysis**
- Revenue stream breakdown across commercial licenses, academic subscriptions, professional services, maintenance & renewals, and new bookings
- Dollar and percentage variance with directional tagging per stream

**Scenario Planner**
- Base / Bull / Bear quarterly outlook with full-year revenue total
- Scenario adjustments driven by macro assumptions tied to live GDP

**Renewal Cohort Analysis**
- Rolling 6-quarter retention rates by segment (commercial vs. academic)
- Line chart with fill to surface divergence between segments over time

**Forecast Risk Drivers**
- Qualitative risk and opportunity register with probability, dollar impact, and relative impact bars
- Covers FX exposure, pipeline risk, competitive displacement, and upsell opportunities

## Data Sources

| Layer | Source | Type |
|---|---|---|
| GDP Growth | FRED · A191RL1Q225SBEA | Live API |
| Software PPI | FRED · PCU511210511210 | Live API |
| Tech Employment | FRED · CES6054000001 | Live API |
| Revenue plan & actuals | Internal · illustrative | Simulated |
| Renewal cohort data | Internal · illustrative | Simulated |
