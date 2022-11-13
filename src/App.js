import { Routes, Route } from 'react-router-dom';
import { Button, Hero, Navbar } from './components';
import SignIn from './components/SignIn';

function App() {
  return (
    <div className='dark'>
      {/* <Navbar /> */}
      <Routes>
        <Route
          path='/'
          element={
            <div className='dark:bg-zinc-200'>
              {/* <Button title='Get Started' /> */}
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
