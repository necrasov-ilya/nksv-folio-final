import { ThemeProvider } from './app/providers/ThemeProvider';
import HomePage from './pages/home/HomePage';
import './shared/assets/variables.css';
import './shared/assets/typography.css';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <HomePage />
    </ThemeProvider>
  );
}

export default App;
