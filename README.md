# AshtaSetu: AI-Based Smart Logistics & Accessibility Intelligence Platform for NER

**SIH26002 Prototype · Ministry of Development of North Eastern Region (MDoNER)**

## Project Purpose

AshtaSetu is an AI-powered Smart Logistics and Accessibility Intelligence Platform developed for the Smart India Hackathon (SIH26002). It addresses the unique logistics and connectivity challenges of the North Eastern Region (NER) caused by difficult terrain, extreme weather, landslides, floods, and limited transport infrastructure.

The platform provides real-time road/bridge accessibility monitoring, predictive disruption alerts, AI-based alternate route suggestions, GPS vehicle tracking for essential commodities, and centralized logistics dashboards for district administrations and field officials.

## Key Features (aligned to SIH26002)

1. **Real-time Accessibility Monitoring** – GIS-enabled dashboard showing road, bridge and corridor status across NER districts.
2. **AI Route Prediction & Optimization** – Predictive disruption scoring (landslide, flood, heavy rain, road damage, congestion) + alternate route suggestions with estimated delays.
3. **GPS Vehicle Tracking** – Live tracking of vehicles carrying medicines, food supplies, agricultural produce and construction materials.
4. **Automated Alerts** – Blocked roads, inaccessible regions, delayed deliveries, high-risk corridors (with multilingual notifications).
5. **Field Reporting (Offline-first)** – Geo-tagged photo + incident reports from remote locations with automatic sync.
6. **Centralized Dashboards**
   - District-wise connectivity status
   - Logistics bottlenecks & supply-chain gaps
   - Emergency / disaster-time accessibility routes
   - Real-time movement & delivery status of essential supplies
7. **Multilingual & Accessible** – English, Hindi, Assamese (+ other NER languages) via i18next + government-grade accessibility toolbar.
8. **Integration Ready** – Weather APIs, transport databases, government monitoring systems (mocked for prototype).

## Architecture

- **Frontend**: React 19 + Vite SPA, Tailwind CSS, react-leaflet / maplibre, i18next, localforage (offline), PWA.
- **Backend**: Node.js / Express + better-sqlite3.
- **Deployment**: Concurrent frontend + backend (`npm run dev`). Production build via `npm run build`.

## Getting Started

```bash
npm install
npm run dev