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

// func create userAccount
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

// func saveUserToDb
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

// func getAccount from DB
export async function getAccount() {
  try {
    const currentAccount = await account.get();

    return currentAccount;
  } catch (error: any) {
    console.log(error);
  }
};

export async function getCurrentUser() {
  try {
    // getAccount data api

    const currentAccount = await getAccount();

    if(!currentAccount) throw Error;

    const currentUser =  await database.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.userCollectionId,
      [Query.equal("accountId", currentAccount.$id)],
    );

    if(!currentUser) throw Error;

    return currentUser.documents[0];
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
};