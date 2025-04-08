import { db } from "@/lib/db";
export const getUserByUsername = async (username: string) => {
  try {
    const user = await db.user.findUnique({
      where: { username },
    });
    return user;
  } catch (e) {
    console.error("Error fetching user by username:", e);
    return false
  }
};
