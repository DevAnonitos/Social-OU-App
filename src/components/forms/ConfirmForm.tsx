import React from 'react';

import { 
  AlertDialog, 
  AlertDialogAction, 
  AlertDialogCancel, 
  AlertDialogContent, 
  AlertDialogDescription, 
  AlertDialogFooter, 
  AlertDialogHeader, 
  AlertDialogTitle, 
  AlertDialogTrigger 
} from '../ui';

import { Button } from '../ui';

const ConfirmForm = () => {
  return (
    <div>
      <AlertDialog>
        <AlertDialogTrigger asChild>
        </AlertDialogTrigger>
        <AlertDialogContent className='border-[1px] border-gray-700'>
          <AlertDialogHeader>
            <AlertDialogTitle className='text-red'>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className='border-[1px] border-gray-700'>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default ConfirmForm;