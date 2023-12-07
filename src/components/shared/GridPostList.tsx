import React from 'react';
import { Link } from 'react-router-dom';

import { PostStats } from '.';

type GridPostListProps = {
  post: Document[];
  showUser?: boolean;
  showStats:  boolean;
};

const GridPostList = ({post, showUser = true, showStats = true }: GridPostListProps) => {
  return (
    <>
      <ul className='grid-container'>
        {post.map((post) => (
          <li className='relative min-w-80 h-80'>
            
          </li>
        ))}
      </ul>
    </>
  );
};

export default GridPostList;