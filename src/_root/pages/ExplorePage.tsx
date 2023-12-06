import React, { useState, useEffect } from 'react';
import { useInView } from "react-intersection-observer";

import { Input } from '@/components/ui';
import { Loader, GridPostList } from '@/components/shared';

export type SearchResultProps = {
  isSearchFetching: boolean;
  searchedPosts: any;
};

const SearchResult = ({ isSearchFetching, searchedPosts }: SearchResultProps) => {
  if(isSearchFetching){
    return <Loader />
  } else if(searchedPosts && searchedPosts.document.length > 0) {
    // return GridPostList
    <GridPostList />
  } else {
    return (
      <>
        <p className='text-light-4 mt-10 text-center w-full'>
          No results found
        </p>
      </>
    );
  }
};

const ExplorePage = () => {

  

  return (
    <>
      <div className='explore-container'>
        <div className='explore-inner_container'>
          <h2 className="h3-bold md:h2-bold w-full">
            Search User Posts
          </h2>
          <div className='flex gap-1 px-4 w-full rounded-lg bg-dark-4'>
            <img 
              src="/assets/icons/search.svg" 
              alt="search" 
              width={24} 
              height={24} 
            />
            <Input
              type='text'
              placeholder='Search posts'
              className='explore-search'
            />
          </div>
        </div>

        <div className='flex-between w-full max-w-5xl mt-16 mb-7'>
          <h3 className="body-bold md:h3-bold">
            Popular Today
          </h3>

          <div className='flex-center gap-3 bg-dark-3 rounded-xl px-4 py-2 cursor-pointer'>
            <p className="small-medium md:base-medium text-light-2">
              All
            </p>
            <img
              src="/assets/icons/filter.svg"
              width={20}
              height={20}
              alt="filter"
            />
          </div>
        </div>

        <div className='flex flex-wrap gap-9 w-full max-w-5xl'>

        </div>
      </div>
    </>
  );
};

export default ExplorePage;