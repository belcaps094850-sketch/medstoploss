import { Link } from 'react-router-dom';
import { colors } from '../styles';

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '16px 40px',
    borderBottom: `1px solid ${colors.border}`,
    backgroundColor: colors.white,
    flexWrap: 'wrap',
    gap: '10px',
  },
  logo: {
    fontSize: '20px',
    fontWeight: 'bold',
    color: colors.dark,
    textDecoration: 'none',
  },
  links: {
    display: 'flex',
    gap: '24px',
    listStyle: 'none',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  link: {
    color: '#555',
    textDecoration: 'none',
    fontSize: '14px',
  },
  cta: {
    display: 'inline-block',
    padding: '8px 20px',
    backgroundColor: colors.accent,
    color: colors.white,
    borderRadius: '4px',
    textDecoration: 'none',
    fontSize: '14px',
    fontWeight: 'bold',
  },
};

export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <Link to="/" style={styles.logo}>MedStopLoss</Link>
      <ul style={styles.links}>
        <li><Link to="/employers" style={styles.link}>For Employers</Link></li>
        <li><Link to="/brokers" style={styles.link}>For Brokers</Link></li>
        <li><Link to="/tpas" style={styles.link}>For TPAs</Link></li>
        <li><Link to="/about" style={styles.link}>About</Link></li>
        <li><Link to="/resources" style={styles.link}>Resources</Link></li>
        <li><Link to="/contact" style={styles.cta}>Get a Quote</Link></li>
      </ul>
    </nav>
  );
}
