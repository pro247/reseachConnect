import React from 'react';
import { BookOpen, CheckCircle, Lock } from 'lucide-react';

export function Learn() {
  return (
    <div className="max-w-7xl mx-auto">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Learning Modules</h1>
        <p className="text-gray-600 mt-2">Master research skills with our structured learning path</p>
      </header>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {modules.map((module, index) => (
          <div key={index} className="card">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-2 rounded-lg ${module.completed ? 'bg-green-100' : 'bg-blue-100'}`}>
                {module.completed ? (
                  <CheckCircle className="w-5 h-5 text-green-600" />
                ) : (
                  <BookOpen className="w-5 h-5 text-blue-600" />
                )}
              </div>
              {module.locked && (
                <Lock className="w-5 h-5 text-gray-400" />
              )}
            </div>
            <h3 className="text-xl font-semibold mb-2">{module.title}</h3>
            <p className="text-gray-600 mb-4">{module.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">{module.duration}</span>
              <button 
                className={`btn-primary ${module.locked ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={module.locked}
              >
                {module.completed ? 'Review' : 'Start'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const modules = [
  {
    title: "Introduction to Research",
    description: "Learn the fundamentals of academic research and methodology",
    duration: "2 hours",
    completed: true,
    locked: false
  },
  {
    title: "Literature Review",
    description: "Master the art of finding and analyzing research papers",
    duration: "3 hours",
    completed: true,
    locked: false
  },
  {
    title: "Research Methods",
    description: "Explore different approaches to conducting research",
    duration: "4 hours",
    completed: false,
    locked: false
  },
  {
    title: "Data Analysis",
    description: "Learn to collect, analyze, and interpret research data",
    duration: "5 hours",
    completed: false,
    locked: true
  },
  {
    title: "Academic Writing",
    description: "Develop skills for writing research papers and proposals",
    duration: "4 hours",
    completed: false,
    locked: true
  },
  {
    title: "Research Ethics",
    description: "Understand ethical considerations in academic research",
    duration: "2 hours",
    completed: false,
    locked: true
  }
];