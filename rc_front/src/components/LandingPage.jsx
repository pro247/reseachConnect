// eslint-disable-next-line no-unused-vars
import React from "react";

function Landing() {
  return (
    <div style={styles.container}>
      <img
        src=""
        alt="Illustration"
        style={styles.image}
      />
      <h1 style={styles.title}>
        Welcome to <strong>Research Connect</strong>
      </h1>
      <p style={styles.subtitle}>Explore resources for</p>
      <div style={styles.buttonContainer}>
        <button style={styles.button}>Students</button>
        <button style={styles.button}>Mentors</button>
        <button style={styles.button}>Researchers</button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Inter, sans-serif",
    color: "#000000",
    backgroundColor: "#ffffff",
    height: "100vh",
    padding: "20px",
  },
  image: {
    width: "290px",
    height: "290px",
    marginTop: "87px",
  },
  title: {
    fontSize: "40px",
    fontWeight: 400,
    textAlign: "center",
    lineHeight: "36px",
    marginTop: "47px",
  },
  subtitle: {
    fontSize: "16px",
    fontWeight: 400,
    textAlign: "center",
    marginTop: "24px",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "20px",
  },
  button: {
    width: "286px",
    height: "43px",
    marginTop: "10px",
    borderRadius: "50px",
    backgroundColor: "#4b00ff",
    color: "#ffffff",
    fontSize: "16px",
    fontWeight: 400,
    textAlign: "center",
    lineHeight: "19px",
    border: "none",
    cursor: "pointer",
  },
};

export default Landing;
