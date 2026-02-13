import { Link } from 'react-router-dom';
import { colors, heroStyle, h1Style, subtitleStyle, sectionStyle, h2Style, btnPrimary, btnSecondary, cardGrid, card } from '../styles';

const benefits = [
  { title: 'Budget Certainty', desc: 'Know your maximum exposure before the plan year starts.' },
  { title: 'Fast Claims Payment', desc: 'Reimbursement in days, not months — protecting your cash flow.' },
  { title: 'Transparent Pricing', desc: 'No hidden fees, no opaque methodology. You see exactly how your rate is built.' },
  { title: 'Data & Analytics', desc: 'Real-time dashboards showing claims trends, risk flags, and cost projections.' },
  { title: 'Flexible Plan Design', desc: 'We support any plan structure — PPO, HDHP, RBP, DPC, and more.' },
  { title: 'Expert Guidance', desc: 'Our team helps you optimize deductibles, manage risk, and plan ahead.' },
];

const steps = [
  { num: '1', title: 'Specific Stop Loss', desc: 'Protects against individual high-cost claims. You choose a deductible (e.g., $150K). When any one person\'s claims exceed that amount, we reimburse the excess.' },
  { num: '2', title: 'Aggregate Stop Loss', desc: 'Protects against your total plan costs exceeding expectations. If overall claims spike above the corridor (typically 125% of expected), we cover the difference.' },
  { num: '3', title: 'You Stay in Control', desc: 'You keep all the benefits of self-funding — data access, plan design flexibility, cost transparency — with the safety net of knowing your downside is capped.' },
];

export default function Employers() {
  return (
    <div>
      <section style={heroStyle}>
        <h1 style={h1Style}>Self-Fund with Confidence</h1>
        <p style={subtitleStyle}>
          You chose self-funding for control, savings, and transparency. Your stop loss partner should deliver the same. We protect your plan from catastrophic claims so you can focus on your people.
        </p>
        <Link to="/contact" style={btnPrimary}>Get a Quote</Link>
      </section>

      {/* Problem */}
      <section style={{ ...sectionStyle, backgroundColor: colors.bgLight, maxWidth: '100%', padding: '60px 20px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <h2 style={h2Style}>The risks of self-funding are real. The right protection changes everything.</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {[
              'A single employee\'s cancer treatment can cost $500K–$2M+',
              'Gene therapies now exceed $3 million per patient',
              'GLP-1 medications are adding $500–$1,500/member/year to plan costs',
              'One bad year can blow your budget and shake confidence in self-funding',
            ].map((item, i) => (
              <li key={i} style={{ padding: '8px 0', fontSize: '15px', color: '#555', borderBottom: i < 3 ? `1px solid ${colors.border}` : 'none' }}>
                • {item}
              </li>
            ))}
          </ul>
          <p style={{ marginTop: '20px', color: colors.muted, fontStyle: 'italic' }}>
            That's where stop loss insurance comes in — and not all stop loss is created equal.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section style={sectionStyle}>
        <h2 style={{ ...h2Style, textAlign: 'center' }}>Stop loss, simplified</h2>
        <div style={cardGrid}>
          {steps.map((s, i) => (
            <div key={i} style={card}>
              <div style={{ fontSize: '28px', fontWeight: 'bold', color: colors.accent, marginBottom: '8px' }}>{s.num}</div>
              <h3 style={{ color: colors.dark, marginBottom: '8px' }}>{s.title}</h3>
              <p style={{ color: '#555', fontSize: '14px', lineHeight: '1.5' }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section style={{ ...sectionStyle, backgroundColor: colors.bgLight, maxWidth: '100%', padding: '60px 20px' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <h2 style={{ ...h2Style, textAlign: 'center' }}>What you get</h2>
          <div style={{ ...cardGrid, gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
            {benefits.map((b, i) => (
              <div key={i} style={card}>
                <h3 style={{ color: colors.dark, marginBottom: '6px', fontSize: '16px' }}>{b.title}</h3>
                <p style={{ color: '#555', fontSize: '14px', lineHeight: '1.5' }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ textAlign: 'center', padding: '60px 20px', borderTop: `1px solid ${colors.border}` }}>
        <h2 style={h2Style}>Let's protect your plan.</h2>
        <p style={{ color: colors.muted, marginBottom: '24px' }}>Get a stop loss quote tailored to your group. It takes 5 minutes to start and we'll have indicative pricing back within 48 hours.</p>
        <Link to="/contact" style={btnPrimary}>Request a Quote →</Link>
      </section>
    </div>
  );
}
