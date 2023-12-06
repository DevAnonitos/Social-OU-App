import React from 'react';

import { GridPostList, Loader } from '@/components/shared';


const Saved = () => {
  return (
    <>
      <div className='saved-container'>
        <div className='flex gap-2 w-full max-w-5xl'>
          <img
            src="/assets/icons/save.svg"
            width={36}
            height={36}
            alt="edit"
            className="invert-white"
          />
          <h2 className="h3-bold md:h2-bold text-left w-full">
            Saved Posts
          </h2>
        </div>
      </div>
    </>
  );
};

export default Saved;