function Career() {
  return (
    <div style={styles.card}>
      <h1>🎯 Career Objective</h1>

      <p>
        My career objective is to become a skilled AI Engineer and work on
        real-world intelligent systems.
      </p>

      <h3>Core Skills</h3>
      <ul style={styles.list}>
        <li>Python</li>
        <li>Machine Learning</li>
        <li>Deep Learning</li>
        <li>React & Web Development</li>
      </ul>
    </div>
  );
}

const styles = {
  card: {
    padding: "30px",
    textAlign: "center"
  },
  list: {
    listStyle: "none",
    padding: 0
  }
};

export default Career;
