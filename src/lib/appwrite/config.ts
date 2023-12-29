import { 
  Client, 
  Account, 
  Databases, 
  Storage, 
  Avatars,
} from "appwrite";

export const appwriteConfig = {
  projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
  url: import.meta.env.VITE_APPWRITE_URL,
  databaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
  userCollectionId: import.meta.env.VITE_APPWRITE_USER_COLLECTION_ID,
};

export const client = new Client();

client.setEndpoint(appwriteConfig.url);
client.setProject(appwriteConfig.projectId);

client.subscribe('files', response => {
  if(response.events.includes('buckets.*.files.*.create')) {
      // Log when a new file is uploaded
      console.log(response.payload);
  }
});

// export config func
export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);