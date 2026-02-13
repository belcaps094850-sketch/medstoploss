import { Link } from 'react-router-dom';
import { colors, heroStyle, h1Style, subtitleStyle, sectionStyle, h2Style, btnPrimary, btnSecondary, cardGrid, card } from '../styles';

const stats = [
  { value: '< 48 hrs', label: 'Average quote turnaround' },
  { value: '< 10 days', label: 'Average claims reimbursement' },
  { value: '98%', label: 'Broker retention rate' },
  { value: '$0', label: 'Surprise claim denials last year' },
];

const valueProps = [
  { icon: '⚡', title: 'Fast', desc: "Quotes in hours. Claims paid in days. We've rebuilt the stop loss experience around speed." },
  { icon: '🔍', title: 'Transparent', desc: 'No surprises. No hidden exclusions. Clear pricing, straightforward policy language, and open access to your claims data.' },
  { icon: '🧠', title: 'Smart', desc: 'Data-driven underwriting. Predictive analytics. Our technology identifies risk before it becomes a shock claim.' },
];

const audiences = [
  { title: 'I\'m a Self-Funded Employer', desc: 'Protect your plan from catastrophic claims without sacrificing control or transparency.', link: '/employers', cta: 'Explore Employer Solutions →' },
  { title: 'I\'m a Benefits Broker', desc: 'Win more business with faster quotes, competitive rates, and a carrier that pays claims reliably.', link: '/brokers', cta: 'Explore Broker Partnership →' },
  { title: 'I\'m a TPA', desc: 'Get a stop loss partner that integrates into your workflow and makes your clients\' experience seamless.', link: '/tpas', cta: 'Explore TPA Partnership →' },
];

const testimonials = [
  { quote: 'We switched carriers after years of slow claims payments and opaque renewals. The difference has been night and day — fast reimbursement, clear communication, and a team that actually picks up the phone.', author: 'VP of Benefits, 2,500-employee manufacturer' },
  { quote: 'I\'ve placed stop loss with a dozen carriers. These guys are the fastest to quote and the most straightforward to work with. My clients love them.', author: 'Senior Benefits Consultant, regional brokerage' },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section style={heroStyle}>
        <h1 style={h1Style}>Stop Loss Protection, Built for How Healthcare Works Now</h1>
        <p style={subtitleStyle}>
          Self-funded employers face unpredictable, escalating claims. We deliver stop loss insurance that's fast, transparent, and designed to give you certainty in an uncertain market.
        </p>
        <div>
          <Link to="/contact" style={btnPrimary}>Get a Quote</Link>
          <Link to="/employers" style={btnSecondary}>Learn How It Works</Link>
        </div>
      </section>

      {/* Value Props */}
      <section style={{ ...sectionStyle, backgroundColor: colors.bgLight, maxWidth: '100%', padding: '60px 20px' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <h2 style={{ ...h2Style, textAlign: 'center' }}>Why leading employers and brokers choose us</h2>
          <div style={cardGrid}>
            {valueProps.map((v, i) => (
              <div key={i} style={card}>
                <div style={{ fontSize: '28px', marginBottom: '10px' }}>{v.icon}</div>
                <h3 style={{ color: colors.dark, marginBottom: '8px' }}>{v.title}</h3>
                <p style={{ color: '#555', fontSize: '14px', lineHeight: '1.5' }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Audience Paths */}
      <section style={sectionStyle}>
        <h2 style={{ ...h2Style, textAlign: 'center' }}>How can we help?</h2>
        <div style={cardGrid}>
          {audiences.map((a, i) => (
            <div key={i} style={{ ...card, textAlign: 'center' }}>
              <h3 style={{ color: colors.dark, marginBottom: '10px', fontSize: '18px' }}>{a.title}</h3>
              <p style={{ color: '#555', fontSize: '14px', marginBottom: '16px', lineHeight: '1.5' }}>{a.desc}</p>
              <Link to={a.link} style={{ color: colors.accent, fontWeight: 'bold', fontSize: '14px', textDecoration: 'none' }}>{a.cta}</Link>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section style={{ ...sectionStyle, backgroundColor: colors.bgLight, maxWidth: '100%', padding: '60px 20px' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', textAlign: 'center' }}>
          {stats.map((s, i) => (
            <div key={i}>
              <div style={{ fontSize: '32px', fontWeight: 'bold', color: colors.accent }}>{s.value}</div>
              <div style={{ fontSize: '14px', color: colors.muted, marginTop: '6px' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section style={sectionStyle}>
        <h2 style={{ ...h2Style, textAlign: 'center' }}>Trusted by those who know stop loss best</h2>
        <div style={{ ...cardGrid, gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
          {testimonials.map((t, i) => (
            <div key={i} style={{ ...card, borderLeft: `3px solid ${colors.accent}` }}>
              <p style={{ fontStyle: 'italic', color: '#555', fontSize: '14px', lineHeight: '1.6', marginBottom: '12px' }}>"{t.quote}"</p>
              <p style={{ fontSize: '13px', color: colors.muted }}>— {t.author}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section style={{ textAlign: 'center', padding: '60px 20px', borderTop: `1px solid ${colors.border}` }}>
        <h2 style={h2Style}>Ready to experience stop loss that actually works?</h2>
        <p style={{ color: colors.muted, marginBottom: '24px' }}>Whether you're an employer, broker, or TPA — let's talk about how we can protect your plan and simplify your life.</p>
        <Link to="/contact" style={btnPrimary}>Get Started →</Link>
      </section>
    </div>
  );
}
