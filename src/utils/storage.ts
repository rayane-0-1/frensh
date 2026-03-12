export interface QuizResult {
  username: string;
  score: number;
  total: number;
  timeUsed: string;
  timestamp: number;
}

// User storage
export const storeUser = (username: string): void => {
  localStorage.setItem('currentUser', JSON.stringify({ username }));
};

export const getStoredUser = (): string | null => {
  const stored = localStorage.getItem('currentUser');
  return stored ? JSON.parse(stored).username : null;
};

export const clearUser = (): void => {
  localStorage.removeItem('currentUser');
};

// Quiz results storage
export const storeQuizResult = (result: QuizResult): void => {
  const existingResults = getQuizResults();
  
  // Check if user already has a result and update it
  const existingIndex = existingResults.findIndex(r => r.username === result.username);
  
  if (existingIndex !== -1) {
    existingResults[existingIndex] = result;
  } else {
    existingResults.push(result);
  }
  
  localStorage.setItem('quizResults', JSON.stringify(existingResults));
};

export const getQuizResults = (): QuizResult[] => {
  const stored = localStorage.getItem('quizResults');
  return stored ? JSON.parse(stored) : [];
};

export const clearResults = (): void => {
  localStorage.removeItem('quizResults');
};
