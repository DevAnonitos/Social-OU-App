import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { Button } from '../ui';
import { useUserContext } from '@/context/AuthContext';
import { useSignOutAccount } from '@/lib/react-query/queries';

const TopBar = () => {

  const navigate = useNavigate();
  const { user } = useUserContext();
  const { mutate: signOut, isSuccess } = useSignOutAccount();

  useEffect(() => {
    if(isSuccess) navigate(0);
  }, [isSuccess]);

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
              onClick={() => signOut}
            >
              <img 
                src="/assets/icons/logout.svg" 
                alt="logout" 
              />
            </Button>
            <Link to={'/profile/'} className='flex-center gap-3'>
              <img 
                src={"/assets/icons/profile-placeholder.svg"} 
                alt="profile"
                className='h-8 w-8 rounded-full'
              />
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default TopBar;