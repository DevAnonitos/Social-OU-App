import * as z from "zod";

// SignUpValidation
export const SignUpValidation = z.object({
  name: z.string()
          .min(3, { message: "Name must be at least 3 characters" })
          .refine((data) => data !== "", { message: "Name is required" }),
  username: z.string()
              .min(3, { message: "Username must be at least 3 characters" })
              .refine((data) => data !== "", { message: "Username is required" }),
  email: z.string()
          .email({ message: "Please enter a valid email address" })
          .refine((data) => data !== "", { message: "Email is required" }),
  password: z.string()
              .min(8, { message: "Password must be at least 8 characters" })
              .refine((data) => data !== "", { message: "Password is required" }),
});

// SignInValidation
export const SignInValidation = z.object({
  email: z.string()
          .email()
          .refine((data) => data !== "", { message: "Email is required" }),
  password: z.string()
              .min(8, { message: "Password must be at least 8 characters" })
              .refine((data) => data !== "", { message: "Password is required" }),
});

// ProfileValidation
export const ProfileValidation = z.object({
  file: z.custom<File[]>(),
  name: z.string()
          .min(3, { message: "Name must be at least 3 characters" })
          .refine((data) => data !== "", { message: "Password is required" }),
  username: z.string()
              .min(3, { message: "Username must be at least 3 characters" })
              .refine((data) => data !== "", { message: "Username is required" }),
  email: z.string().email(),
  bio: z.string(),
});

// PostValidation
export const PostValidation = z.object({
  caption: z.string()
    .min(5, { message: "Minimum 5 characters." })
    .max(2200, { message: "Maximum 2,200 caracters" }),
  file: z.custom<File[]>(),
  location: z.string()
              .min(1, { message: "This field is required" })
              .max(1000, { message: "Maximum 1000 characters." }),
  tags: z.string(),
});

