import React from 'react';
import learningPaths from './learning';

const LearningPaths = () => {
  return (
    <div className="px-4 py-8">
      <h1 className="text-3xl font-semibold text-center text-purple-800 mb-6">Learning Paths</h1>

      {Object.keys(learningPaths).map((category) => (
        <div key={category} className="my-8 p-6 bg-purple-100 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-purple-800">{category}</h2>
          {Object.keys(learningPaths[category]).map((path) => (
            <div key={path} className="mt-4">
              <h3 className="text-xl font-semibold text-purple-700">{path}</h3>
              <ul className="list-disc pl-6 mt-2 text-gray-700">
                {learningPaths[category][path].map((lesson, index) => (
                  <li key={index} className="mt-1">{lesson}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default LearningPaths;
