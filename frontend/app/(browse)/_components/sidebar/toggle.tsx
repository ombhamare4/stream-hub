"use client";
import { Button } from "@/components/ui/button";
import { useSidebar } from "@/store/use-sidebar";
import { ArrowLeftFromLine, ArrowRightFromLine } from "lucide-react";
import { Hint } from "@/components/hint";
import { Skeleton } from "@/components/ui/skeleton";

export const Toggle = () => {
  const { collapsed, onCollapse, onExapand } = useSidebar((state) => state);

  const label = collapsed ? "Expand" : "Collapse";

  return (
    <div className="">
      {!collapsed ? (
        <div className="p-3 flex items-center justify-between w-full">
          <p className="font-semibold text-primary">For you</p>
          <Hint label={label} side="right" align="center">
            <div
              className="h-auto p-2 ml-auto hover:cursor-pointer hover:bg-accent hover:text-accent-foreground"
              onClick={onCollapse}
            >
              <ArrowLeftFromLine className="h-4 w-4" />
            </div>
          </Hint>

          {/* {label} */}
        </div>
      ) : (
        <div className="hidden  lg:flex items-center  justify-center p-3">
          <Hint label={label} side="right" align="center">
            <div
              className="h-auto p-2 hover:cursor-pointer hover:bg-accent hover:text-accent-foreground"
              onClick={onExapand}
            >
              <ArrowRightFromLine className="h-4 w-4" />
            </div>
          </Hint>

          {/* {label} */}
        </div>
      )}
    </div>
  );
};

export const ToggleSkelton = () => {
  return (
    <div className="p-3 pl-6 mb-2 hidden lg:flex items-center justify-between  w-full">
      <Skeleton className="h-6 w-[100px]" />
      <Skeleton className="h-6 w-6" />
    </div>
  );
};
