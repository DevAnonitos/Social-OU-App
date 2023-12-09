import React from 'react';
import { Loader, PostCard, UserCard } from '@/components/shared';

const HomePage = () => {
  return (
    <>
      <div className='flex flex-1'>
        <div className='home-container'>
          <div className='home-posts'>
            <h2 className='h3-bold md:h2-bold-left w-full'>
              Home Feed
            </h2>
          </div>
        </div>

        <div className='home-creators border-l-[1px] border-gray-700'>
          <h3 className='h3-bold text-light-1'>
            Top Creators✨
          </h3>
          <UserCard />
        </div>
      </div>
    </>
  );
};

export default HomePage;