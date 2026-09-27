export const MOCK_ADVISORIES = [
  {
    id: "adv-1",
    type: "BLOCKED ROAD",
    severity: "HIGH",
    title: "NH-6 corridor partially blocked near Sonapur due to landslide debris",
    areas: "East Khasi Hills, Ri-Bhoi",
    timeAgo: "35 min ago",
    timeframe: "Today 06:00 – 18:00",
  },
  {
    id: "adv-2",
    type: "HEAVY RAIN",
    severity: "MODERATE",
    title: "Heavy rainfall warning – elevated disruption risk on hill roads",
    areas: "Aizawl, Lunglei, Serchhip",
    timeAgo: "1h ago",
    timeframe: "Next 24h",
  },
  {
    id: "adv-3",
    type: "FLOOD",
    severity: "HIGH",
    title: "Low-lying sections of NH-15 waterlogged – expect delays for essential cargo",
    areas: "Lakhimpur, Dhemaji",
    timeAgo: "2h ago",
    timeframe: "Today",
  },
];

export const MOCK_EVENTS = [
  { text: "Accessibility update: Guwahati–Itanagar corridor status RESTRICTED after rainfall" },
  { text: "Vehicle VH-NER-014 delayed 95 min on Silchar–Aizawl route due to debris" },
  { text: "Emergency alternate route activated for medicines convoy to Kohima" },
  { text: "Field report received: Bridge approach damage near Mao (Imphal–Kohima)" },
];

export const MOCK_NEWS = [
  { title: "MDoNER reviews real-time logistics visibility for NER essential supplies", date: "Today", source: "Official" },
  { title: "AI-based route prediction helps reduce medicine delivery delays in hill districts", date: "Yesterday", source: "Prototype Feed" },
  { title: "District administrations receive live accessibility dashboard access", date: "2 days ago", source: "System" },
];

export const MOCK_SOCIAL = [
  { text: "Field officer: Landslide debris cleared on one lane near Sohra. Convoy can proceed with caution.", source: "Field Unit", time: "40 min ago", tags: ["Road"] },
  { text: "Weather desk: Rainfall intensity decreasing in southern Assam. Congestion expected to ease.", source: "Met Desk", time: "1h ago", tags: ["Weather"] },
  { text: "Logistics cell: Alternate corridor recommended for construction material trucks to Shillong.", source: "Logistics Cell", time: "2h ago", tags: ["Route"] },
];

export const MOCK_SERVICES = [
  {
    title: "Route Disruption Prediction",
    desc: "AI-powered prediction of landslides, floods, road damage and congestion on key corridors.",
  },
  {
    title: "Weather Impact Analysis",
    desc: "Real-time weather fusion to estimate travel delays and accessibility risk.",
  },
  {
    title: "Accessibility Forecasting",
    desc: "District-wise road & bridge status with 24–72h outlook for planning.",
  },
  {
    title: "Field Reporting",
    desc: "Offline-capable geo-tagged incident reporting from remote locations.",
  },
];