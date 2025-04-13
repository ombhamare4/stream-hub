"use server";

import { revalidatePath } from "next/cache";
import { blockUser, unblockUser } from "@/lib/block-service";

export const onBlock = async (userId: string) => {
  try {
    const blockedUser = await blockUser(userId);

    revalidatePath("/");

    if (blockedUser) {
      revalidatePath(`/${blockedUser.blocked.username}`);
    }

    return blockedUser;
  } catch (e: any) {
    throw new Error(e);
  }
};

export const onUnBlock = async (userId: string) => {
  try {
    const unBlockedUser = await unblockUser(userId);

    revalidatePath("/");

    if (unBlockedUser) {
      revalidatePath(`/${unBlockedUser.blocked.username}`);
    }

    return unBlockedUser;
  } catch (e) {
    throw new Error("Internal Sevrver Error");
  }
};
