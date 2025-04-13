import { db } from "./db";
import { getSelf } from "./auth-service";

export const getblockings = async () => {
  try {
    const self = await getSelf();
    const blocking = await db.block.findMany({
      where: {
        blockerId: self.id,
      },
      include: {
        blocked: true,
      },
    });

    return blocking;
  } catch (e) {
    return [];
  }
};

export const isBlockedByUser = async (userId: string) => {
  try {
    const self = await getSelf();
    if (!self) {
      throw new Error("User not found");
    }

    const otherUser = await db.user.findUnique({
      where: { id: userId },
    });
    if (!otherUser) {
      throw new Error("User not found");
    }

    if (otherUser.id === self.id) {
      return true;
    }

    const existingblocking = await db.block.findUnique({
      where: {
        blockerId_blockedId: {
          blockerId: self.id,
          blockedId: otherUser.id,
        },
      },
    });
    console.log("👺👺👺👺",existingblocking)

    return !!existingblocking;
  } catch (e) {
    console.error("Error checking blocking status:", e);
    return false;
  }
};

export const blockUser = async (userId: string) => {
  const self = await getSelf();

  if (self.id === userId) {
    throw new Error("You cannot block yourself");
  }

  const otherUser = await db.user.findUnique({
    where: { id: userId },
  });

  if (!otherUser) {
    throw new Error("User not found");
  }

  const existingblock = await db.block.findUnique({
    where: {
      blockerId_blockedId: {
        blockerId: self.id,
        blockedId: otherUser.id,
      },
    },
  });

  if (existingblock) {
    throw new Error("Already blocked");
  }

  const block = await db.block.create({
    data: {
      blockerId: self.id,
      blockedId: otherUser.id,
    },
    include: {
      blocker: true,
      blocked: true,
    },
  });

  return block;
};

export const unblockUser = async (userId: string) => {
  const self = await getSelf();

  if (userId === self?.id) {
    throw new Error("You cannot unblock yourself");
  }

  const otherUser = await db.user.findUnique({
    where: { id: userId },
  });

  if (!otherUser) {
    throw new Error("User not found");
  }

  const existingblock = await db.block.findUnique({
    where: {
      blockerId_blockedId: {
        blockerId: self.id,
        blockedId: otherUser.id,
      },
    },
  });

  if (!existingblock) {
    throw new Error("Not Blocked");
  }

  const unblock = await db.block.delete({
    where: {
      id: existingblock.id,
    },
    include: {
      blocked: true,
    },
  });

  return unblock;
};
