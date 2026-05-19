interface Props {
  label: string
  value: string
  sub?: string
  accent?: boolean
}

export default function KpiCard({ label, value, sub, accent }: Props) {
  return (
    <div className="card" style={{
      padding: '14px 16px',
      borderLeft: accent ? `3px solid var(--gold)` : `1px solid var(--divider)`,
      minWidth: 0,
    }}>
      <div className="kpi-label">{label}</div>
      <div className="kpi-value" style={{ fontSize: 18, marginTop: 4 }}>{value}</div>
      {sub && <div className="kpi-sub">{sub}</div>}
    </div>
  )
}
