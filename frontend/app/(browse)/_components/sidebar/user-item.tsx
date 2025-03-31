"use client";

import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useSidebar } from "@/store/use-sidebar";
import { UserAvatar } from "@/components/user-avatar";
import Link from "next/link";
import { LiveBadge } from "@/components/live-badge";
import { Skeleton } from "@/components/ui/skeleton";

interface UserItemProps {
  username: string;
  imageUrl: string;
  isLive?: boolean;
  showBadge?: boolean;
}

export const UserItem = ({
  username,
  imageUrl,
  isLive,
  showBadge,
}: UserItemProps) => {
  const pathname = usePathname();
  const { collapsed } = useSidebar((state) => state);
  const href = `/${username}`;
  const isActive = pathname === href;

  return (
    <Button
      asChild
      variant="ghost"
      className={cn(
        "w-full h-auto mb-2 px-3 py-2 rounded-md transition-colors duration-200",
        isActive ? "bg-accent/80 hover:bg-accent" : "hover:bg-muted",
        collapsed ? "justify-center" : "justify-start"
      )}
    >
      <Link href={href} className="w-full flex ">
        <div className={cn("flex w-full gap-3", collapsed && "justify-center")}>
          <UserAvatar
            imageUrl={imageUrl}
            username={username}
            isLive={isLive}
            size="lg"
            showBadge={showBadge}
          />
          {!collapsed && (
            <div className="flex-col gap-2">
              <p className="truncate text-sm font-medium text-foreground">
                {username}
              </p>
              {isLive && <LiveBadge className="w-8" />}
              {/* <div className="text-xs text-muted-foreground">28.7k</div> */}
            </div>
          )}
        </div>
      </Link>
    </Button>
  );
};

export const UserItemSkeleton = () => {
  return (
    <li className="flex items-center mb-2 px-3 py-2 gap-2 rounded-md">
      <Skeleton className="min-h-[32px] min-w-[32px] rounded-full" />
      <div className="flex-1">
        <Skeleton className="h-6" />
      </div>
    </li>
  );
};
