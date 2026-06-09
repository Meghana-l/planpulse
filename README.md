# PlanPulse · FP&A Intelligence Dashboard

A driver-based revenue forecasting and variance analysis tool for software businesses. Move a slider and every chart, waterfall, sensitivity table, and KPI updates instantly — the way a real FP&A model should work.

Live - https://planpulse-flame.vercel.app/

## Features

**Driver-Based Revenue Model**
- Six live business drivers: renewal rate, new logo count, average contract value, seat expansion rate, churn rate, price increase
- Every change instantly recomputes ARR, monthly revenue, waterfall, and all downstream charts
- Built on a standard SaaS revenue model: renewal base + expansion + new logo − churn + price lift

**Revenue Waterfall (Plan → Forecast)**
- Decomposes the gap between plan and forecast into individual motion categories
- Updates live as drivers change

**Price–Volume–Mix Variance Decomposition**
- Isolates how much of the variance comes from price changes vs. volume (new logos) vs. mix (ACV shift)
- Standard FP&A analytical framework, computed dynamically

**Sensitivity Table**
- Full ARR grid across renewal rate × ACV combinations
- Color-coded: green = above plan, red = below plan
- Highlights the driver pairs that matter most to the model

**Live Macro Environment**
- US GDP growth, Software PPI, Tech Employment, and Federal Funds Rate pulled from FRED (Federal Reserve) in real time
- GDP feeds into forecast confidence scoring

**AI Variance Commentary**
- On-demand FP&A analysis via Groq LLM
- Reads current driver state, variance decomposition, and macro data
- Returns senior analyst-style bullet points explaining what's driving the gap

## Data Sources

| Layer | Source | Type |
|---|---|---|
| US GDP Growth | FRED · A191RL1Q225SBEA | Live API |
| Software PPI | FRED · PCU511210511210 | Live API |
| Tech Employment | FRED · CES6054000001 | Live API |
| Fed Funds Rate | FRED · FEDFUNDS | Live API |
| Revenue model | Driver-computed | Interactive |
| AI commentary | Groq · llama-3.1-8b-instant | Live API (server-side) |

## Deployment

Deploy to Vercel. Add `GROQ_API_KEY` as an environment variable in the Vercel dashboard. The `/api/commentary` serverless function proxies all Groq calls server-side — the key never touches the browser.
