const styles = {
  footer: {
    textAlign: 'center',
    padding: '30px 20px',
    borderTop: '1px solid #ecf0f1',
    color: '#7f8c8d',
    fontSize: '14px',
    marginTop: '60px',
  },
};

export default function Footer() {
  return (
    <footer style={styles.footer}>
      © {new Date().getFullYear()} MedStopLoss. All rights reserved.
    </footer>
  );
}
