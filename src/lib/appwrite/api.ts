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

export async function saveUserToDb(user: {
  accountId: string;
  email: string;
  name: string;
  imageUrl: URL;
  username?: string;
}) {
  try {
    
  } catch (error: any) {
    console.log(error);
  }
};

export async function getAccount() {
  try {
    const currentAccount = await account.get();

    return currentAccount;
  } catch (error: any) {
    console.log(error);
  }
};

export async function signOutAccount() {
  try {
    const session = await account.deleteSession("current");

    return session;
  } catch (error: any) {
    console.log(error);
  }
};

export async function signInAccount(user: {
  email: string;
  password: string;
}) {
  try {
    const session = await account.createEmailSession(user.email, user.password);

    return session;
  } catch (error: any) {
    console.log(error);
  }
}