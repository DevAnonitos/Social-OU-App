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
import { useUserContext } from '@/context/AuthContext';
import { useGetUserById } from '@/lib/react-query/queries';
import { GridPostList, Loader } from '@/components/shared';

interface StabBlockProps {
  value:  string | number;
  label: string;
};

const StatBlock = ({ value, label }: StabBlockProps) => {
  return (
    <>
      <div className='flex-center gap-2'>
        <p className='small-semibold lg:body-bold text-primary-500'>
          {value}
        </p>
        <p className='small-medium lg:base-medium text-light-2'>
          {label}
        </p>
      </div>
    </>
  );
};

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
            <div className='flex flex-col w-full'>
              <h1 className='text-center xl:text-left h3-bold md:h1-semibold w-full'>
                Nguyen Duc Gia Bao
              </h1>
              <p 
                className='small-regular md:body-medium text-light-3 
                text-center xl:text-left'
              >

              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;