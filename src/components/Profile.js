import profilePic from "../assets/profile.png";

function Profile() {
  return (
    <div style={styles.card}>
      <h1>👤 My Profile</h1>

      <img src={profilePic} alt="profile" style={styles.img} />

      <p><b>Name:</b> Ramik Chauhan</p>
      <p><b>Age:</b> 21</p>
      <p><b>Height:</b> 5'10"</p>
    </div>
  );
}

const styles = {
  card: {
    padding: "30px",
    textAlign: "center",
    background: "#f8fafc",
    borderRadius: "12px"
  },
  img: {
    width: "160px",
    height: "160px",
    borderRadius: "50%",
    objectFit: "cover",
    border: "4px solid #2563eb",
    marginBottom: "20px"
  }
};

export default Profile;
