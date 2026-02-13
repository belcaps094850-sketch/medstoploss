import { Link } from 'react-router-dom';

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 40px',
    borderBottom: '1px solid #ecf0f1',
    backgroundColor: '#ffffff',
  },
  logo: {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#2c3e50',
    textDecoration: 'none',
  },
  links: {
    display: 'flex',
    gap: '30px',
    listStyle: 'none',
  },
  link: {
    color: '#555',
    textDecoration: 'none',
    fontSize: '15px',
  },
};

export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <Link to="/" style={styles.logo}>MedStopLoss</Link>
      <ul style={styles.links}>
        <li><Link to="/" style={styles.link}>Home</Link></li>
        <li><Link to="/about" style={styles.link}>About</Link></li>
        <li><Link to="/contact" style={styles.link}>Contact</Link></li>
      </ul>
    </nav>
  );
}
