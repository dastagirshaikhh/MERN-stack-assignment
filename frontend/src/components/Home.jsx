import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

const Home = () => {
  return (
    <div style={styles.container} className="d-flex flex-column justify-content-center align-items-center text-center vh-100">
      <FaCheckCircle style={styles.icon} />
      <h1 className="mb-4" style={styles.title}>Login Success</h1>
      <p className="lead mb-4" style={styles.subtitle}>Welcome to your dashboard!</p>
      <Link to='/login' className="btn btn-outline-light btn-lg" style={styles.button}>Logout</Link>
    </div>
  );
}

const styles = {
  container: {
    backgroundImage: "linear-gradient(#00d5ff, #0095ff, rgba(93, 0, 255, 0.555))",
    color: "#fff",
    padding: "2rem",
    borderRadius: "1rem",
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
  },
  icon: {
    fontSize: "4rem",
    marginBottom: "1rem",
    color: "#fff",
  },
  title: {
    fontSize: "2.5rem",
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: "1.25rem",
  },
  button: {
    padding: "0.75rem 1.5rem",
    borderRadius: "0.5rem",
  }
}

export default Home;
