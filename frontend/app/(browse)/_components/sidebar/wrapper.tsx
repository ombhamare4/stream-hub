"use client";
import { cn } from "@/lib/utils";
import { useSidebar } from "@/store/use-sidebar";
import { useState, useEffect } from "react";
import { ToggleSkelton } from "./toggle";
import { RecommendedSkeleton } from "./recommended";
import { FollowingSkeleton } from "./following";
interface WrapperProps {
  children: React.ReactNode; // With this we can inject server component as well
}

export const Wrapper = ({ children }: WrapperProps) => {
  const [isClient, setIsClient] = useState(false);
  const { collapsed } = useSidebar((state) => state);

  useEffect(() => {
    setIsClient(true); // Set to true after the first render
  }, []);

  if (!isClient) {
    return (
      <aside
        className={cn(
          "fixed left-0 flex flex-col w-60 h-full bg-[#252741] border-r  border-[#2D2E35] z-[50]"
        )}
      >
        <ToggleSkelton />
        <FollowingSkeleton/>
        <RecommendedSkeleton/>
      </aside>
    );
  }
  return (
    <aside
      className={cn(
        "fixed left-0 flex flex-col w-60 h-full bg-[#252741] border-r  border-[#2D2E35] z-[50]",
        collapsed && "w-[70px]"
      )}
    >
      {children}
    </aside>
  );
};
