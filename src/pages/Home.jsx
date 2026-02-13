const styles = {
  hero: {
    textAlign: 'center',
    padding: '80px 20px',
    maxWidth: '700px',
    margin: '0 auto',
  },
  h1: {
    fontSize: '36px',
    color: '#2c3e50',
    marginBottom: '15px',
  },
  subtitle: {
    fontSize: '18px',
    color: '#7f8c8d',
    marginBottom: '30px',
  },
  cta: {
    display: 'inline-block',
    padding: '14px 36px',
    backgroundColor: '#3498db',
    color: '#ffffff',
    borderRadius: '5px',
    fontWeight: 'bold',
    fontSize: '16px',
    textDecoration: 'none',
    border: 'none',
    cursor: 'pointer',
  },
  section: {
    padding: '60px 20px',
    maxWidth: '800px',
    margin: '0 auto',
  },
  sectionTitle: {
    fontSize: '24px',
    color: '#2c3e50',
    marginBottom: '20px',
    textAlign: 'center',
  },
  placeholder: {
    textAlign: 'center',
    color: '#95a5a6',
    fontStyle: 'italic',
  },
};

export default function Home() {
  return (
    <div>
      <section style={styles.hero}>
        <h1 style={styles.h1}>MedStopLoss</h1>
        <p style={styles.subtitle}>
          Protecting you from unexpected medical costs.
        </p>
        <button style={styles.cta}>Learn More</button>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Features</h2>
        <p style={styles.placeholder}>Content coming soon — awaiting copy from Nova.</p>
      </section>
    </div>
  );
}
