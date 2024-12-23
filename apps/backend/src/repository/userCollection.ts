import { db } from "../config/firebaseConfig";
import { User } from "@repo/schema";

const collectionNames= {
  USERS: "users",
};

export const updateUser = async (
  id: string,
  data: Partial<User>,
): Promise<void> => {
  await db.collection(collectionNames.USERS).doc(id).update(data);
};

export const fetchUser = async (id: string): Promise<User | null> => {
  const doc = await db.collection(collectionNames.USERS).doc(id).get();
  return doc.exists ? (doc.data() as User) : null;
};
