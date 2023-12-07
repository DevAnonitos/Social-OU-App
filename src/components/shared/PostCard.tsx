import React from 'react';

import { Link } from 'react-router-dom';
import { PostStats } from '.';

type PostCardProps = {

};

const PostCard = () => {
  return (
    <>
      <div className='post-card'>
        <div className='flex-between'>
          <div className='flex items-center gap-3'>
            <Link to={`/profile/`}>
              <img 
                src="/assets/icons/profile-placeholder.svg" 
                alt="Logo" 
                className='w-12 lg:h-12 rounded-full' 
              />
            </Link>

            <div className='flex flex-col'>
              <p className='base-medium lg:body-bold text-light-1'>
                {/* Name */}
              </p>

              <div className='flex-center gap-2 text-light-3'>
                {/* Create at */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostCard;