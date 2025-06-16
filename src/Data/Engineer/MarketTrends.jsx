import React, { useState, useEffect } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import axios from "axios";

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const dataConfig = {
  "9th Grade": {
    indiaData: {
      labels: [
        "Basic Sciences",
        "Mathematics",
        "Computer Basics",
        "Engineering Intro",
        "Other Subjects",
      ],
      datasets: [
        {
          data: [30, 25, 20, 15, 10],
          backgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56",
            "#4BC0C0",
            "#E7E9ED",
          ],
          borderColor: "#ffffff",
          borderWidth: 2,
        },
      ],
    },
    worldData: {
      labels: [
        "General STEM",
        "Coding Basics",
        "Physics",
        "Math Foundations",
        "Other",
      ],
      datasets: [
        {
          data: [35, 20, 20, 15, 10],
          backgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56",
            "#4BC0C0",
            "#E7E9ED",
          ],
          borderColor: "#ffffff",
          borderWidth: 2,
        },
      ],
    },
    stats: {
      graduates: "N/A (Pre-college level)",
      employment: "N/A (Focus on foundational skills)",
      enrollment: "High enrollment in STEM preparatory courses",
    },
    salaries: {
      india: { top1: "N/A", top25: "N/A", median: "N/A" },
      world: { top1: "N/A", top25: "N/A", median: "N/A" },
    },
  },
  "10th Grade": {
    indiaData: {
      labels: [
        "Advanced Sciences",
        "Mathematics",
        "Computer Programming",
        "Engineering Basics",
        "Other Subjects",
      ],
      datasets: [
        {
          data: [28, 25, 22, 15, 10],
          backgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56",
            "#4BC0C0",
            "#E7E9ED",
          ],
          borderColor: "#ffffff",
          borderWidth: 2,
        },
      ],
    },
    worldData: {
      labels: [
        "STEM Core",
        "Intro to Coding",
        "Physics",
        "Advanced Math",
        "Other",
      ],
      datasets: [
        {
          data: [30, 25, 20, 15, 10],
          backgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56",
            "#4BC0C0",
            "#E7E9ED",
          ],
          borderColor: "#ffffff",
          borderWidth: 2,
        },
      ],
    },
    stats: {
      graduates: "N/A (Pre-college level)",
      employment: "N/A (Building technical skills)",
      enrollment: "Stable enrollment in STEM tracks",
    },
    salaries: {
      india: { top1: "N/A", top25: "N/A", median: "N/A" },
      world: { top1: "N/A", top25: "N/A", median: "N/A" },
    },
  },
  "High School": {
    indiaData: {
      labels: [
        "Computer Science Prep",
        "Electronics Basics",
        "Mechanical Concepts",
        "Physics",
        "Other Subjects",
      ],
      datasets: [
        {
          data: [25, 20, 20, 20, 15],
          backgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56",
            "#4BC0C0",
            "#E7E9ED",
          ],
          borderColor: "#ffffff",
          borderWidth: 2,
        },
      ],
    },
    worldData: {
      labels: [
        "Software Prep",
        "Electrical Basics",
        "Mechanics",
        "Math",
        "Other",
      ],
      datasets: [
        {
          data: [30, 20, 20, 15, 15],
          backgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56",
            "#4BC0C0",
            "#E7E9ED",
          ],
          borderColor: "#ffffff",
          borderWidth: 2,
        },
      ],
    },
    stats: {
      graduates: "N/A (Pre-university)",
      employment: "N/A (Focus on college prep)",
      enrollment: "Growing interest in engineering streams",
    },
    salaries: {
      india: { top1: "N/A", top25: "N/A", median: "N/A" },
      world: { top1: "N/A", top25: "N/A", median: "N/A" },
    },
  },
  "Bachelor's": {
    indiaData: {
      labels: [
        "Computer Science and Engineering",
        "Electronics and Communication",
        "Mechanical Engineering",
        "Civil Engineering",
        "Electrical Engineering",
        "Other Disciplines",
      ],
      datasets: [
        {
          data: [25, 20, 18, 15, 12, 10],
          backgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56",
            "#4BC0C0",
            "#9966FF",
            "#E7E9ED",
          ],
          borderColor: "#ffffff",
          borderWidth: 2,
        },
      ],
    },
    worldData: {
      labels: [
        "Software Engineering",
        "Electrical Engineering",
        "Mechanical Engineering",
        "Civil Engineering",
        "Chemical Engineering",
        "Other Disciplines",
      ],
      datasets: [
        {
          data: [30, 20, 15, 10, 10, 15],
          backgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56",
            "#4BC0C0",
            "#9966FF",
            "#E7E9ED",
          ],
          borderColor: "#ffffff",
          borderWidth: 2,
        },
      ],
    },
    stats: {
      graduates: "1.5 million annually",
      employment: "10% secure jobs in 2024",
      enrollment: "10% drop from 2016-21",
    },
    salaries: {
      india: { top1: "₹25,00,000", top25: "₹10,00,000", median: "₹8,00,000" },
      world: {
        top1: "$190,000 (~₹1,57,00,000)",
        top25: "$153,000 (~₹1,26,45,000)",
        median: "$113,924 (~₹94,00,000)",
      },
    },
  },
  Postgraduate: {
    indiaData: {
      labels: [
        "Advanced Computer Science",
        "VLSI and Embedded Systems",
        "Robotics and Automation",
        "Structural Engineering",
        "Power Systems",
        "Other Specializations",
      ],
      datasets: [
        {
          data: [30, 20, 15, 15, 10, 10],
          backgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56",
            "#4BC0C0",
            "#9966FF",
            "#E7E9ED",
          ],
          borderColor: "#ffffff",
          borderWidth: 2,
        },
      ],
    },
    worldData: {
      labels: [
        "AI and Machine Learning",
        "Advanced Software Engineering",
        "Biomedical Engineering",
        "Aerospace Engineering",
        "Energy Systems",
        "Other",
      ],
      datasets: [
        {
          data: [35, 25, 15, 10, 10, 5],
          backgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56",
            "#4BC0C0",
            "#9966FF",
            "#E7E9ED",
          ],
          borderColor: "#ffffff",
          borderWidth: 2,
        },
      ],
    },
    stats: {
      graduates: "0.2 million annually",
      employment: "20% secure specialized jobs in 2024",
      enrollment: "Stable, with focus on niche fields",
    },
    salaries: {
      india: { top1: "₹40,00,000", top25: "₹20,00,000", median: "₹15,00,000" },
      world: {
        top1: "$250,000 (~₹2,06,50,000)",
        top25: "$200,000 (~₹1,65,20,000)",
        median: "$150,000 (~₹1,23,90,000)",
      },
    },
  },
};

