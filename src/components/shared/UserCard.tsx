import React from 'react';
import { Link } from 'react-router-dom';
import { Models } from 'appwrite';
import { Button } from '../ui';

type UserCardProps = {
  user: Models.Document;
};

const UserCard = ({ user }: UserCardProps) => {
  return (
    <>
      <Link to={`/profile/`} className='user-card border-gray-700 border-[1px]'>
        <img 
          src={"/assets/icons/profile-placeholder.svg"} 
          alt="creator" 
          className='rounded-full w-14 h-14' 
        />

        <div className='flex-center flex-col gap-1'>
          <p className='base-medium text-light-1 text-center line-clamp-1'>
            Nguyen Duc Gia Bao
          </p>
          <p className='small-regular text-light-1 text-center line-clamp-1'>
            @OuConfession
          </p>
        </div>

        <Button type='button' size="sm" className='shad-button_primary px-5'>
          Follow
        </Button>
      </Link>
    </>
  );
};

export default UserCard;