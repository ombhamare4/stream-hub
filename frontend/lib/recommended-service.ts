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
    console.log(userId);
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
              not: userId,
            },
          },
          {
            followedBy: {
              none: {
                followerId: userId,
              },
            },
          },
          {
            blockings:{
              none:{
                blockedId:userId
              }
            }
          }
        ],
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  } else {
    users = await db.user.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
  }

  return users;
};
