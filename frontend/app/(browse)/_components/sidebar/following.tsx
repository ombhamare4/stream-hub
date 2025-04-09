"use client";

import { User } from "@prisma/client";
import { Follow } from "@prisma/client";
import { UserItem, UserItemSkeleton } from "./user-item";
import { useSidebar } from "@/store/use-sidebar";

interface FollowingProps {
  data: (Follow & { following: User })[];
}
export const Following = ({ data }: FollowingProps) => {
  const { collapsed } = useSidebar((state) => state);

  if (!data.length) {
    return null;
  }
  return (
    <>
      <div>
        {!collapsed && (
          <div className="pl-3 mb-4">
            <p className="text-sm text-muted-foreground">Following</p>
          </div>
        )}
        <ul>
          {data.map((follow) => (
            <UserItem
              key={follow.following.id}
              username={follow.following.username}
              imageUrl={follow.following.imageUrl}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export const FollowingSkeleton = () => {
  return (
    <ul className="px-2">
      {[...Array(3)].map((_, index) => (
        <UserItemSkeleton key={index} />
      ))}
    </ul>
  );
};
