import React from 'react';
import * as z from "zod";
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { zodResolver } from "@hookform/resolvers/zod";

import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage, 
  FormDescription,
  Input,
  Button,
  useToast,
} from '@/components/ui';

import { SignUpValidation } from '@/lib/validation';

import { createUserAccount } from '@/lib/appwrite/api';

const SignupForm = () => {

  const { toast } = useToast();
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof SignUpValidation>>({
    resolver: zodResolver(SignUpValidation),
    defaultValues: {
      name: "",
      username: "",
      email: "",
      password: "",
    },
  });

  async function onSubmit (values: z.infer<typeof SignUpValidation>) {
    const newUser =  await createUserAccount(values);

    console.log(newUser);
  }

  return (
    <>
      <Form {...form}>
        <div className='sm:w-420 flex-center flex-col'>
          <img src="/assets/images/logo.svg" alt="logo" />

          <h2 className="h3-bold md:h2-bold pt-5 sm:pt-12">
            Create a new account
          </h2>
          <p className="text-light-3 small-medium md:base-regular mt-2">
            To use hub, Please enter your details
          </p>

          <form 
            className='flex flex-col gap-5 w-full mt-4' 
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <FormField
              control={form.control}
              name='name'
              render={({ field }) => (
                <>
                  <FormItem>
                    <FormLabel className="shad-form_label">Name</FormLabel>
                    <FormControl>
                      <Input type="text" className="shad-input" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                </>
              )}
            />

            <FormField
              control={form.control}
              name='username'
              render={({ field }) => (
                <>
                  <FormItem>
                    <FormLabel className="shad-form_label">UserName</FormLabel>
                    <FormControl>
                      <Input type="text" className="shad-input" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                </>
              )}
            />

            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <>
                  <FormItem>
                    <FormLabel className="shad-form_label">Email</FormLabel>
                    <FormControl>
                      <Input type="text" className="shad-input" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                </>
              )}
            />

            <FormField
              control={form.control}
              name='password'
              render={({ field }) => (
                <>
                  <FormItem>
                    <FormLabel className="shad-form_label">Password</FormLabel>
                    <FormControl>
                      <Input type="text" className="shad-input" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                </>
              )}
            />

            <Button type='submit' className='shad-button_primary'>
              Sign Up
            </Button>

            <p className='text-small-regular text-light-2 text-center mt-2'>
              Are you already have an account?
              <Link
                to="/sign-in"
                className="text-primary-500 text-small-semibold ml-1"
              >
                Log in
              </Link>
            </p>
          </form>
        </div>
      </Form>
    </>
  );
};

export default SignupForm;