function Contact() {
  return (
    <div style={styles.card}>
      <h1>📞 Contact</h1>
      <p>Email: ramiktechsavvy@gmail.com</p>
      <p>Phone: +91 7015323125</p>
    </div>
  );
}

const styles = {
  card: {
    padding: "30px",
    background: "#ecfeff",
    borderRadius: "12px",
    boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
    textAlign: "center"
  }
};

export default Contact;
