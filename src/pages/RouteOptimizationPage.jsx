import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Route, Navigation, Clock, AlertTriangle, ArrowRight } from "lucide-react";

const MOCK_ROUTES = [
  {
    id: "R1",
    from: "Guwahati",
    to: "Itanagar",
    primary: { distance: "320 km", time: "8h 40m", risk: "MODERATE", delay: "0 min" },
    alternate: { distance: "355 km", time: "9h 15m", risk: "LOW", delay: "+35 min" },
    disruption: "Elevated landslide probability on NH-15 after recent rainfall",
  },
  {
    id: "R2",
    from: "Silchar",
    to: "Aizawl",
    primary: { distance: "175 km", time: "6h 20m", risk: "HIGH", delay: "95 min" },
    alternate: { distance: "210 km", time: "7h 05m", risk: "MODERATE", delay: "+45 min" },
    disruption: "Multiple debris slides reported on primary corridor",
  },
  {
    id: "R3",
    from: "Imphal",
    to: "Kohima",
    primary: { distance: "138 km", time: "4h 50m", risk: "HIGH", delay: "60 min" },
    alternate: { distance: "162 km", time: "5h 30m", risk: "LOW", delay: "+40 min" },
    disruption: "Partial blockage near Mao — emergency corridor recommended",
  },
];

const riskColor = (level) => {
  if (level === "LOW") return "bg-emerald-100 text-emerald-800";
  if (level === "MODERATE") return "bg-amber-100 text-amber-800";
  return "bg-red-100 text-red-800";
};

export const RouteOptimizationPage = () => {
  const { t } = useTranslation();
  const [selected, setSelected] = useState(MOCK_ROUTES[0]);

  return (
    <div className="w-full space-y-4">
      <div className="bg-[var(--gov-primary)] text-white px-4 py-3 rounded-[var(--panel-radius)]">
        <h2 className="text-[16px] font-semibold flex items-center gap-2">
          <Route className="w-5 h-5" />
          {t("resourcesTitle")}
        </h2>
        <p className="text-[13px] opacity-90 mt-0.5">
          AI-based alternate route suggestions and estimated travel delays for essential cargo corridors
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
        {/* Route list */}
        <div className="lg:col-span-1 space-y-2">
          {MOCK_ROUTES.map((r) => (
            <button
              key={r.id}
              type="button"
              onClick={() => setSelected(r)}
              className={`w-full text-left bg-white border rounded-[var(--panel-radius)] p-3 shadow-sm transition-colors ${
                selected.id === r.id
                  ? "border-[var(--gov-primary)] ring-1 ring-[var(--gov-primary)]"
                  : "border-[var(--gov-border)] hover:bg-slate-50"
              }`}
            >
              <div className="flex items-center gap-2 font-semibold text-[14px] text-[var(--gov-primary)]">
                {r.from} <ArrowRight className="w-4 h-4" /> {r.to}
              </div>
              <p className="text-[12px] text-[var(--gov-text-secondary)] mt-1">
                Primary risk: <span className={`px-1.5 py-0.5 rounded text-[11px] font-semibold ${riskColor(r.primary.risk)}`}>{r.primary.risk}</span>
              </p>
            </button>
          ))}
        </div>

        {/* Selected route detail */}
        <div className="lg:col-span-2 bg-white border border-[var(--gov-border)] rounded-[var(--panel-radius)] p-4 shadow-sm">
          <h3 className="font-semibold text-[15px] text-[var(--gov-primary)] mb-3 flex items-center gap-2">
            <Navigation className="w-4.5 h-4.5" />
            {selected.from} → {selected.to}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
            {/* Primary */}
            <div className="border border-[var(--gov-border)] rounded-lg p-3">
              <p className="text-[12px] font-semibold text-[var(--gov-text-muted)] mb-1">PRIMARY ROUTE</p>
              <p className="text-[13px]">Distance: {selected.primary.distance}</p>
              <p className="text-[13px] flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" /> ETA: {selected.primary.time}
              </p>
              <p className="mt-1">
                Risk:{" "}
                <span className={`px-1.5 py-0.5 rounded text-[11px] font-semibold ${riskColor(selected.primary.risk)}`}>
                  {selected.primary.risk}
                </span>
              </p>
              <p className="text-[12px] text-[var(--gov-text-secondary)] mt-1">
                Delay: {selected.primary.delay}
              </p>
            </div>

            {/* Alternate */}
            <div className="border border-emerald-300 bg-emerald-50 rounded-lg p-3">
              <p className="text-[12px] font-semibold text-emerald-800 mb-1">
                {t("recommendedCorridor")} (AI Suggested)
              </p>
              <p className="text-[13px]">Distance: {selected.alternate.distance}</p>
              <p className="text-[13px] flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" /> ETA: {selected.alternate.time}
              </p>
              <p className="mt-1">
                Risk:{" "}
                <span className={`px-1.5 py-0.5 rounded text-[11px] font-semibold ${riskColor(selected.alternate.risk)}`}>
                  {selected.alternate.risk}
                </span>
              </p>
              <p className="text-[12px] text-emerald-800 mt-1">
                {t("estimatedDelay")}: {selected.alternate.delay}
              </p>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 flex gap-2">
            <AlertTriangle className="w-4.5 h-4.5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <p className="text-[13px] font-medium text-amber-900">Predicted Disruption</p>
              <p className="text-[12px] text-amber-800">{selected.disruption}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};