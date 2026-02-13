import { useState } from 'react';
import { colors, heroStyle, h1Style, subtitleStyle, sectionStyle, h2Style, btnPrimary } from '../styles';

const inputStyle = {
  width: '100%',
  padding: '10px 12px',
  fontSize: '14px',
  border: `1px solid ${colors.border}`,
  borderRadius: '4px',
  boxSizing: 'border-box',
};

const labelStyle = {
  display: 'block',
  fontSize: '13px',
  fontWeight: 'bold',
  color: colors.dark,
  marginBottom: '4px',
};

const fieldWrap = {
  marginBottom: '16px',
};

const initialForm = {
  companyName: '',
  contactName: '',
  email: '',
  phone: '',
  role: '',
  employeeCount: '',
  currentCarrier: '',
  deductible: '',
  effectiveDate: '',
  message: '',
};

export default function Contact() {
  const [form, setForm] = useState(() => {
    try {
      const saved = localStorage.getItem('medstoploss_quote');
      return saved ? JSON.parse(saved) : initialForm;
    } catch { return initialForm; }
  });
  const [submitted, setSubmitted] = useState(false);

  const update = (field) => (e) => {
    const next = { ...form, [field]: e.target.value };
    setForm(next);
    localStorage.setItem('medstoploss_quote', JSON.stringify(next));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('medstoploss_quote', JSON.stringify(form));
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div style={{ ...heroStyle, padding: '120px 20px' }}>
        <h1 style={h1Style}>Thank You!</h1>
        <p style={subtitleStyle}>We've received your information and will be in touch within 48 hours with indicative pricing.</p>
      </div>
    );
  }

  return (
    <div>
      <section style={heroStyle}>
        <h1 style={h1Style}>Get a Stop Loss Quote</h1>
        <p style={subtitleStyle}>
          Tell us about your group and we'll have indicative pricing back to you within 48 hours. No obligation, no pressure.
        </p>
      </section>

      <section style={{ ...sectionStyle, paddingTop: 0 }}>
        <form onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div style={fieldWrap}>
              <label style={labelStyle}>Company Name *</label>
              <input style={inputStyle} value={form.companyName} onChange={update('companyName')} required />
            </div>
            <div style={fieldWrap}>
              <label style={labelStyle}>Contact Name *</label>
              <input style={inputStyle} value={form.contactName} onChange={update('contactName')} required />
            </div>
            <div style={fieldWrap}>
              <label style={labelStyle}>Email *</label>
              <input style={inputStyle} type="email" value={form.email} onChange={update('email')} required />
            </div>
            <div style={fieldWrap}>
              <label style={labelStyle}>Phone</label>
              <input style={inputStyle} type="tel" value={form.phone} onChange={update('phone')} />
            </div>
          </div>

          <div style={fieldWrap}>
            <label style={labelStyle}>I am a: *</label>
            <select style={inputStyle} value={form.role} onChange={update('role')} required>
              <option value="">Select...</option>
              <option value="Employer">Employer</option>
              <option value="Broker">Broker</option>
              <option value="TPA">TPA</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div style={fieldWrap}>
              <label style={labelStyle}>Number of Covered Employees</label>
              <input style={inputStyle} type="number" value={form.employeeCount} onChange={update('employeeCount')} />
            </div>
            <div style={fieldWrap}>
              <label style={labelStyle}>Current Stop Loss Carrier</label>
              <input style={inputStyle} value={form.currentCarrier} onChange={update('currentCarrier')} placeholder="Optional" />
            </div>
            <div style={fieldWrap}>
              <label style={labelStyle}>Current Specific Deductible</label>
              <input style={inputStyle} value={form.deductible} onChange={update('deductible')} placeholder="Optional" />
            </div>
            <div style={fieldWrap}>
              <label style={labelStyle}>Effective Date Needed</label>
              <input style={inputStyle} type="date" value={form.effectiveDate} onChange={update('effectiveDate')} />
            </div>
          </div>

          <div style={fieldWrap}>
            <label style={labelStyle}>Upload Census Data (optional)</label>
            <input type="file" style={{ fontSize: '14px', color: colors.muted }} disabled title="File upload coming soon" />
            <p style={{ fontSize: '12px', color: colors.muted, marginTop: '4px' }}>File upload coming soon</p>
          </div>

          <div style={fieldWrap}>
            <label style={labelStyle}>Message / Additional Details</label>
            <textarea style={{ ...inputStyle, minHeight: '100px', resize: 'vertical' }} value={form.message} onChange={update('message')} />
          </div>

          <button type="submit" style={{ ...btnPrimary, width: '100%', textAlign: 'center', marginRight: 0 }}>
            Get My Quote →
          </button>
        </form>

        <p style={{ textAlign: 'center', marginTop: '30px', color: colors.muted, fontSize: '14px' }}>
          Prefer to talk? Call us or email us. We respond within 4 business hours.
        </p>
      </section>
    </div>
  );
}
