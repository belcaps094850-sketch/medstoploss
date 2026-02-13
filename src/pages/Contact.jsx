const styles = {
  container: {
    padding: '60px 20px',
    maxWidth: '700px',
    margin: '0 auto',
  },
  h1: {
    fontSize: '28px',
    color: '#2c3e50',
    marginBottom: '15px',
  },
  placeholder: {
    color: '#95a5a6',
    fontStyle: 'italic',
  },
};

export default function Contact() {
  return (
    <div style={styles.container}>
      <h1 style={styles.h1}>Contact</h1>
      <p style={styles.placeholder}>Content coming soon — awaiting copy from Nova.</p>
    </div>
  );
}
