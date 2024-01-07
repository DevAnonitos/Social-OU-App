import React from 'react';
import * as z from "zod";
import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from 'react-router-dom';

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

import { SignInValidation } from '@/lib/validation';
import { useUserContext } from '@/context/AuthContext';
import { useSignInAccount } from '@/lib/react-query/queries';

const SigninForm = () => {

  const { toast } = useToast();
  const navigate = useNavigate();
  const { checkAuthUser, isLoading: isUserLoading } = useUserContext();

  const { mutateAsync: signInAccount, isPending: isLoading } =  useSignInAccount();

  const form = useForm<z.infer<typeof SignInValidation>>({
    resolver: zodResolver(SignInValidation),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleSignIn = async (user: z.infer<typeof SignInValidation>) => {
    const session = await signInAccount(user);

    if(!session) {
      toast({ title: "Login Failed. Please try again." });

      return;
    }

    const isLoggedIn = await checkAuthUser();

    if(isLoggedIn) {
      form.reset();

      navigate("/");
    } else {
      toast({ title: "Login Failed. Please try again" });

      return;
    }
  };  

  return (
    <>
      <Form {...form}>
        <div className='sm:w-420 flex-center flex-col flex'>
          <img 
            src="/assets/images/logo.svg" 
            alt="logo" 
          />
          <h2 className='h3-gold md:h2-bold pt-5 sm:pt-4'>
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
                    <FormLabel className="shad-form_label">
                      Password
                    </FormLabel>
                    <FormControl>
                      <Input type="text" className="shad-input" {...field} />
                    </FormControl>
                    <FormMessage className='text-red' />
                  </FormItem>
                </>
              )}
            />

            <Button type='submit' className='shad-button_primary'>
              {isLoading ||  isUserLoading ? (
                <>
                  <div className='flex-center gap-2'>
                    <Loader /> Loading...
                  </div>
                </>
              ): (
                <>
                  Log in
                </>
              )}
            </Button>

            <p className="flex flex-col justify-center items-center text-small-regular text-light-2 text-center mt-2">
              <Link
                to="/sign-up"
                className="text-primary-500 text-small-semibold ml-1 bg-primary-500 p-2 mb-2 rounded-xl"
              >
                <img 
                  src="/assets/icons/arrow-right.svg" 
                  alt="SignUp" 
                  className='w-12 h-12 object-contain' 
                />
              </Link>
              Don&apos;t have an account?
            </p>
          </form>
        </div>
      </Form>
    </>
  );
};

export default SigninForm;