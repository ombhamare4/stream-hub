"use client";
import { useEffect } from "react";
import { useMediaQuery } from "usehooks-ts";

import { cn } from "@/lib/utils";
import { useCreatorSidebar } from "@/store/use-creator-sidebar";

interface ContainerProps {
  children: React.ReactNode;
}

export function Container({ children }: ContainerProps) {
  const matches = useMediaQuery("(max-width: 1024px)");
  const { collapsed, onCollapse, onExapand } = useCreatorSidebar(
    (state) => state
  );

  useEffect(() => {
    if (matches) {
      onCollapse();
    } else {
      onExapand();
    }
  }, [matches, onCollapse, onExapand]);

  return (
    <div
      className={cn("flex-1 p-5", collapsed ? "ml-[70px]" : "ml-[70px] lg:ml-60")}
    >
      {children}
    </div>
  );
}
