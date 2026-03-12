interface QuestionData {
  question: string;
  options: string[];
  correct: number;
}

interface QuestionProps {
  question: QuestionData;
  selectedAnswer: number;
  onAnswer: (answerIndex: number) => void;
}

function Question({ question, selectedAnswer, onAnswer }: QuestionProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-blue-900 leading-relaxed">
        {question.question}
      </h2>

      <div className="space-y-3">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => onAnswer(index)}
            className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
              selectedAnswer === index
                ? 'border-blue-500 bg-blue-50 text-blue-900'
                : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
            }`}
          >
            <div className="flex items-center space-x-3">
              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                selectedAnswer === index
                  ? 'border-blue-500 bg-blue-500'
                  : 'border-gray-300'
              }`}>
                {selectedAnswer === index && (
                  <div className="w-3 h-3 bg-white rounded-full text-blue-900"></div>
                )}
              </div>
              <span className="font-medium text-blue-900">{String.fromCharCode(65 + index)}.</span>
              <span className="text-blue-900">{option}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

export default Question;
