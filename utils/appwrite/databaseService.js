import { Databases, Query } from "appwrite";
import client from "./appwriteClient";

const DATABASE_ID =
  process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID || "<DATABASE_ID>";
const COLLECTION_ID =
  process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID || "<COLLECTION_ID>";

const databases = new Databases(client);

/**
 * Get all documents from a collection.
 * @returns {Promise<Array>} A promise that resolves to an array of documents.
 */
export const getAllDocuments = async () => {
  try {
    const response = await databases.listDocuments(DATABASE_ID, COLLECTION_ID);
    return response.documents; // Access the documents property from the response
  } catch (error) {
    console.error("Error fetching all documents:", error);
    throw error;
  }
};

/**
 * Query documents from a collection with specific queries.
 * @param {Array} queries - An array of queries to filter documents.
 * @returns {Promise<Array>} A promise that resolves to an array of documents.
 */
export const queryDocuments = async (queries = []) => {
  try {
    const response = await databases.listDocuments(
      DATABASE_ID,
      COLLECTION_ID,
      queries
    );
    return response.documents; // Access the documents property from the response
  } catch (error) {
    console.error("Error querying documents:", error);
    throw error;
  }
};

export { Query };
