import React from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from '@/components/shared';

import PostForm from '@/components/forms/PostForm';

const EditPost = () => {

  const { id } = useParams();


  return (
    <>
      <div className='flex flex-1'>
        <div className='common-container'>
          <div className='flex-start gap-3 justify-start w-full max-w-5xl'>
            <img
              src="/assets/icons/edit.svg"
              width={36}
              height={36}
              alt="edit"
              className="invert-white"
            />
            <h2 className="h3-bold md:h2-bold text-left w-full">
              Edit Post
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditPost;