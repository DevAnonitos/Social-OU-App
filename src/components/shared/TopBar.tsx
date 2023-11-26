import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';


const TopBar = () => {
  return (
    <>
      <nav className='topbar'>
        <div className='flex-between py-4 px-5'>
          <Link to="/" className='flex gap-3 items-center'>

          </Link>

          <div className='flex gap-4'>
            
          </div>
        </div>
      </nav>
    </>
  );
};

export default TopBar;