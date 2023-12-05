import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { Button } from '../ui';

const TopBar = () => {

  const navigate = useNavigate();

  return (
    <>
      <nav className='topbar border-b-[1px] border-gray-700'>
        <div className='flex-between py-4 px-5'>
          <Link to="/" className='flex gap-3 items-center'>
            <img
              src="/assets/images/logo.svg"
              alt="logo"
              width={130}
              height={325}
            />
          </Link>

          <div className='flex gap-4'>
            <Button
              variant="ghost"
              className="shad-button_ghost"
              onClick={() => {}}
            >
                <img 
                  src="/assets/icons/logout.svg" 
                  alt="logout" 
                />
            </Button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default TopBar;