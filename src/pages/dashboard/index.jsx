import { MERCHANTS } from "@/pages/merchants/data";

const stats = [
  { label: "Total Merchants", value: MERCHANTS.length },
  { label: "Active", value: MERCHANTS.filter((m) => m.status === "active").length },
  { label: "Suspended", value: MERCHANTS.filter((m) => m.status === "suspended").length },
  {
    label: "Total GMV (₹)",
    value: MERCHANTS.reduce((s, m) => s + m.gmv, 0).toLocaleString("en-IN"),
  },
];

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-xl font-semibold tracking-tight">Dashboard</h1>
        <p className="text-sm text-muted-foreground">Admin overview</p>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="rounded-lg border bg-card p-4">
            <p className="text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
              {s.label}
            </p>
            <p className="mt-1 text-2xl font-semibold">{s.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
