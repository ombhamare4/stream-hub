import { db } from "@/lib/db";

import { getSelf } from "@/lib/auth-service";

export const getRecommended = async () => {
  //await new Promise((resolve) => setTimeout(resolve,5000));
  let userId;

  try {
    const user = await getSelf();
    userId = user.id;
  } catch (e) {
    userId = null;
  }

  let users = [];

  if (userId) {
    // users = await db.user.findMany({
    //   where: {
    //     AND: [
    //       {
    //         NOT: {
    //           id: userId,
    //         },
    //       },
    //       {
    //         NOT: {
    //           followedBy: {
    //             some: {
    //               followerId: userId,
    //             },
    //           },
    //         },
    //       },
    //     ],
    //   },
    //   orderBy: {
    //     createdAt: "desc",
    //   },
    // });
    users = await db.user.findMany({
      where: {
        AND: [
          {
            id: {
              not: userId, // Exclude self
            },
          },
          {
            followedBy: {
              none: {
                followingId: userId, // Exclude users already followed by current user
              },
            },
          },
          {
            blockedBy: {
              none: {
                blockerId: userId, // Exclude users the current user has blocked
              },
            },
          },
        ],
      },
      include:{
        stream:true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  } else {
    users = await db.user.findMany({
      include:{
        stream:true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  }

  return users;
};
