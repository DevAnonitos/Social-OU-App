import React from 'react';
import { useToast } from '@/components/ui';
import { UserCard, Loader } from '@/components/shared';
import { useGetUsers } from '@/lib/react-query/queries';

const AllUsers = () => {

  const { toast } = useToast();

  const { data: creators, isLoading, isError: isErrorCreators } = useGetUsers();

  if(isErrorCreators) {
    toast({
      title: "Something went wrong.",
    });

    return;
  }
  
  return (
    <>
      <div className='common-container'>
        <div className='user-container'>
          <h2 className="h3-bold md:h2-bold text-left w-full">
            All Users
          </h2>
          {isLoading && !creators ? (
            <>
              <Loader />
            </>
          ): (
            <>
              <ul className='common-container'>

              </ul>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default AllUsers;