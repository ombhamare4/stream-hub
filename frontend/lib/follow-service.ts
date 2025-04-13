import { db } from "./db";
import { getSelf } from "./auth-service";

export const getFollowings = async () => {
  try {
    const self = await getSelf();
    const following = await db.follow.findMany({
      where: {
        followerId: self.id,
        following:{
          blockings:{
            none:{
              blockedId:self.id
            }
          }
        }
      },
      include: {
        following: true,
      },
    });

    return following;
  } catch (e) {
    return [];
  }
};

export const isFollowingUser = async (userId: string) => {
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

    const following = await db.follow.findFirst({
      where: {
        followerId: self.id,
        followingId: otherUser.id,
      },
    });

    return !!following;
  } catch (e) {
    console.error("Error checking following status:", e);
    return false;
  }
};

export const followUser = async (userId: string) => {
  const self = await getSelf();

  const otherUser = await db.user.findUnique({
    where: { id: userId },
  });

  if (!otherUser) {
    throw new Error("User not found");
  }

  if (otherUser.id === self?.id) {
    throw new Error("You cannot follow yourself");
  }

  const existingFollow = await db.follow.findFirst({
    where: {
      followerId: self.id,
      followingId: otherUser.id,
    },
  });

  if (existingFollow) {
    throw new Error("Already following this user");
  }

  const follow = await db.follow.create({
    data: {
      followerId: self.id,
      followingId: otherUser.id,
    },
    include: {
      follower: true,
      following: true,
    },
  });

  return follow;
};

export const unfollowUser = async (userId: string) => {
  const self = await getSelf();

  const otherUser = await db.user.findUnique({
    where: { id: userId },
  });

  if (!otherUser) {
    throw new Error("User not found");
  }

  if (otherUser.id === self?.id) {
    throw new Error("You cannot unfollow yourself");
  }

  const existingFollow = await db.follow.findFirst({
    where: {
      followerId: self.id,
      followingId: otherUser.id,
    },
  });

  if (!existingFollow) {
    throw new Error("You not following this user");
  }

  const unfollow = await db.follow.delete({
    where: {
      id: existingFollow.id,
    },
    include: {
      following: true,
    },
  });

  return unfollow;
};
