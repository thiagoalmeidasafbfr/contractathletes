interface Props {
  title: string
  subtitle: string
  children?: React.ReactNode
}

export default function PageHero({ title, subtitle, children }: Props) {
  return (
    <div style={{
      background: '#1a1410',
      borderRadius: 14,
      padding: 'clamp(18px, 3vw, 28px) clamp(20px, 3vw, 32px)',
      marginBottom: 16,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 16,
    }}>
      <div>
        <div style={{
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: 10,
          fontWeight: 500,
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: 'rgba(243,238,226,0.45)',
          marginBottom: 6,
        }}>
          {subtitle}
        </div>
        <h1 style={{
          fontFamily: "'Fraunces', 'Cormorant Garamond', Georgia, serif",
          fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
          fontWeight: 700,
          lineHeight: 1.08,
          letterSpacing: '-0.025em',
          color: '#f5f2ec',
        }}>
          {title}
        </h1>
      </div>
      {children && (
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
          {children}
        </div>
      )}
    </div>
  )
}
