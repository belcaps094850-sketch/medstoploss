import { colors, heroStyle, h1Style, subtitleStyle, sectionStyle, h2Style, cardGrid, card } from '../styles';

const categories = [
  { icon: '📘', label: 'Guides & Whitepapers' },
  { icon: '📊', label: 'Market Reports' },
  { icon: '🎥', label: 'Webinars' },
  { icon: '📝', label: 'Blog / Articles' },
  { icon: '🛠️', label: 'Tools & Calculators' },
];

const featured = [
  { title: 'The Self-Funding Decision: A CFO\'s Guide to Stop Loss', type: 'Whitepaper', gated: true },
  { title: '2026 Stop Loss Market Outlook', type: 'Report', gated: true },
  { title: 'Specific vs. Aggregate: Which Coverage Do You Need?', type: 'Blog', gated: false },
  { title: 'Gene Therapy and Your Stop Loss Policy', type: 'Guide', gated: true },
  { title: 'Stop Loss Deductible Calculator', type: 'Interactive Tool', gated: false },
];

export default function Resources() {
  return (
    <div>
      <section style={heroStyle}>
        <h1 style={h1Style}>Stop Loss Knowledge Center</h1>
        <p style={subtitleStyle}>
          Guides, research, and tools to help you make smarter stop loss decisions.
        </p>
      </section>

      <section style={{ ...sectionStyle, backgroundColor: colors.bgLight, maxWidth: '100%', padding: '40px 20px' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center' }}>
          {categories.map((c, i) => (
            <div key={i} style={{ padding: '10px 20px', border: `1px solid ${colors.border}`, borderRadius: '20px', fontSize: '14px', color: colors.dark, backgroundColor: colors.white, cursor: 'pointer' }}>
              {c.icon} {c.label}
            </div>
          ))}
        </div>
      </section>

      <section style={sectionStyle}>
        <h2 style={{ ...h2Style, textAlign: 'center' }}>Featured Resources</h2>
        <div style={cardGrid}>
          {featured.map((r, i) => (
            <div key={i} style={card}>
              <div style={{ fontSize: '12px', color: colors.accent, fontWeight: 'bold', marginBottom: '8px', textTransform: 'uppercase' }}>{r.type}</div>
              <h3 style={{ color: colors.dark, fontSize: '16px', marginBottom: '10px' }}>{r.title}</h3>
              <span style={{ fontSize: '12px', color: colors.muted }}>{r.gated ? '🔒 Gated' : '🔓 Free'}</span>
            </div>
          ))}
        </div>
        <p style={{ textAlign: 'center', marginTop: '40px', color: colors.muted, fontStyle: 'italic' }}>
          More resources coming soon. Check back for new guides, reports, and tools.
        </p>
      </section>
    </div>
  );
}
