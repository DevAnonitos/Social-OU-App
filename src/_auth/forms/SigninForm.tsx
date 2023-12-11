import React from 'react';
import * as z from "zod";
import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, Navigate, useNavigate } from 'react-router-dom';

import { 
  Form, 
  FormControl, 
  FormField, 
  FormDescription, 
  FormItem, 
  FormLabel, 
  FormMessage, 
  Input,
  Button,
  useToast,
} from '@/components/ui';
import { Loader } from '@/components/shared';

import { SignInValidation } from '@/lib/validation';

const SigninForm = () => {

  const { toast } = useToast();
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof SignInValidation>>({
    resolver: zodResolver(SignInValidation),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleSignIn = async (user: z.infer<typeof SignInValidation>) => {
    
  };  

  return (
    <>
      <Form {...form}>
        <div className='sm:w-420 flex-center flex-col flex'>
          <img 
            src="/assets/images/logo.svg" 
            alt="logo" 
          />
          <h2 className='h3-gold md:h2-bold pt-5 sm:pt-12'>
            Log in to your account
          </h2>
          <p className='text-light-3 small-medium md:base-regular mt-2'>
            Welcome back! Please enter your details.
          </p>
          <form 
            className='flex flex-col gap-5 w-full mt-4'
            onSubmit={form.handleSubmit(handleSignIn)}
          >
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <>
                  <FormItem>
                    <FormLabel className="shad-form_label">
                      Email
                    </FormLabel>
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
                    <FormLabel className="shad-form_label">
                      Password
                    </FormLabel>
                    <FormControl>
                      <Input type="text" className="shad-input" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                </>
              )}
            />

            <Button type='submit' className='shad-button_primary'>
              LogIn
            </Button>

            <p className="text-small-regular text-light-2 text-center mt-2">
              Don&apos;t have an account?
              <Link
                to="/sign-up"
                className="text-primary-500 text-small-semibold ml-1"
              >
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </Form>
    </>
  );
};

export default SigninForm;