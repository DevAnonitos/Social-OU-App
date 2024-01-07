import React from 'react';
import * as z from "zod";
import { Models } from 'appwrite';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { zodResolver } from "@hookform/resolvers/zod";


import { 
  Button,
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage,
  Input,
  Textarea,
} from '../ui';
import { useToast } from '../ui';

import { PostValidation } from '@/lib/validation';
import { FileUploader, Loader } from '../shared';

type PostFormProps = {
  post?: Models.Document;
  action: "Create" | "Update";
};

const PostForm = ({ post, action }: PostFormProps) => {

  const navigate = useNavigate();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof PostValidation>>({
    resolver: zodResolver(PostValidation),
    defaultValues: {
      caption: post ? post?.caption : "",
      file: [],
      location: post ? post.location: "",
      tags: post ? post.tags.join(",") : "",
    },
  });

  const handleSubmit = async () => {

  };

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className='flex flex-col gap-9 w-full max-w-5xl'
        >
          <FormField 
            control={form.control}
            name='caption'
            render={({ field }) => (
              <>
                <FormItem>
                  <FormLabel className="shad-form_label">Caption</FormLabel>
                    <FormControl>
                      <Textarea
                        className="shad-textarea custom-scrollbar border-[1px] border-gray-700"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="shad-form_message text-red" />
                </FormItem>
              </>
            )}
          />

          <FormField 
            control={form.control}
            name='file'
            render={({ field }) => (
              <>
                <FormItem>
                  <FormLabel className="shad-form_label">Add Photos</FormLabel>
                    <FormControl>
                      <FileUploader
                        fieldChange={field.onChange}
                        mediaUrl={post?.imageUrl}
                      />
                    </FormControl>
                    <FormMessage className="shad-form_message text-red" />
                </FormItem>
              </>
            )}
          />

          <FormField 
            control={form.control}
            name='location'
            render={({ field }) => (
              <>
                <FormItem>
                  <FormLabel className="shad-form_label">Add Location</FormLabel>
                    <FormControl>
                      <Input 
                        type='text' 
                        className='shad-input' 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage className="shad-form_message text-red" />
                </FormItem>
              </>
            )}
          />

          <FormField 
            control={form.control}
            name='tags'
            render={({ field }) => (
              <>
                <FormItem>
                  <FormLabel className="shad-form_label">
                    Add Tags (separated by comma " , ")
                  </FormLabel>
                    <FormControl>
                      <Input 
                        type='text' 
                        placeholder='Art, Expression, Learn'
                        className='shad-input' 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage className="shad-form_message text-red" />
                </FormItem>
              </>
            )}
          />

          <div className='flex gap-4 items-center justify-end'>
            <Button
              type='button'
              className='shad-button_dark-4 text-red'
            >
              Cancel
            </Button>
            <Button
              type='submit'
              className='shad-button_primary whitespace-nowrap'
            >
              {action} Post
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
};

export default PostForm;