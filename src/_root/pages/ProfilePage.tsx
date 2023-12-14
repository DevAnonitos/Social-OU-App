import React from 'react';
import { 
  Route, 
  Routes, 
  Link, 
  Outlet, 
  useParams, 
  useLocation, 
} from 'react-router-dom';

import { Button } from '@/components/ui';

interface StabBlockProps {
  value:  string | number;
  label: string;
}

const ProfilePage = () => {
  return (
    <>
      <div className='profile_container'>
        <div className='profile-inner_container'>
          <img 
            src="/assets/icons/profile-placeholder.svg" 
            alt="creator"
            className='w-28 h-28 lg:w-36 lg:h-36 rounded-full' 
          />
          <div className='flex flex-col flex-1 justify-between md:mt-2'>

          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;