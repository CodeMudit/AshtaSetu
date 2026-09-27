import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useApp } from "../context/AppContext";
import { Truck, Package, Clock, MapPin, AlertTriangle } from "lucide-react";

const MOCK_VEHICLES = [
  {
    id: "VH-NER-001",
    type: "Medicines",
    origin: "Guwahati",
    destination: "Itanagar",
    status: "En Route",
    delayMin: 0,
    lat: 26.8,
    lng: 93.2,
    lastUpdate: "2 min ago",
    cargo: "Essential medicines & vaccines",
  },
  {
    id: "VH-NER-014",
    type: "Food Supplies",
    origin: "Silchar",
    destination: "Aizawl",
    status: "Delayed",
    delayMin: 95,
    lat: 24.6,
    lng: 92.9,
    lastUpdate: "5 min ago",
    cargo: "Rice & PDS commodities",
  },
  {
    id: "VH-NER-027",
    type: "Agricultural Produce",
    origin: "Imphal",
    destination: "Kohima",
    status: "En Route",
    delayMin: 15,
    lat: 25.4,
    lng: 94.1,
    lastUpdate: "1 min ago",
    cargo: "Fresh produce",
  },
  {
    id: "VH-NER-033",
    type: "Construction Materials",
    origin: "Dimapur",
    destination: "Shillong",
    status: "Blocked Corridor",
    delayMin: 180,
    lat: 25.9,
    lng: 93.7,
    lastUpdate: "8 min ago",
    cargo: "Cement & steel",
  },
];

export const VehicleTrackingPage = () => {
  const { t } = useTranslation();
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All"
      ? MOCK_VEHICLES
      : MOCK_VEHICLES.filter((v) => v.type === filter);

  const statusColor = (status) => {
    if (status === "En Route") return "bg-emerald-100 text-emerald-800";
    if (status === "Delayed") return "bg-amber-100 text-amber-800";
    return "bg-red-100 text-red-800";
  };

  return (
    <div className="w-full px-3 md:px-4 lg:px-5 py-4 space-y-4">
      <div className="bg-[var(--gov-primary)] text-white px-4 py-3 rounded-[var(--panel-radius)] flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-[16px] font-semibold flex items-center gap-2">
            <Truck className="w-5 h-5" />
            {t("vehicleTracking")}
          </h2>
          <p className="text-[13px] opacity-90 mt-0.5">
            Real-time GPS tracking of vehicles carrying essential commodities across NER
          </p>
        </div>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="bg-white/10 border border-white/30 text-white text-sm rounded px-3 py-1.5 outline-none"
        >
          <option value="All">All Cargo Types</option>
          <option value="Medicines">{t("medicines")}</option>
          <option value="Food Supplies">{t("foodSupplies")}</option>
          <option value="Agricultural Produce">{t("agriProduce")}</option>
          <option value="Construction Materials">{t("constructionMaterials")}</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3">
        {filtered.map((v) => (
          <div
            key={v.id}
            className="bg-white border border-[var(--gov-border)] rounded-[var(--panel-radius)] p-4 shadow-sm"
          >
            <div className="flex items-start justify-between mb-2">
              <span className="font-semibold text-[var(--gov-primary)] text-sm">
                {v.id}
              </span>
              <span className={`text-[11px] font-semibold px-2 py-0.5 rounded ${statusColor(v.status)}`}>
                {v.status}
              </span>
            </div>
            <p className="text-[13px] font-medium text-[var(--gov-text)] mb-1 flex items-center gap-1.5">
              <Package className="w-3.5 h-3.5" /> {v.type}
            </p>
            <p className="text-[12px] text-[var(--gov-text-secondary)] mb-2">
              {v.cargo}
            </p>
            <div className="space-y-1 text-[12px] text-[var(--gov-text-secondary)]">
              <p className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" />
                {v.origin} → {v.destination}
              </p>
              <p className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                Last update: {v.lastUpdate}
              </p>
              {v.delayMin > 0 && (
                <p className="flex items-center gap-1.5 text-amber-700 font-medium">
                  <AlertTriangle className="w-3.5 h-3.5" />
                  Delay: ~{v.delayMin} min
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white border border-[var(--gov-border)] rounded-[var(--panel-radius)] p-4 text-[13px] text-[var(--gov-text-secondary)]">
        <p>
          <strong>Prototype note:</strong> Vehicle positions and status are simulated.
          In production this module will integrate with GPS telematics / fleet management
          APIs and government transport databases.
        </p>
      </div>
    </div>
  );
};