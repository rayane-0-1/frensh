import { useState, useEffect } from 'react';

interface TimerProps {
  onTimeUp: (timeUsed: string) => void;
}

function Timer({ onTimeUp }: TimerProps) {
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes in seconds
  const [startTime] = useState(Date.now());

  useEffect(() => {
    // Check for stored timer state
    const storedTimer = localStorage.getItem('quizTimer');
    if (storedTimer) {
      const { startTime: storedStartTime, timeLeft: storedTimeLeft } = JSON.parse(storedTimer);
      const elapsed = Math.floor((Date.now() - storedStartTime) / 1000);
      const remaining = Math.max(0, storedTimeLeft - elapsed);
      setTimeLeft(remaining);
    } else {
      // Store initial timer state
      localStorage.setItem('quizTimer', JSON.stringify({
        startTime,
        timeLeft: 300
      }));
    }
  }, [startTime]);

  useEffect(() => {
    if (timeLeft <= 0) {
      const totalTime = 300;
      const timeUsed = formatTime(totalTime - timeLeft);
      localStorage.removeItem('quizTimer');
      onTimeUp(timeUsed);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        const newTime = prev - 1;
        
        // Update stored timer state
        localStorage.setItem('quizTimer', JSON.stringify({
          startTime,
          timeLeft: newTime
        }));
        
        return newTime;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, onTimeUp, startTime]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const isLowTime = timeLeft <= 60;

  return (
    <div className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-4xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-lg font-semibold text-gray-900">Quiz Timer</h1>
          <div className={`text-2xl font-bold ${isLowTime ? 'text-red-600' : 'text-blue-600'}`}>
            {formatTime(timeLeft)}
          </div>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
          <div 
            className={`h-2 rounded-full transition-all duration-1000 ${
              isLowTime ? 'bg-red-500' : 'bg-blue-500'
            }`}
            style={{ width: `${(timeLeft / 300) * 100}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Timer;
