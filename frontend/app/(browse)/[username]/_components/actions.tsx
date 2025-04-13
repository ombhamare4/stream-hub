"use client";

import { Button } from "@/components/ui/button";
import { onFollow, onUnFollow } from "@/actions/follow";
import { useTransition } from "react";
import { Spinner } from "@/components/ui/spinner";
import { toast } from "sonner";
import { onBlock } from "@/actions/block";

interface ActionsProps {
  isFollowing: boolean;
  userId: string;
}

export const Actions = ({ isFollowing, userId }: ActionsProps) => {
  const [isPending, startTransition] = useTransition();
  const onClick = () => {
    startTransition(() => {
      if (isFollowing) {
        onUnFollow(userId)
          .then((data) =>
            toast.success(
              `You are no longer following ${data.following.username}`
            )
          )
          .catch((e) => {
            toast.error("Something went wrong");
            console.error(e);
          });
        return;
      } else {
        onFollow(userId)
          .then((data) =>
            toast.success(`You are now following ${data.following.username}`)
          )
          .catch((e) => {
            toast.error("Something went wrong");
            console.error(e);
          });
      }
    });
  };

  const handleBlock = () => {
    startTransition(() => {
      onBlock(userId)
        .then((data) => toast.success(`You blocked ${data.blocked.username}`))
        .catch((e) => {
          console.error(e);
          toast.error("Something went wrong");
        });
    });
  };

  return (
    <>
      <Button
        disabled={isPending}
        onClick={onClick}
        className="w-24"
        variant="primary"
      >
        {isFollowing ? "Unfollow" : "Follow"}
        {/* {isPending && <Spinner size="small" />} */}
      </Button>

      <Button className="w-24" onClick={handleBlock}>
        Block
      </Button>
    </>
  );
};
