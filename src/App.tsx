import React from 'react';
import './globals.css';
import { Route, Routes } from 'react-router-dom';

import AuthLayout from './_auth/AuthLayout';
import RootLayout from './_root/RootLayout';

import SigninForm from './_auth/forms/SigninForm';
import SignupForm from './_auth/forms/SignupForm';


import { 
  HomePage, 
  ExplorePage, 
  Saved, 
  CreatePost, 
  ProfilePage, 
  EditPost, 
  PostDetails, 
  AllUsers,
  UpdateProfile,
} from './_root/pages';

const App = () => {
  return (
    <>
      <main className='flex h-screen'>
        <Routes>
          {/* Public Route App */}
          <Route element={<AuthLayout />}>
            {/* To access Auth path */}
            <Route path='sign-in' element={<SigninForm />} />
            <Route path='sign-up' element={<SignupForm />} />
          </Route>

          {/* Private Route App */}
          <Route element={<RootLayout />}>
            {/* To access main path */}
            <Route index element={<HomePage />} />
            <Route path='/explore' element={<ExplorePage />} />
            <Route path='/saved' element={<Saved />} />
            <Route path='/all-users' element={<AllUsers />} />
            <Route path='/create-post' element={<CreatePost />} />
            <Route path='/update-post/:id' element={<EditPost />} />
            <Route path='/post/:id' element={<PostDetails />} />
            <Route path='/profile/:id' element={<ProfilePage />} />
            <Route path='/update-profile/:id' element={<UpdateProfile />} />
          </Route>    
        </Routes>
      </main>
    </>
  );
};

export default App;
