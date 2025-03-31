"use client";
import { Button } from "@/components/ui/button";
import { useSidebar } from "@/store/use-sidebar";
import { ArrowLeftFromLine, ArrowRightFromLine } from "lucide-react";
import { Fragment } from "react";
import { Hint } from "@/components/hint";

export const Toggle = () => {
  const { collapsed, onCollapse, onExapand } = useSidebar((state) => state);

  const label = collapsed ? "Expand" : "Collapse";

  return (
    <div className="">
      {!collapsed ? (
        <div className="p-3 flex items-center justify-between w-full">
          <p className="font-semibold text-primary">For you</p>
          <Hint label={label} side="right" align="center">
            <Button
              className="h-auto p-2 ml-auto hover:cursor-pointer"
              variant="ghost"
              onClick={onCollapse}
            >
              <ArrowLeftFromLine className="h-4 w-4" />
            </Button>
          </Hint>

          {/* {label} */}
        </div>
      ) : (
        <div className="hidden  lg:flex items-center  justify-center p-3">
          <Hint label={label} side="right" align="center">
            <Button
              className="h-auto p-2 hover:cursor-pointer"
              variant="ghost"
              onClick={onExapand}
            >
              <ArrowRightFromLine className="h-4 w-4" />
            </Button>
          </Hint>

          {/* {label} */}
        </div>
      )}
    </div>
  );
};
