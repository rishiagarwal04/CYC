# 🎯 CYC - Choose Your Career

**CYC (Choose Your Career)** is an intelligent career guidance platform designed to empower students in making well-informed decisions about their future. It offers a smart and interactive web interface built on the **MERN stack** with an integrated **Machine Learning model** that analyzes user interests and goals to suggest tailored career paths.

---

## 🧠 Motivation

Many students struggle with choosing the right career due to lack of guidance, awareness, or access to mentors. CYC aims to bridge this gap by:

- Mapping personal interests to real-world career options.
- Recommending personalized career paths using data-driven insights.
- Offering a centralized platform with roadmaps, requirements, and growth opportunities.

---

## 🌟 Key Features

| Feature                             | Description                                                                 |
|-------------------------------------|-----------------------------------------------------------------------------|
| 💡 Interest-based Questions         | Interactive questions to gauge the user's interest and academic goals.     |
| 🤖 ML-Powered Recommendations       | Custom career suggestions based on a trained recommendation model.         |
| 📚 Roadmaps and Resources           | Detailed information about each career path including courses, skills, etc.|
| 🔐 Secure User Authentication       | User login/signup with JWT-based authentication.                           |
| 📈 Career Trends & Data             | Real-time insights on trending careers and skill demand.                   |

---

## 🛠️ Tech Stack

- **Frontend**: React.js, Tailwind CSS, Axios
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (with Mongoose)
- **ML Model**: Scikit-learn / TensorFlow, Flask REST API for integration
- **Authentication**: JWT, Bcrypt
- **Version Control**: Git & GitHub

---

## 🧭 How It Works

1. The student creates a profile and answers a set of interest-based and goal-oriented questions.
2. The frontend sends this data to a backend API.
3. The backend forwards the data to a hosted **Python ML model** via a REST endpoint.
4. The ML model predicts probable career paths and returns them to the frontend.
5. The UI displays these recommendations along with relevant resources and guides.

---

## Use Cases
Students seeking career guidance based on interests.

Educational institutions wanting to integrate a digital counseling platform.

Ed-tech startups aiming to offer smart course/career recommendation tools.

---

## 💬 Contribution Guidelines
We welcome contributions!

Fork the repository.

Create a new branch: git checkout -b feature-name

Make your changes.

Commit and push: git commit -m "Added X feature" → git push origin feature-name

Open a Pull Request.

## 📄 License
Licensed under the MIT License.
