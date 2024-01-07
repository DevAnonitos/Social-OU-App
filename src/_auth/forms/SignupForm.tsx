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
  Input,
  Button,
  useToast,
} from '@/components/ui';

import { Loader } from '@/components/shared';

import { SignUpValidation } from '@/lib/validation';

import { useSignInAccount, useCreateUserAccount } from '@/lib/react-query/queries';
import { useUserContext } from '@/context/AuthContext';

const SignupForm = () => {

  const { toast } = useToast();
  const navigate = useNavigate();
  const { checkAuthUser, isLoading: isUserLoading } = useUserContext();

  const form = useForm<z.infer<typeof SignUpValidation>>({
    resolver: zodResolver(SignUpValidation),
    defaultValues: {
      name: "",
      username: "",
      email: "",
      password: "",
    },
  });

  // Queries
  const { 
    mutateAsync: createUserAccount, 
    isPending: isCreatingAccount, 
  }  = useCreateUserAccount();
  const { 
    mutateAsync: signInAccount, 
    isPending: isSigningInUser, 
  } = useSignInAccount();

  const handleSignUp = async (user: z.infer<typeof SignUpValidation>) => {
    try {
      const newUser = await createUserAccount(user);

      if(!newUser) {
        toast({ title: "SignUpFail.Please SignUp again!" });

        return;
      }

      const session = await signInAccount({
        email: user.email,
        password: user.password,
      });

      if(!session) {
        toast({ title: "Something went wrong. Please login your new account" });

        navigate("/sign-in");

        return;
      }

      const isLoggedIn = await checkAuthUser();

      if(isLoggedIn) {
        form.reset();

        navigate("/");
      } else {
        toast({ title: "Login Fail. Please try again" });

        return;
      }
    } catch (error: any) {
      console.log({error});
    }
  };

  return (
    <>
      <Form {...form}>
        <div className='sm:w-420 flex-center flex-col'>
          <img src="/assets/images/logo.svg" alt="logo" />

          <h2 className="h3-bold md:h2-bold pt-5 sm:pt-2">
            Create a new account
          </h2>
          <p className="text-light-3 small-medium md:base-regular">
            To use hub, Please enter your details
          </p>

          <form 
            className='flex flex-col gap-5 w-full mt-4' 
            onSubmit={form.handleSubmit(handleSignUp)}
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
                    <FormMessage className='text-red' />
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
                      <Input type="password" className="shad-input" {...field} />
                    </FormControl>
                    <FormMessage className='text-red' />
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
                    <FormMessage className='text-red' />
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
                    <FormMessage className='text-red' />
                  </FormItem>
                </>
              )}
            />

            <Button type='submit' className='shad-button_primary'>
              {isCreatingAccount || isSigningInUser || isUserLoading ? (
                <>
                  <Loader /> Loading...
                </>
              ): (
                <>
                  Sign Up
                </>
              )}
            </Button>

            <p className='flex flex-col justify-center items-center text-small-regular text-light-2 text-center mt-1'>
              <Link
                to="/sign-in"
                className="text-primary-500 text-small-semibold ml-1 bg-primary-500 p-2 mb-2 rounded-xl"
              >
                <img 
                  src="/assets/icons/arrow-right.svg" 
                  alt="Login" 
                  className='w-12 h-12 object-contain rotate-180' 
                />
              </Link>
              Are you already have an account?
            </p>
          </form>
        </div>
      </Form>
    </>
  );
};

export default SignupForm;