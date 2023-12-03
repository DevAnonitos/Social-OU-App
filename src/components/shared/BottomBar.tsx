import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { bottombarLinks } from '@/constants';

const BottomBar = () => {
  const { pathname } = useLocation();

  return (
    <>
      <section className='bottom-bar border-l-[1px] border-t-[1px] border-gray-700'>
        {bottombarLinks.map((link) => {

          const isActive = pathname === link.route;
          
          return (
            <React.Fragment key={`bottombar-${link.label}`}>
              <Link
                to={link.route}
                className={`${
                  isActive && 'rounded-full bg-primary-500'
                } flex-center flex-col gap-1 p-2 transition`}
              >
                <img
                  src={link.imgURL}
                  alt={link.label}
                  width={16}
                  height={16}
                  className={`${isActive && 'invert-white'}`}
                />
              </Link>
            </React.Fragment>
          );
        })}
      </section>
    </>
  );
};

export default BottomBar;