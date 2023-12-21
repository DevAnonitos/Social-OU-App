import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Models } from 'appwrite';
import { checkIsLiked } from '@/lib/utils';

type PostStateProps = {
  post: Models.Document[];
  userId: string;
};

const PostStats = ({ userId }: PostStateProps) => {

  const location = useLocation();
  const [likes, setLikes] = useState<string>();
  const [isSaved, setIsSaved] = useState(false);

  const containerStyle = location.pathname.startsWith("/profile") ? "w-full" : "";

  return (
    <>
      <div className={`flex justify-between items-center z-20 ${containerStyle}`}>
        <div className='flex gap-2 mr-5'>
          <img 
            src={`/assets/icons/like.svg`} 
            alt="Like" 
            width={20} 
            height={20} 
            className='cursor-pointer' 
          />
          <p className='small-medium lg:base-medium'>
            {/* Length like  */}
          </p>
        </div>

        <div className='flex gap-2'>
          <img 
            src="/assets/icons/saved.svg" 
            alt="share"
            width={20}
            height={20}
            className='cursor-pointer'
          />
        </div>
      </div>
    </>
  );
};

export default PostStats;