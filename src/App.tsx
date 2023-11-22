import React from 'react';
import './globals.css';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <>
      <main className='flex h-screen'>
        <Routes>
          {/* Public Route App */}
          <Route>
            main
          </Route>

          {/* Private Route App */}
          <Route>
            Main
          </Route>    
        </Routes>
      </main>
    </>
  );
};

export default App;
