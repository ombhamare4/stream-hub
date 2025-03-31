import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LiveBadge } from "./live-badge";
import { useSidebar } from "@/store/use-sidebar";
const avatarVariants = cva("", {
  variants: {
    size: {
      default: "h-8 w-8",
      lg: "h-14 w-14",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

interface UserAvatarProps extends VariantProps<typeof avatarVariants> {
  username: string;
  imageUrl: string;
  isLive?: boolean;
  showBadge?: boolean;
}

export const UserAvatar = ({
  username,
  imageUrl,
  isLive,
  showBadge,
  size,
}: UserAvatarProps) => {
  const  {collapsed}= useSidebar((state) => state);
  const canShowBadge = showBadge && isLive && collapsed;
  return (
    <div className="relative">
      <Avatar
        className={cn(
          "border-2  rounded-full",
          isLive ? "ring-2  ring-rose-500   border-background" : "",
          avatarVariants({ size })
        )}
      >
        <AvatarImage src={imageUrl} className="object-cover" />
        <AvatarFallback>
          <div className="uppercase font-semibold">
            {username[0]}
            {username[username.length - 1]}
          </div>
        </AvatarFallback>
      </Avatar>
      {canShowBadge && (
        <div className="absolute  -bottom-3 left-1/2 transform -translate-x-1/2">
          <LiveBadge />
        </div>
      )}
      <div>{/* <h1>{username}</h1> */}</div>
    </div>
  );
};

interface UserAvatarSkeltonProps extends VariantProps<typeof avatarVariants> {}

export const UserAvatarSkeleton = ({ size }: UserAvatarSkeltonProps) => {
  return <Skeleton className={cn("rounded-full", avatarVariants({ size }))} />;
};
