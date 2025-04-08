"use server";

import { revalidatePath } from "next/cache";
import { followUser,unfollowUser } from "@/lib/follow-service";

export const onFollow = async (userId: string) => {
  try {
    const followedUser = await followUser(userId);

    revalidatePath("/");

    if (followedUser) {
      revalidatePath(`/${followedUser.following.username}`);
    }

    return followedUser;
  } catch (e) {
    throw new Error("Internal Sevrver Error");
  }
};

export const onUnFollow = async (userId: string) => {
  try {
    const unfollowedUser = await unfollowUser(userId);

    revalidatePath("/");

    if (unfollowedUser) {
      revalidatePath(`/${unfollowedUser.following.username}`);
    }

    return unfollowedUser;
  } catch (e) {
    throw new Error("Internal Sevrver Error");
  }
};
