import './App.css';
import useLocalStorage from 'use-local-storage'
import Navbar from './components/navbar/Navbar';
import Main from './components/main/Main';

function App() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme)
  }


  return (
    <div className="App" data-theme={theme}>
      <Navbar switchTheme={switchTheme} />
      <Main />
    </div>
  );
}

export default App;
