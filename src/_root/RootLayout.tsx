import React from 'react';

import { Outlet, useLocation } from 'react-router-dom';
import { 
  TopBar, 
  BottomBar, 
  LeftSideBar 
} from '@/components/shared';

const RootLayout = () => {

  return (
    <>
      <div className='w-full md:flex'>
        <TopBar />
        <LeftSideBar />

        <section className='flex flex-1 h-full'>
          <Outlet />
        </section>

        <BottomBar />
      </div>
    </>
  );
};

export default RootLayout;