import { useState, useEffect } from 'react';
import Login from '../components/Login';
import Quiz from '../components/Quiz';
import Slides from '../components/Slides';
import { getStoredUser } from '../utils/storage';

function Home() {
  const [currentView, setCurrentView] = useState<'slides' | 'login' | 'quiz'>('slides');
  const [user, setUser] = useState<string | null>(null);

  useEffect(() => {
    const storedUser = getStoredUser();
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const handleLogin = (username: string) => {
    setUser(username);
    setCurrentView('quiz');
  };

  const handleStartQuiz = () => {
    setCurrentView('login');
  };

  const handleQuizComplete = () => {
    setCurrentView('slides');
    setUser(null);
  };

  return (
    <div className="min-h-screen">
      {currentView === 'slides' && (
        <Slides onStartQuiz={handleStartQuiz} />
      )}
      
      {currentView === 'login' && (
        <Login onLogin={handleLogin} />
      )}
      
      {currentView === 'quiz' && user && (
        <Quiz username={user} onComplete={handleQuizComplete} />
      )}
    </div>
  );
}

export default Home;
