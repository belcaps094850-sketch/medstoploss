import { Link } from 'react-router-dom';
import { colors, heroStyle, h1Style, subtitleStyle, sectionStyle, h2Style, btnPrimary, btnSecondary, cardGrid, card } from '../styles';

const valueProps = [
  { title: 'Quote in Hours, Not Weeks', desc: 'Submit census data and get indicative pricing back fast. Our underwriting platform is built for speed without sacrificing accuracy.' },
  { title: 'We Pay Claims. Period.', desc: 'Your reputation is on the line when you place stop loss. We protect it by paying claims quickly, fairly, and without unnecessary disputes.' },
  { title: 'Competitive Across the Market', desc: 'Our capacity and underwriting approach let us compete on the toughest cases. Bring us your hard-to-place risks.' },
  { title: 'Tools That Make You Efficient', desc: 'Broker portal with real-time quoting, claims tracking, renewal projections, and downloadable reports. Less chasing, more selling.' },
];

const toolkit = [
  '📊 Real-time quoting portal',
  '📋 Customizable proposal templates',
  '📈 Claims and renewal dashboards',
  '🎓 CE-eligible training and workshops',
  '📞 Dedicated underwriter — not a call center',
  '💰 Competitive commission structure',
];

export default function Brokers() {
  return (
    <div>
      <section style={heroStyle}>
        <h1 style={h1Style}>Your Unfair Advantage in Stop Loss</h1>
        <p style={subtitleStyle}>
          Faster quotes. Competitive rates. A carrier that pays claims without a fight. Give your clients the stop loss experience they deserve — and make your job easier in the process.
        </p>
        <div>
          <Link to="/contact" style={btnPrimary}>Become a Broker Partner</Link>
          <Link to="/contact" style={btnSecondary}>Get a Quick Quote</Link>
        </div>
      </section>

      <section style={{ ...sectionStyle, backgroundColor: colors.bgLight, maxWidth: '100%', padding: '60px 20px' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <h2 style={{ ...h2Style, textAlign: 'center' }}>Why brokers partner with us</h2>
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
        <h2 style={{ ...h2Style, textAlign: 'center' }}>What you get as a partner</h2>
        <div style={{ maxWidth: '500px', margin: '0 auto' }}>
          {toolkit.map((item, i) => (
            <div key={i} style={{ padding: '12px 0', fontSize: '15px', color: '#555', borderBottom: i < toolkit.length - 1 ? `1px solid ${colors.border}` : 'none' }}>
              {item}
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '30px' }}>
          <Link to="/contact" style={btnPrimary}>Apply for Broker Access →</Link>
        </div>
      </section>

      <section style={{ ...sectionStyle, backgroundColor: colors.bgLight, maxWidth: '100%', padding: '60px 20px' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <div style={{ ...card, borderLeft: `3px solid ${colors.accent}` }}>
            <p style={{ fontStyle: 'italic', color: '#555', fontSize: '14px', lineHeight: '1.6', marginBottom: '12px' }}>
              "I used to dread stop loss renewals. Now I actually look forward to them because I know I'll get a fast, competitive quote and my clients will be taken care of. It's refreshing."
            </p>
            <p style={{ fontSize: '13px', color: colors.muted }}>— Benefits Producer, Top 100 Brokerage</p>
          </div>
        </div>
      </section>
    </div>
  );
}
