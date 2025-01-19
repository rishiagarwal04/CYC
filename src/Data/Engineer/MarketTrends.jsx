import { Pie } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

// Register necessary Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const EngineeringData = () => {
    const indiaData = {
        labels: [
            'Computer Science and Engineering',
            'Electronics and Communication Engineering',
            'Mechanical Engineering',
            'Civil Engineering',
            'Electrical Engineering',
            'Chemical Engineering',
            'Other Disciplines',
        ],
        datasets: [
            {
                data: [25, 20, 18, 15, 12, 5, 5], // Corresponding percentages
                backgroundColor: [
                    '#FF6384', // pink
                    '#36A2EB', // blue
                    '#FFCE56', // yellow
                    '#4BC0C0', // teal
                    '#9966FF', // purple
                    '#FF9F40', // orange
                    '#E7E9ED', // light gray
                ],
                borderColor: '#ffffff',
                borderWidth: 2,
            },
        ],
    };

    const worldData = {
        labels: [
            'Software Engineering',
            'Electrical Engineering',
            'Mechanical Engineering',
            'Civil Engineering',
            'Chemical Engineering',
            'Aerospace Engineering',
            'Biomedical Engineering',
            'Other Disciplines',
        ],
        datasets: [
            {
                data: [30, 20, 15, 10, 8, 8, 4, 5], // Corresponding percentages
                backgroundColor: [
                    '#FF6384', // pink
                    '#36A2EB', // blue
                    '#FFCE56', // yellow
                    '#4BC0C0', // teal
                    '#9966FF', // purple
                    '#FF9F40', // orange
                    '#C9CBCF', // gray
                    '#B8A1D2', // lavender
                ],
                borderColor: '#ffffff',
                borderWidth: 2,
            },
        ],
    };

    const options = {
        responsive: true, // Ensures the chart adjusts to the container's size
        maintainAspectRatio: false, // Allows manual control over the chart's aspect ratio
        plugins: {
            legend: {
                position: 'right',
                labels: {
                    color: '#4A4A4A', // dark gray
                    font: {
                        size: 14,
                    },
                },
            },
        },
        layout: {
            padding: {
                top: 10,
                bottom: 10,
            },
        },
    };
    
    return (
        <div className="bg-purple-100 shadow-lg rounded-lg p-8 pt-10">
            <h1 className="text-3xl font-bold text-purple-700 mb-9 text-center">Engineering Domain Statistics</h1>
    
            <ul className="text-gray-700 text-center mb-12">
                <li className="mb-2">➡ Engineering Graduates: About 1.5 million annually.</li>
                <li className="mb-2">➡ Employment Challenges: Only ~10% secure jobs in 2024.</li>
                <li className="mb-2">➡ Enrollment Trends: A 10% drop from 2016-21.</li>
            </ul>
            {/* <div className="flex justify-around w-full"> */}
    
                <section className="mb-5">
                    <h2 className="text-2xl font-semibold text-purple-800 mb-10 ml-10">
                        Distribution of Students in India
                    </h2>
                    <div className="flex justify-center">
                        <div className="w-[670px] h-[300px]"> {/* Fixed width and height */}
                            <Pie data={indiaData} options={options} />
                        </div>
                    </div>
                </section>
    
                <section className="mb-5">
                    <h2 className="text-2xl font-semibold text-purple-800 mb-10  ml-10">
                        Worldwide Distribution of Engineers
                    </h2>
                    <div className="flex justify-center">
                        <div className="w-[670px] h-[300px]"> {/* Fixed width and height */}
                            <Pie data={worldData} options={options} />
                        </div>
                    </div>
                </section>
            {/* </div> */}
    
            <section className="mt-[10%] ml-10">
                <h2 className="text-2xl font-semibold text-purple-800 mb-4">Engineer Salaries</h2>
                <div className="text-gray-700 mb-4">
                    <h3 className="text-xl font-bold mb-2">In India:</h3>
                    <ul className="list-disc pl-5">
                        <li className="mb-1">Top 1%: ₹25,00,000</li>
                        <li className="mb-1">Average of Top 25%: ₹10,00,000</li>
                        <li className="mb-1">Median Salary: ₹8,00,000</li>
                    </ul>
                </div>
                <div className="text-gray-700">
                    <h3 className="text-xl font-bold mb-2">Worldwide:</h3>
                    <ul className="list-disc pl-5">
                        <li className="mb-1">Top 1%: $190,000 (~₹1,57,00,000)</li>
                        <li className="mb-1">Average of Top 25%: $153,000 (~₹1,26,45,000)</li>
                        <li className="mb-1">Median Salary: $113,924 (~₹94,00,000)</li>
                    </ul>
                </div>
            </section>
        </div>
    );
    
};

export default EngineeringData;
