import React from 'react';
import './globals.css';
import { Route, Routes } from 'react-router-dom';

import AuthLayout from './_auth/AuthLayout';

const App = () => {
  return (
    <>
      <main className='flex h-screen'>
        <Routes>
          {/* Public Route App */}
          <Route element={<AuthLayout />}>
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
