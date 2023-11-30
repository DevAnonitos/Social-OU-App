import React from 'react';
import * as z from "zod";
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { 
  Form, 
  FormControl, 
  FormDescription, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from '../ui';
import { useToast } from '../ui';

import { FileUploader, Loader } from '../shared';


const PostForm = () => {

  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async () => {

  };

  return (
    <div>PostForm</div>
  );
};

export default PostForm;