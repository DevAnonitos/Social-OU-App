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
          </li>
        ))}
      </ul>
    </>
  );
};

export default GridPostList;