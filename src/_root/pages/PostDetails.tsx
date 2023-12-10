import React from 'react';

import { Button } from '@/components/ui';

import { useParams, Link, useNavigate } from 'react-router-dom';

import { 
  Loader, 
  GridPostList, 
  PostStats 
} from '@/components/shared';

import { multiFormatDateString } from '@/lib/utils';

let isLoading: string;

const PostDetails = () => {

  const navigate = useNavigate();
  const { id } = useParams();

  const handleDeletePost = () => {

  };

  return (
    <>
      <div className='post_details-container'>
        <div className='hidden md:flex max-w-5xl w-full'>
          <Button variant="ghost" className='shad-button-ghost'>
            <img
              src={"/assets/icons/back.svg"}
              alt="back"
              width={24}
              height={24}
            />
            <p className='small-medium lg:base-medium'>Back</p>
          </Button>
        </div>

        {isLoading ? (
          <>
            <Loader />
          </>
        ): (
          <>
            <div className='post_details-card'>
              <img 
                src="/assets/icons/people.svg" 
                alt="creator"
                className='post_details-img' 
              />

              <div className='post_details-info'>
                <div className='flex-between w-full'>
                  <Link to={`/profile/`} className='flex items-center gap-3'>
                    <img 
                      src="/assets/icons/profile-placeholder.svg" 
                      alt="creator" 
                      className='w-8 h-8 lg:w-12 rounded-full' 
                    />

                    <div className='flex gap-1 flex-col'>
                      <p className='base-medium lg:body-bold text-light-1'>
                        Nguyen Duc Gia Bao
                        {/* {Name} */}
                      </p>

                      <div className='flex-center gap-2 text-light-3'>
                        <p className='subtle-semibold lg:small-regular'>
                          {multiFormatDateString()}
                        </p>
                        .
                        <p className='subtle-semibold lg:small-regular'>

                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default PostDetails;