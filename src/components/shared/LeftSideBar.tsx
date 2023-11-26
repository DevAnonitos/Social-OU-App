import React from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';

import { INavLink } from '@/types';
import { Loader } from '.';


const LeftSideBar = () => {
  return (
    <>
      <nav className='leftsidebar border-r-[1px] border-gray-700'>
        <div className='flex flex-col gap-11'>
          <Link to="/" className='flex gap-3 items-center'>
            <img
              src="/vite.svg"
              alt="logo"
              width={55}
              height={36}
            />
            OUSA
          </Link>
        </div>
      </nav>
    </>
  );
};

export default LeftSideBar;