import React from 'react'

const milestone1eng = () => {

    return (
      <div style={styles.container}>
        <h1 style={styles.title}>Flowchart</h1>
        <div style={styles.chart}>
          {/* Olympiads */}
          <div style={styles.node}>
            <h2>1. Olympiads</h2>
            <div style={styles.subNodeContainer}>
              <div style={styles.subNode}>a. Mathematics</div>
              <div style={styles.subNode}>b. Chemistry</div>
              <div style={styles.subNode}>c. Physics</div>
              <div style={styles.subNode}>d. Science Olympiads</div>
              <div style={styles.subNode}>e. Technology and Computing</div>
              <div style={styles.subNode}>f. General Knowledge and Miscellaneous</div>
            </div>
          </div>
  
          {/* Skills */}
          <div style={styles.node}>
            <h2>2. Skills</h2>
            <div style={styles.subNodeContainer}>
              <div style={styles.subNode}>
                <h3>a. Programming & Development</h3>
                <div style={styles.leafContainer}>
                  <div style={styles.leaf}>i. Programming Basics</div>
                  <div style={styles.leaf}>ii. Web Development</div>
                  <div style={styles.leaf}>iii. Mobile App Development</div>
                  <div style={styles.leaf}>iv. Game Development</div>
                </div>
              </div>
  
              <div style={styles.subNode}>
                <h3>b. Hardware & Electronics</h3>
                <div style={styles.leafContainer}>
                  <div style={styles.leaf}>i. Robotics and Electronics</div>
                  <div style={styles.leaf}>ii. Internet of Things (IoT)</div>
                </div>
              </div>
  
              <div style={styles.subNode}>
                <h3>c. Data & Analytics</h3>
                <div style={styles.leafContainer}>
                  <div style={styles.leaf}>i. Data Science (Beginner)</div>
                  <div style={styles.leaf}>ii. AI and Machine Learning (Beginner)</div>
                </div>
              </div>
  
              <div style={styles.subNode}>
                <h3>d. Creative & Design Tools</h3>
                <div style={styles.leafContainer}>
                  <div style={styles.leaf}>i. 3D Design and Modeling</div>
                  <div style={styles.leaf}>ii. Creative Tech Tools</div>
                </div>
              </div>
  
              <div style={styles.subNode}>
                <h3>e. Cybersecurity & Cloud</h3>
                <div style={styles.leafContainer}>
                  <div style={styles.leaf}>i. Cybersecurity Basics</div>
                  <div style={styles.leaf}>ii. Cloud Basics</div>
                </div>
              </div>
  
              <div style={styles.subNode}>
                <h3>f. Emerging Technologies</h3>
                <div style={styles.leafContainer}>
                  <div style={styles.leaf}>i. Augmented Reality (AR) and Virtual Reality (VR)</div>
                </div>
              </div>
  
              <div style={styles.subNode}>
                <h3>g. Collaboration & Version Control</h3>
                <div style={styles.leafContainer}>
                  <div style={styles.leaf}>i. Version Control</div>
                </div>
              </div>
  
              <div style={styles.subNode}>
                <h3>f. Competitions & Challenges</h3>
                <div style={styles.leafContainer}>
                  <div style={styles.leaf}>i. Competitive Tech Exams/Challenges</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  const styles = {
    container: {
      padding: "20px",
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#f5f5f5",
      color: "#333",
    },
    title: {
      textAlign: "center",
      marginBottom: "30px",
      fontSize: "2rem",
    },
    chart: {
      display: "flex",
      flexDirection: "column",
      gap: "20px",
    },
    node: {
      backgroundColor: "#007BFF",
      color: "#fff",
      padding: "15px",
      borderRadius: "8px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    },
    subNodeContainer: {
      marginTop: "10px",
      display: "flex",
      flexWrap: "wrap",
      gap: "15px",
    },
    subNode: {
      backgroundColor: "#E0E0E0",
      color: "#333",
      padding: "10px",
      borderRadius: "5px",
      flex: "1 1 45%",
      textAlign: "left",
    },
    leafContainer: {
      marginLeft: "20px",
      marginTop: "10px",
    },
    leaf: {
      backgroundColor: "#f9f9f9",
      padding: "5px 10px",
      marginTop: "5px",
      borderRadius: "5px",
      border: "1px solid #ccc",
    },
  };
  
  export default milestone1eng;
  