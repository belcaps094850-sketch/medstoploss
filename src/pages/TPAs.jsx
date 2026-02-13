import { Link } from 'react-router-dom';
import { colors, heroStyle, h1Style, subtitleStyle, sectionStyle, h2Style, btnPrimary, btnSecondary, cardGrid, card } from '../styles';

const valueProps = [
  { title: 'Seamless Integration', desc: 'API-first approach. We connect to your claims system so data flows automatically — no manual uploads, no reconciliation headaches.' },
  { title: 'Fastest Reimbursement in the Market', desc: 'Your clients judge you on how fast claims get paid. We make sure the stop loss piece is never the bottleneck.' },
  { title: 'Grow Together', desc: 'As you add employer groups, we scale with you. Volume incentives, dedicated support, and joint go-to-market programs.' },
  { title: 'Your Clients, Your Relationship', desc: 'We support from behind the scenes. You own the employer relationship; we make you look good.' },
];

const integrations = [
  'Real-time claims data exchange via API or SFTP',
  'Automated large claim notifications',
  'Monthly aggregate tracking reports',
  'Renewal modeling 120 days in advance',
  'Dedicated TPA relationship manager',
];

export default function TPAs() {
  return (
    <div>
      <section style={heroStyle}>
        <h1 style={h1Style}>A Stop Loss Partner That Gets TPAs</h1>
        <p style={subtitleStyle}>
          You need a carrier that integrates with your systems, reimburses claims quickly, and helps you grow your book. We built our operation around making TPAs successful.
        </p>
        <div>
          <Link to="/contact" style={btnPrimary}>Explore TPA Partnership</Link>
          <Link to="/contact" style={btnSecondary}>Schedule a Demo</Link>
        </div>
      </section>

      <section style={{ ...sectionStyle, backgroundColor: colors.bgLight, maxWidth: '100%', padding: '60px 20px' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <h2 style={{ ...h2Style, textAlign: 'center' }}>Why TPAs choose us</h2>
          <div style={cardGrid}>
            {valueProps.map((v, i) => (
              <div key={i} style={card}>
                <h3 style={{ color: colors.dark, marginBottom: '8px' }}>{v.title}</h3>
                <p style={{ color: '#555', fontSize: '14px', lineHeight: '1.5' }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={sectionStyle}>
        <h2 style={{ ...h2Style, textAlign: 'center' }}>Built to plug into your workflow</h2>
        <div style={{ maxWidth: '500px', margin: '0 auto' }}>
          {integrations.map((item, i) => (
            <div key={i} style={{ padding: '12px 0', fontSize: '15px', color: '#555', borderBottom: i < integrations.length - 1 ? `1px solid ${colors.border}` : 'none' }}>
              • {item}
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '30px' }}>
          <Link to="/contact" style={btnPrimary}>See Our Integration Options →</Link>
        </div>
      </section>
    </div>
  );
}
