import { useState } from 'react';
import Question from './Question';
import Timer from './Timer';
import { questions } from '../data/questions';
import { storeQuizResult } from '../utils/storage';

interface QuizProps {
  username: string;
  onComplete: () => void;
}

function Quiz({ username, onComplete }: QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>(new Array(questions.length).fill(-1));
  const [showResults, setShowResults] = useState(false);
  const [timeUsed, setTimeUsed] = useState('');

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answerIndex;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = (usedTime: string) => {
    setTimeUsed(usedTime);
    setShowResults(true);
    
    const score = answers.reduce((total, answer, index) => {
      return total + (answer === questions[index].correct ? 1 : 0);
    }, 0);

    storeQuizResult({
      username,
      score,
      total: questions.length,
      timeUsed: usedTime,
      timestamp: Date.now()
    });
  };

  const calculateScore = () => {
    return answers.reduce((total, answer, index) => {
      return total + (answer === questions[index].correct ? 1 : 0);
    }, 0);
  };

  const allAnswered = answers.every(answer => answer !== -1);

  if (showResults) {
    const score = calculateScore();
    const percentage = Math.round((score / questions.length) * 100);

    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-2xl text-center">
          <div className="mb-8">
            <div className={`w-24 h-24 mx-auto rounded-full flex items-center justify-center text-3xl font-bold text-white mb-4 ${
              percentage >= 80 ? 'bg-green-500' : percentage >= 60 ? 'bg-yellow-500' : 'bg-red-500'
            }`}>
              {percentage}%
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Quiz Complete!</h2>
            <p className="text-gray-600">Great job, {username}!</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-900">Score</h3>
              <p className="text-2xl font-bold text-blue-600">{score}/{questions.length}</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-purple-900">Percentage</h3>
              <p className="text-2xl font-bold text-purple-600">{percentage}%</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-green-900">Time Used</h3>
              <p className="text-2xl font-bold text-green-600">{timeUsed}</p>
            </div>
          </div>

          <button
            onClick={onComplete}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Back to Presentation
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Timer onTimeUp={handleSubmit} />
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold text-gray-900">Quiz - {username}</h1>
            <div className="text-sm text-gray-600">
              Question {currentQuestion + 1} of {questions.length}
            </div>
          </div>

          <div className="mb-8">
            <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
              <div 
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              ></div>
            </div>
          </div>

          <Question
            question={questions[currentQuestion]}
            selectedAnswer={answers[currentQuestion]}
            onAnswer={handleAnswer}
          />

          <div className="flex justify-between items-center mt-8">
            <button
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Previous
            </button>

            <div className="flex space-x-4">
              {currentQuestion < questions.length - 1 ? (
                <button
                  onClick={handleNext}
                  disabled={answers[currentQuestion] === -1}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  Next
                </button>
              ) : (
                <button
                  onClick={() => handleSubmit(timeUsed)}
                  disabled={!allAnswered}
                  className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  Submit Quiz
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quiz;
