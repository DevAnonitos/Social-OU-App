import React from 'react';
import './globals.css';
import { Route, Routes } from 'react-router-dom';

import AuthLayout from './_auth/AuthLayout';
import RootLayout from './_root/RootLayout';

const App = () => {
  return (
    <>
      <main className='flex h-screen'>
        <Routes>
          {/* Public Route App */}
          <Route element={<AuthLayout />}>
            {/* To access Auth path */}
          </Route>

          {/* Private Route App */}
          <Route element={<AuthLayout />}>
            {/* To access main path */}
          </Route>    
        </Routes>
      </main>
    </>
  );
};

export default App;
