import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={styles.card}>
      <h1>🏠 Home</h1>
      <p>Welcome to my 3rd Experiment, it's Ramik Chauhan this side</p>
      <p>Fast. Smooth. No Reloads 🚀</p>

      <div style={styles.btnGroup}>
        <Link to="/profile">
          <button style={styles.btn}>Profile</button>
        </Link>

        <Link to="/career">
          <button style={styles.btn}>Career Objective</button>
        </Link>
      </div>
    </div>
  );
}

const styles = {
  card: {
    padding: "40px",
    textAlign: "center",
    background: "#f0f9ff",
    borderRadius: "12px"
  },
  btnGroup: {
    marginTop: "30px"
  },
  btn: {
    margin: "10px",
    padding: "10px 20px",
    fontSize: "16px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    background: "#2563eb",
    color: "white"
  }
};

export default Home;