const EngineeringData = () => {
  const [qualification, setQualification] = useState(null);

  // Fetch qualification from FastAPI
  useEffect(() => {
    const fetchUserData = async () => {
      const userId = localStorage.getItem("userId");
      if (userId) {
        try {
          const response = await axios.get(
            `http://localhost:5000/signup/user/${userId}`
          );
          setQualification(response.data.user?.qualification || "Bachelor's");
        } catch (error) {
          console.error("Error fetching user data:", error);
          setQualification("Bachelor's"); // Fallback
        }
      } else {
        setQualification("Bachelor's"); // Fallback if no userId
      }
    };
    fetchUserData();
  }, []);

  // Select data based on qualification
  const selectedData = qualification
    ? dataConfig[qualification] || dataConfig["Bachelor's"]
    : dataConfig["Bachelor's"];

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "right",
        labels: {
          color: "#4A4A4A",
          font: { size: 14 },
        },
      },
      datalabels: {
        color: "#fff",
        formatter: (value) => `${value}%`,
        font: { size: 12, weight: "bold" },
      },
    },
    layout: {
      padding: { top: 10, bottom: 10 },
    },
  };

  return (
    <div className="bg-purple-100 shadow-lg rounded-lg p-8 pt-10 mgt-10" style={{
      marginTop: "10%",
    }}>
      <h1 className="text-3xl font-bold text-purple-700 mb-9 text-center">
        Engineering Domain Statistics
        {qualification ? ` for ${qualification}` : ""}
      </h1>

      <ul className="text-gray-700 text-center mb-12">
        <li className="mb-2">➡ Graduates: {selectedData.stats.graduates}</li>
        <li className="mb-2">➡ Employment: {selectedData.stats.employment}</li>
        <li className="mb-2">➡ Enrollment: {selectedData.stats.enrollment}</li>
      </ul>

      <section className="mb-5">
        <h2 className="text-2xl font-semibold text-purple-800 mb-10 ml-10">
          Distribution of Students in India
        </h2>
        <div className="flex justify-center">
          <div className="w-[670px] h-[300px]">
            <Pie data={selectedData.indiaData} options={options} />
          </div>
        </div>
      </section>

      <section className="mb-5">
        <h2 className="text-2xl font-semibold text-purple-800 mb-10 ml-10">
          Worldwide Distribution of Engineers
        </h2>
        <div className="flex justify-center">
          <div className="w-[670px] h-[300px]">
            <Pie data={selectedData.worldData} options={options} />
          </div>
        </div>
      </section>

      <section className="mt-[10%] ml-10">
        <h2 className="text-2xl font-semibold text-purple-800 mb-4">
          Engineer Salaries
        </h2>
        <div className="text-gray-700 mb-4">
          <h3 className="text-xl font-bold mb-2">In India:</h3>
          <ul className="list-disc pl-5">
            <li className="mb-1">Top 1%: {selectedData.salaries.india.top1}</li>
            <li className="mb-1">
              Average of Top 25%: {selectedData.salaries.india.top25}
            </li>
            <li className="mb-1">
              Median Salary: {selectedData.salaries.india.median}
            </li>
          </ul>
        </div>
        <div className="text-gray-700">
          <h3 className="text-xl font-bold mb-2">Worldwide:</h3>
          <ul className="list-disc pl-5">
            <li className="mb-1">Top 1%: {selectedData.salaries.world.top1}</li>
            <li className="mb-1">
              Average of Top 25%: {selectedData.salaries.world.top25}
            </li>
            <li className="mb-1">
              Median Salary: {selectedData.salaries.world.median}
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default EngineeringData;
