import i18n from "i18next";
import { initReactI18next } from "react-i18next";

/**
 * AshtaSetu — NER multilingual resources
 * SIH26002 · Smart Logistics & Accessibility Intelligence Platform
 * Languages: English, Hindi, Assamese + other NER languages
 */

const commonEn = {
  // Brand
  appName: "AshtaSetu",
  appTagline: "Smart Logistics & Accessibility Intelligence Platform",
  prototypeBadge: "Prototype — simulated data",
  sihLabel: "MDoNER Prototype · SIH26002",

  // Nav
  nav_home: "Overview",
  nav_about: "About AshtaSetu",
  nav_dashboard: "Logistics Monitor",
  nav_accessibility: "Route Accessibility",
  nav_vehicles: "Vehicle Tracking",
  nav_geoweb: "Data Sources",
  nav_reports: "Field Reports",
  nav_resources: "Analytics Hub",
  nav_contact: "Support",
  nav_fieldApp: "Field Toolkit",
  nav_archive: "Records Archive",
  nav_alerts: "Alerts",
  nav_settings: "Settings",

  // System
  systemOnline: "System Online",
  activeAlerts: "Active",
  telemetryOnline: "Telemetry Online",
  weatherLive: "Weather Live",
  regionalRisk: "Regional Accessibility",
  lastUpdated: "Last updated",
  loading: "Loading…",
  save: "Save",
  cancel: "Cancel",
  close: "Close",
  submit: "Submit",
  search: "Search",
  filter: "Filter",
  exportCsv: "EXPORT CSV",
  viewAll: "View all",
  noData: "No data available",
  offline: "Offline",
  online: "Online",

  // Risk / Accessibility levels
  EXTREME: "EXTREME",
  HIGH: "HIGH",
  MODERATE: "MODERATE",
  LOW: "LOW",
  CRITICAL: "CRITICAL",
  OPEN: "OPEN",
  RESTRICTED: "RESTRICTED",
  BLOCKED: "BLOCKED",

  // Dashboard
  disasterMonitoringDashboard: "Logistics Accessibility Dashboard",
  advisories: "Advisories",
  events: "Events",
  highlights: "Highlights >>",
  newsFeeds: "News Feeds",
  socialUpdates: "Field Updates",
  drrServices: "Logistics Intelligence Services",
  service_landslide: "Route Disruption Prediction",
  service_hydro: "Weather Impact Analysis",
  service_meteo: "Accessibility Forecasting",
  service_field: "Field Reporting",
  mapLayers: "Map Layers",
  legend: "Legend",
  compare: "Compare",
  fullscreen: "Fullscreen",

  // Map layers
  baseMap: "BASE MAP",
  satellite: "Satellite / Sentinel",
  terrain: "Topographic DEM",
  operationsBase: "Operations Base",
  environment: "ENVIRONMENT",
  windField: "Wind Vector Field",
  ndvi: "NDVI Index",
  soilMoisture: "Soil Moisture",
  hazards: "ACCESSIBILITY",
  riskHeatmap: "Disruption Heatmap",
  activeAlertsLayer: "Active Alerts",
  historicalLandslides: "Historical Disruptions",
  fieldReports: "Field Reports",
  infrastructure: "INFRASTRUCTURE",
  roadNetwork: "Road Network",
  villages: "Villages",
  vehiclesLayer: "Tracked Vehicles",
  bridges: "Bridges",

  // Reports
  fieldIncidentReporting: "Field Incident Reporting",
  submitFieldReport: "Submit Field Report",
  adminReviewQueue: "Admin Review Queue",
  category: "Category / Title",
  submitter: "Submitter",
  severity: "Severity",
  selectSeverity: "Select severity",
  nameOptional: "Name (optional)",
  locationGps: "Location / GPS",
  description: "Description",
  evidence: "Evidence (Photo/Video)",
  clickToUpload: "Click to upload",
  submitReport: "SUBMIT REPORT",
  fieldOfficial: "Field Official",
  citizen: "Citizen",
  slopeMovement: "Slope / Landslide",
  soilCracks: "Road Damage",
  blockedRoad: "Blocked Road",
  fallenTrees: "Fallen Trees / Debris",
  waterSurge: "Flood / Waterlogging",
  congestion: "Traffic Congestion",
  bridgeIssue: "Bridge Issue",
  other: "Other",
  noReportsYet: "No field reports yet.",
  review: "Review",
  resolve: "Resolve",
  savedOffline: "Saved offline — will sync when online",

  // Alerts
  alertsAdvisories: "Alerts & Advisories",
  affectedAreas: "Affected areas",
  warning: "Warning",
  timeframe: "Timeframe",
  acknowledge: "Acknowledge",
  noEventsYet: "No events yet",

  // Archive
  archivePortal: "Archive Portal — Historical Reports & Resolved Alerts",
  allCategories: "All Categories",
  allYears: "All Years",
  readMore: "Read More",
  results: "Results",

  // Contact
  contactUs: "Contact us",
  teamDirectory: "Team Directory",
  phone: "Phone",
  email: "Email",

  // Resources / ML / Route Optimization
  resourcesTitle: "Route Optimization & Predictive Models",
  scenarioSandbox: "Scenario Simulation Sandbox",
  fusionTriggers: "DISRUPTION FACTORS — Prediction Rationale",
  soilMoistureLabel: "Soil Moisture",
  rainfallIntensity: "Rainfall Intensity",
  riverWaterLevel: "River Water Level",
  simulatedScore: "Simulated Score",
  landslideRisk: "Landslide Disruption Risk",
  floodRisk: "Flood Disruption Risk",
  congestionRisk: "Congestion Risk",
  roadDamageRisk: "Road Damage Risk",
  reset: "RESET",
  alternateRoutes: "Alternate Routes",
  estimatedDelay: "Estimated Delay",
  recommendedCorridor: "Recommended Corridor",

  // Vehicle Tracking
  vehicleTracking: "Vehicle Tracking",
  essentialSupplies: "Essential Supplies",
  medicines: "Medicines",
  foodSupplies: "Food Supplies",
  agriProduce: "Agricultural Produce",
  constructionMaterials: "Construction Materials",
  liveStatus: "Live Status",
  delayed: "Delayed",
  onTime: "On Time",
  enRoute: "En Route",
  delivered: "Delivered",

  // Accessibility
  routeAccessibility: "Route Accessibility",
  districtConnectivity: "District-wise Connectivity",
  logisticsBottlenecks: "Logistics Bottlenecks",
  emergencyRoutes: "Emergency Accessibility Routes",
  deliveryStatus: "Delivery Status",

  // GeoWeb / Data Sources
  geowebTitle: "Data Sources & Integrations",
  connectionStatus: "Connection Status",
  apiProvider: "API Provider",
  requestsToday: "Requests Today",
  dataFreshness: "Data Freshness",
  apiCredentials: "API Credential & Endpoint Configuration",
  rotateKey: "Rotate Key (simulated)",

  // Field App
  fieldAppTitle: "Field App — Offline Reporting",
  fieldAppDesc:
    "Use the offline-capable field reporting tool when network is weak or unavailable. Reports queue locally and sync when connectivity returns.",

  // About
  aboutTitle: "About AshtaSetu",
  aboutBody:
    "AshtaSetu is a prototype AI-powered Smart Logistics and Accessibility Intelligence Platform developed for the Smart India Hackathon (SIH26002) under the Ministry of Development of North Eastern Region (MDoNER). It provides real-time road accessibility monitoring, predictive disruption alerts, AI-based alternate routing, and GPS tracking of essential supplies across the North Eastern Region.",
  aboutDisclaimer:
    "This is a student/hackathon prototype. All telemetry, vehicle positions, alerts and accessibility scores shown are simulated and must not be treated as operational or official advisories.",

  // Footer
  relatedResources: "Related resources (placeholders)",
  privacyPolicy: "Privacy Policy",
  terms: "Terms",
  disclaimer: "Disclaimer",
  contact: "Contact",
  copyright: "© 2026 AshtaSetu · SIH26002 Team · Prototype — simulated data",

  // Status bar
  rain: "Rain",
  wind: "Wind",
  soil: "Soil",
  elev: "Elev",
  risk: "Access",
  susc: "Susc",
};

const resources = {
  en: { translation: { ...commonEn } },

  // Keep existing hi / as / other language blocks and gradually update them.
  // For now they fall back to English keys where not overridden.
};

export const NER_LANGUAGES = [
  { code: "en", native: "English" },
  { code: "hi", native: "हिन्दी" },
  { code: "as", native: "অসমীয়া" },
  { code: "bn", native: "বাংলা" },
  { code: "mni", native: "মৈতৈলোন্" },
  { code: "lus", native: "Mizo" },
  { code: "kha", native: "Khasi" },
  { code: "grt", native: "Garo" },
  { code: "njo", native: "Ao" },
  { code: "njz", native: "Nagamese" },
];

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;