import express from 'express';

const router = express.Router();

// Simulated vehicle fleet for essential commodities
const VEHICLES = [
  {
    id: "VH-NER-001",
    type: "Medicines",
    origin: "Guwahati",
    destination: "Itanagar",
    status: "En Route",
    delayMin: 0,
    lat: 26.82,
    lng: 93.15,
    lastUpdate: new Date().toISOString(),
    cargo: "Essential medicines & vaccines",
  },
  {
    id: "VH-NER-014",
    type: "Food Supplies",
    origin: "Silchar",
    destination: "Aizawl",
    status: "Delayed",
    delayMin: 95,
    lat: 24.61,
    lng: 92.88,
    lastUpdate: new Date().toISOString(),
    cargo: "Rice & PDS commodities",
  },
  {
    id: "VH-NER-027",
    type: "Agricultural Produce",
    origin: "Imphal",
    destination: "Kohima",
    status: "En Route",
    delayMin: 15,
    lat: 25.42,
    lng: 94.12,
    lastUpdate: new Date().toISOString(),
    cargo: "Fresh produce",
  },
  {
    id: "VH-NER-033",
    type: "Construction Materials",
    origin: "Dimapur",
    destination: "Shillong",
    status: "Blocked Corridor",
    delayMin: 180,
    lat: 25.91,
    lng: 93.72,
    lastUpdate: new Date().toISOString(),
    cargo: "Cement & steel",
  },
];

router.get('/', (req, res) => {
  res.json({ success: true, data: VEHICLES, count: VEHICLES.length });
});

router.get('/:id', (req, res) => {
  const v = VEHICLES.find((x) => x.id === req.params.id);
  if (!v) return res.status(404).json({ success: false, error: "Vehicle not found" });
  res.json({ success: true, data: v });
});

export default router;