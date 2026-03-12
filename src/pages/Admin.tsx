import { useState, useEffect } from 'react';
import { getQuizResults, clearResults } from '../utils/storage';
import type { QuizResult } from '../utils/storage';



function Admin() {
  const [results, setResults] = useState<QuizResult[]>([]);

  useEffect(() => {
    loadResults();
  }, []);

  const loadResults = () => {
    const storedResults = getQuizResults();
    setResults(storedResults);
  };

  const handleClearResults = () => {
    if (window.confirm('Are you sure you want to clear all results?')) {
      clearResults();
      setResults([]);
    }
  };

  const calculateStats = () => {
    if (results.length === 0) {
      return { highest: 0, average: 0, count: 0 };
    }

    const scores = results.map(r => r.score);
    const highest = Math.max(...scores);
    const average = scores.reduce((a, b) => a + b, 0) / scores.length;
    
    return {
      highest,
      average: Math.round(average * 100) / 100,
      count: results.length
    };
  };

  const stats = calculateStats();

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
            <button
              onClick={handleClearResults}
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
            >
              Reset Results
            </button>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-900">Total Students</h3>
              <p className="text-2xl font-bold text-blue-600">{stats.count}</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-green-900">Highest Score</h3>
              <p className="text-2xl font-bold text-green-600">{stats.highest}/10</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-purple-900">Average Score</h3>
              <p className="text-2xl font-bold text-purple-600">{stats.average}/10</p>
            </div>
          </div>

          {/* Results Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100"> 
                  <th className="border border-gray-300 px-4 py-2 text-left text-black">Username</th>
                  <th className="border border-gray-300 px-4 py-2 text-left text-black">Score</th>
                  <th className="border border-gray-300 px-4 py-2 text-left text-black">Total</th>
                  <th className="border border-gray-300 px-4 py-2 text-left text-black">Time Used</th>
                  <th className="border border-gray-300 px-4 py-2 text-left text-black">Date</th>
                </tr>
              </thead>
              <tbody>
                {results.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="border border-gray-300 px-4 py-8 text-center text-black">
                      No quiz results yet
                    </td>
                  </tr>
                ) : (
                  results.map((result, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2 text-black">{result.username}</td>
                      <td className="border border-gray-300 px-4 py-2 text-black">
                        <span className={`font-semibold ${
                          result.score >= 8 ? 'text-green-600' : 
                          result.score >= 6 ? 'text-yellow-600' : 'text-red-600'
                        }`}>
                          {result.score}
                        </span>
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-black" >{result.total}</td>
                      <td className="border border-gray-300 px-4 py-2 text-black">{result.timeUsed}</td>
                      <td className="border border-gray-300 px-4 py-2 text-black">
                        {new Date(result.timestamp).toLocaleDateString()}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
