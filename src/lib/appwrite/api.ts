import { ID, Query } from "appwrite";

import { 
  INewUser, 
  IUpdatePost, 
  INewPost, 
  IUpdateUser 
} from "@/types";

import { 
  appwriteConfig, 
  account, 
  database, 
  storage, 
  avatars 
} from "./config";

// Auth

export async function createUserAccount(user: INewUser) {
  try {
    const newAccount = await account.create(
      ID.unique(),
      user.email,
      user.password,
      user.name,
    );

    if(!newAccount) throw Error;

    const avatarUrl = avatars.getInitials(user.name);

    return newAccount;
  } catch (error: any) {
    console.log(error);
    return error;
  }
};