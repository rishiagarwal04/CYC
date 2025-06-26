import React from "react";
import { useNavigate } from "react-router-dom";

const Starteng = () => {
  const navigate = useNavigate();

  const handleNext = () => navigate("/roadmap/milestone1");

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to the Engineering Roadmap</h1>
      <p style={styles.content}>
        This roadmap will guide you through the essential milestones to excel in your engineering journey. 
        Click "Next" to get started with Milestone 1 and unlock your potential!
      </p>
      <div style={styles.buttonContainer}>
        <button style={styles.buttonDisabled} disabled>
          Previous
        </button>
        <button style={styles.buttonNext} onClick={handleNext}>
          Next
        </button>
      </div>
      <div style={styles.bottomButtons}>
        <button style={styles.bottomButton}>Contact Us</button>
        <button style={styles.bottomButton}>FAQs</button>
        <button style={styles.bottomButton}>Support</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    justifyItems: "center",
    alignItems: "center",
    height: "90vh",
    textAlign: "center",
    backgroundColor: "#f5f5f5",
    padding: "20px",
  },
  title: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#333",
  },
  content: {
    fontSize: "1.2rem",
    lineHeight: "1.6",
    color: "#666",
    maxWidth: "600px",
    marginBottom: "30px",
  },
  buttonContainer: {
    display: "flex",
    gap: "20px",
    marginBottom: "40px",
  },
  buttonDisabled: {
    padding: "10px 20px",
    fontSize: "1rem",
    color: "#aaa",
    backgroundColor: "#e0e0e0",
    border: "none",
    borderRadius: "5px",
    cursor: "not-allowed",
  },
  buttonNext: {
    padding: "10px 20px",
    fontSize: "1rem",
    color: "#fff",
    backgroundColor: "#007BFF",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  bottomButtons: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
  },
  bottomButton: {
    padding: "8px 16px",
    fontSize: "0.9rem",
    color: "#007BFF",
    backgroundColor: "transparent",
    border: "1px solid #007BFF",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default Starteng;
