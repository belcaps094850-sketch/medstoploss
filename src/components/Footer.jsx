import { Link } from 'react-router-dom';
import { colors } from '../styles';

const styles = {
  footer: {
    borderTop: `1px solid ${colors.border}`,
    padding: '40px 20px',
    marginTop: '60px',
    backgroundColor: colors.bgLight,
  },
  inner: {
    maxWidth: '960px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
    gap: '30px',
  },
  colTitle: {
    fontWeight: 'bold',
    color: colors.dark,
    marginBottom: '12px',
    fontSize: '14px',
  },
  link: {
    display: 'block',
    color: colors.muted,
    textDecoration: 'none',
    fontSize: '13px',
    marginBottom: '8px',
  },
  bottom: {
    maxWidth: '960px',
    margin: '30px auto 0',
    paddingTop: '20px',
    borderTop: `1px solid ${colors.border}`,
    textAlign: 'center',
    color: colors.light,
    fontSize: '13px',
  },
};

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.inner}>
        <div>
          <div style={styles.colTitle}>Solutions</div>
          <Link to="/employers" style={styles.link}>For Employers</Link>
          <Link to="/brokers" style={styles.link}>For Brokers</Link>
          <Link to="/tpas" style={styles.link}>For TPAs</Link>
        </div>
        <div>
          <div style={styles.colTitle}>Company</div>
          <Link to="/about" style={styles.link}>About Us</Link>
          <Link to="/contact" style={styles.link}>Contact</Link>
        </div>
        <div>
          <div style={styles.colTitle}>Resources</div>
          <Link to="/resources" style={styles.link}>Knowledge Center</Link>
        </div>
        <div>
          <div style={styles.colTitle}>Connect</div>
          <a href="mailto:hello@medstoploss.com" style={styles.link}>Email Us</a>
        </div>
      </div>
      <div style={styles.bottom}>
        © {new Date().getFullYear()} MedStopLoss. All rights reserved.
      </div>
    </footer>
  );
}
