import { useState } from 'react';
import { ThemeProvider } from './app/providers/ThemeProvider';
import HomePage from './pages/home/HomePage';
import Preloader from './widgets/preloader/Preloader';
import './shared/assets/variables.css';
import './shared/assets/typography.css';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <ThemeProvider>
      {isLoading && <Preloader onComplete={handleLoadingComplete} />}
      {!isLoading && <HomePage />}
    </ThemeProvider>
  );
}

export default App;
