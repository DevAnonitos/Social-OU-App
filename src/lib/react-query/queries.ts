import { 
  useQuery, 
  useMutation, 
  useQueryClient, 
  useInfiniteQuery, 
} from "@tanstack/react-query";

import { QUERY_KEYS } from "./queryKeys";

// Import Type
import { 
  INewPost, 
  INewUser, 
  IUpdatePost, 
  IUpdateUser 
} from "@/types";

import { 
  getCurrentUser,
  signInAccount,
  signOutAccount,
} from "../appwrite/api";

// SignInAccount
export const useSignInAccount = () => {
  return useMutation({
    mutationFn: (user: { 
      email: string, 
      password: string 
    }) => signInAccount(user),
  });
};

// SignOutAccount
export const useSignOutAccount = () => {
  return useMutation({
    mutationFn: signOutAccount,
  });
};

// GetCurrentUser

export const useGetCurrentUser = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.GET_CURRENT_USER],
    queryFn: () => getCurrentUser,
  });
};

