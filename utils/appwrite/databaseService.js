import { Databases, Query } from "appwrite";
import client from "./appwriteClient";

const DATABASE_ID =
  process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID || "<DATABASE_ID>";
const COLLECTION_ID =
  process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID || "<COLLECTION_ID>";

const databases = new Databases(client);

export const queryDocuments = async (queries = []) => {
  try {
    const response = await databases.listDocuments(
      DATABASE_ID,
      COLLECTION_ID,
      queries
    );
    return response;
  } catch (error) {
    console.error("Error querying documents:", error);
    throw error;
  }
};

export { Query };
