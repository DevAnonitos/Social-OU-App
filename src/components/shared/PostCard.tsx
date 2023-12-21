import React from 'react';
import { Models } from 'appwrite';
import { Link } from 'react-router-dom';
import { PostStats } from '.';

type PostCardProps = {
  post: Models.Document[];
};

const PostCard = ({ post }: PostCardProps) => {

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
                <p className='subtle-semibold lg:small-regular'>
                  {/* {} */}
                </p>
                .
                <p className='subtle-semibold lg:small-regular'>
                  {/* Location */}
                </p>
              </div>
            </div>
          </div>

          <Link to={`/update-post/`}>
            <img 
              src="/assets/icon/edit.svg" 
              alt="edit"
              width={20}
              height={20}
            />
          </Link>
        </div>

        <Link to={`/post/`}>
          <div className='small-medium lg:base-medium py-5'>
            <p className=''>
              {/* Caption */}
            </p>
            <ul className='flex gap-1 mt-2'>
              {/* Loop infinite */}
              {}
            </ul>

          </div>

          <img 
            src="/assets/icons/profile-placeholder.svg" 
            alt="Placeholder" 
            className='post-card_img'
          />
        </Link>

        
      </div>
    </>
  );
};

export default PostCard;