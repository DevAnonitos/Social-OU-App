import React from 'react';
import { Link } from 'react-router-dom';
import { PostStats } from '.';
import { Models } from 'appwrite';

type GridPostListProps = {
  post: Models.Document[];
  showUser?: boolean;
  showStats:  boolean;
};

const GridPostList = ({post, showUser = true, showStats = true }: GridPostListProps) => {
  return (
    <>
      <ul className='grid-container'>
        {post.map((post) => (
          <li key={post.$id} className='relative min-w-80 h-80'>
            <Link to={`/posts/${post.$id}`} className='grid-post_link'>
              <img 
                src={post.imageUrl}
                alt="Post" 
                className='h-full w-full object-cover'
              />
            </Link>

            <div className='grid-post_user'>
              {showUser && (
                <>
                  <div className='flex items-center justify-start gap-2 flex-1'>
                      <img
                        src={
                          post.creator.imageUrl ||
                          "/assets/icons/profile-placeholder.svg"
                        }
                        alt="creator"
                        className="w-8 h-8 rounded-full"
                      />
                      <p className="line-clamp-1">
                        {post.creator.name}
                      </p>
                  </div>
                </>
              )}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default GridPostList;