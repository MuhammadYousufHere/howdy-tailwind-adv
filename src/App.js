import { Routes, Route } from 'react-router-dom';
import { Button, Hero, Navbar } from './components';
import SignIn from './components/SignIn';
import { useTheme } from './themeContext/theme';
function App() {
  const { theme, toggleTheme } = useTheme();
  const toggler = () => {
    toggleTheme();
  };
  return (
    <div className={theme}>
      <Navbar toggler={toggler} />
      <Routes>
        <Route
          path='/'
          element={
            <div className='dark:bg-zinc-200'>
              <Hero />
            </div>
          }
        />
        <Route
          path='/signin'
          element={<SignIn />}
        />
      </Routes>
    </div>
  );
}

export default App;
