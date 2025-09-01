import { useState } from 'react';
import { ThemeProvider } from './app/providers/ThemeProvider';
import HomePage from './pages/home/HomePage';
import Preloader from './widgets/preloader/Preloader';
import './shared/assets/variables.css';
import './shared/assets/typography.css';
import './App.css';
import useSmoothAnchors from './shared/hooks/useSmoothAnchors';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useSmoothAnchors(88);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <ThemeProvider>
      {/* Always render the app; overlay preloader on top so header exists for handoff */}
      <HomePage aria-hidden={isLoading ? true : undefined} />
      {isLoading && <Preloader onComplete={handleLoadingComplete} />}
    </ThemeProvider>
  );
}

export default App;
