"use client";
import { useUser } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import {
  Fullscreen,
  KeyRound,
  MessageSquare,
  Users,
  Settings,
} from "lucide-react";
import { NavItem, NavItemSkeleton } from "./nav-item";

export const Navigation = () => {
  const pathname = usePathname();
  const { user } = useUser();

  const routes = [
    {
      label: "Stream",
      href: `/u/${user?.username}`,
      icon: Fullscreen,
    },
    {
      label: "Keys",
      href: `/u/${user?.username}/keys`,
      icon: KeyRound,
    },
    {
      label: "Chat",
      href: `/u/${user?.username}/chat`,
      icon: MessageSquare,
    },
    {
      label: "Community",
      href: `/u/${user?.username}/community`,
      icon: Users,
    },
    {
      label: "Settings",
      href: `/u/${user?.username}/settings`,
      icon: Settings,
    },
  ];

  if (!user?.username) {
    return (
      <ul className="space-y-2">
        {[...Array(4)].map((_, i) => (
          <NavItemSkeleton key={i} />
        ))}
      </ul>
    );
  }
  return (
    <>
      <div className="">
        <ul className="space-y-2 px-3 lg:pt-0">
          {routes.map((route) => (
            <NavItem
              key={route.href}
              label={route.label}
              icon={route.icon}
              href={route.href}
              isActive={pathname === route.href}
            />
          ))}
        </ul>
      </div>
    </>
  );
};
