import React from "react";
import { useTranslation } from "react-i18next";
import { MapPinned, AlertTriangle, CheckCircle2, XCircle } from "lucide-react";

const DISTRICT_STATUS = [
  { district: "Kamrup (Metro)", status: "OPEN", corridors: 12, blocked: 0 },
  { district: "East Khasi Hills", status: "RESTRICTED", corridors: 8, blocked: 2 },
  { district: "Papum Pare", status: "RESTRICTED", corridors: 6, blocked: 1 },
  { district: "Imphal West", status: "OPEN", corridors: 9, blocked: 0 },
  { district: "Aizawl", status: "BLOCKED", corridors: 5, blocked: 3 },
  { district: "Kohima", status: "RESTRICTED", corridors: 7, blocked: 2 },
  { district: "Dimapur", status: "OPEN", corridors: 10, blocked: 0 },
  { district: "West Garo Hills", status: "RESTRICTED", corridors: 4, blocked: 1 },
];

const statusIcon = (s) => {
  if (s === "OPEN") return <CheckCircle2 className="w-4 h-4 text-emerald-600" />;
  if (s === "RESTRICTED") return <AlertTriangle className="w-4 h-4 text-amber-600" />;
  return <XCircle className="w-4 h-4 text-red-600" />;
};

const statusBadge = (s) => {
  if (s === "OPEN") return "bg-emerald-100 text-emerald-800";
  if (s === "RESTRICTED") return "bg-amber-100 text-amber-800";
  return "bg-red-100 text-red-800";
};

export const AccessibilityMapPage = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full px-3 md:px-4 lg:px-5 py-4 space-y-4">
      <div className="bg-[var(--gov-primary)] text-white px-4 py-3 rounded-[var(--panel-radius)]">
        <h2 className="text-[16px] font-semibold flex items-center gap-2">
          <MapPinned className="w-5 h-5" />
          {t("routeAccessibility")}
        </h2>
        <p className="text-[13px] opacity-90 mt-0.5">
          District-wise road & bridge accessibility status across the North Eastern Region
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3">
        {DISTRICT_STATUS.map((d) => (
          <div
            key={d.district}
            className="bg-white border border-[var(--gov-border)] rounded-[var(--panel-radius)] p-4 shadow-sm"
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold text-[14px] text-[var(--gov-primary)]">
                {d.district}
              </h3>
              {statusIcon(d.status)}
            </div>
            <span className={`text-[11px] font-semibold px-2 py-0.5 rounded ${statusBadge(d.status)}`}>
              {t(d.status) || d.status}
            </span>
            <div className="mt-3 text-[12px] text-[var(--gov-text-secondary)] space-y-1">
              <p>Active corridors: {d.corridors}</p>
              <p>Blocked / restricted: {d.blocked}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white border border-[var(--gov-border)] rounded-[var(--panel-radius)] p-4">
        <h3 className="font-semibold text-[14px] text-[var(--gov-primary)] mb-2">
          {t("logisticsBottlenecks")}
        </h3>
        <ul className="text-[13px] text-[var(--gov-text-secondary)] space-y-1 list-disc list-inside">
          <li>NH-6 (Shillong–Silchar): Landslide risk elevated after heavy rainfall</li>
          <li>Imphal–Kohima corridor: Partial blockage reported near Mao</li>
          <li>Aizawl approach roads: Multiple debris slides — emergency route advised</li>
          <li>Guwahati–Itanagar (NH-15): Congestion + weather-related slowdown</li>
        </ul>
      </div>
    </div>
  );
};