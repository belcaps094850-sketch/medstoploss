// Shared style constants
export const colors = {
  dark: '#2c3e50',
  text: '#333333',
  muted: '#7f8c8d',
  light: '#95a5a6',
  accent: '#3498db',
  accentHover: '#2980b9',
  border: '#ecf0f1',
  bgLight: '#f9f9f9',
  white: '#ffffff',
};

export const container = {
  maxWidth: '960px',
  margin: '0 auto',
  padding: '0 20px',
};

export const sectionStyle = {
  padding: '60px 20px',
  maxWidth: '960px',
  margin: '0 auto',
};

export const heroStyle = {
  textAlign: 'center',
  padding: '80px 20px',
  maxWidth: '760px',
  margin: '0 auto',
};

export const h1Style = {
  fontSize: '36px',
  color: colors.dark,
  marginBottom: '15px',
  lineHeight: '1.2',
};

export const h2Style = {
  fontSize: '24px',
  color: colors.dark,
  marginBottom: '20px',
};

export const subtitleStyle = {
  fontSize: '18px',
  color: colors.muted,
  marginBottom: '30px',
  lineHeight: '1.5',
};

export const btnPrimary = {
  display: 'inline-block',
  padding: '14px 32px',
  backgroundColor: colors.accent,
  color: '#ffffff',
  borderRadius: '5px',
  fontWeight: 'bold',
  fontSize: '16px',
  textDecoration: 'none',
  border: 'none',
  cursor: 'pointer',
  marginRight: '12px',
};

export const btnSecondary = {
  display: 'inline-block',
  padding: '14px 32px',
  backgroundColor: 'transparent',
  color: colors.accent,
  borderRadius: '5px',
  fontWeight: 'bold',
  fontSize: '16px',
  textDecoration: 'none',
  border: `2px solid ${colors.accent}`,
  cursor: 'pointer',
};

export const cardGrid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
  gap: '24px',
  marginTop: '20px',
};

export const card = {
  border: `1px solid ${colors.border}`,
  borderRadius: '6px',
  padding: '24px',
  backgroundColor: colors.white,
};
