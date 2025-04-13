"user client";
import { getUserByUsername } from "@/lib/user-service";
import { isFollowingUser } from "@/lib/follow-service";
import { notFound } from "next/navigation";
import { Actions } from "./_components/actions";
import { isBlockedByUser } from "@/lib/block-service";
interface UserPageProp {
  params: {
    username: string;
  };
}

const UserPage = async ({ params }: UserPageProp) => {
  const user = await getUserByUsername(params.username);
  if (!user) {
    notFound();
  }

  const isFollowing = await isFollowingUser(user.id);
  const isBlocked = await isBlockedByUser(user.id);

  if (isBlocked) {
    notFound();
  }
  return (
    <>
      <div className="flex flex-col gap-y-4">
        <p className="text-red-500">User: {user.username}</p>
        <p>is Following : {`${isFollowing}`}</p>
        <p>is block by this user: {`${isBlocked}`}</p>
        <Actions isFollowing={isFollowing} userId={user.id} />
      </div>
    </>
  );
};

export default UserPage;
