"use client";
import { useCreatorSidebar } from "@/store/use-creator-sidebar";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Skeleton } from "@/components/ui/skeleton";
interface NavItemProps {
  icon: LucideIcon;
  label: string;
  href: string;
  isActive?: boolean;
  key: string;
}

export const NavItem = ({
  icon: Icon,
  label,
  href,
  isActive,
  key,
}: NavItemProps) => {
  const { collapsed } = useCreatorSidebar((state) => state);
  return (
    <>
      <Button
        asChild
        key={key}
        variant="ghost"
        className={cn(
          "w-full h-12 font-semibold",
          collapsed ? "justify-center" : "justify-start",
          isActive && "bg-accent"
        )}
      >
        <Link href={href}>
          <div className="flex items-center gap-x-4">
            <Icon className={cn("h-4 w-4", collapsed ? "mr-0" : "mr-2")} />
            {!collapsed && <div>{label}</div>}
          </div>
        </Link>
      </Button>
    </>
  );
};

export const NavItemSkeleton = () => {
  return (
    <li className="flex item-center gap-x-4 px-3 py-2">
      <Skeleton className="min-h-[48px] min-w-[48px] rounded-md" />
      <div className="flex-1 hidden lg:block">
        <Skeleton className="h-6" />
      </div>
    </li>
  );
};
