import React, { useCallback, useState } from 'react';
import { FileWithPath, useDropzone } from "react-dropzone";

import { Button } from '../ui';
import { convertFileToUrl } from '@/lib/utils';

type FileUploaderProps = {
  fieldChange: (files: File[]) => void;
  mediaUrl: string;
};

const FileUploader = ({ fieldChange, mediaUrl }: FileUploaderProps) => {

  const [file, setFile] = useState<File[]>([]);
  const [fileUrl, setFileUrl] = useState<string>(mediaUrl);

  const onDrop = useCallback(
    (acceptedFiles: FileWithPath[]) => {
      setFile(acceptedFiles);
      fieldChange(acceptedFiles);
      setFileUrl(convertFileToUrl(acceptedFiles[0]));
    },
    [file]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".png", ".jpeg", ".jpg"],
    },
  });

  return (
    <>
      <div 
        {...getRootProps()}
        className='flex flex-center flex-col bg-dark-3 rounded-xl cursor-pointer'
      >
        <input 
          {...getInputProps()} 
          className="cursor-pointer" 
        />
      </div>
    </>
  );
};

export default FileUploader;