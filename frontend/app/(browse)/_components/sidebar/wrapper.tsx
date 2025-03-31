"use client";
import { cn } from "@/lib/utils";
import { useSidebar } from "@/store/use-sidebar";
interface WrapperProps {
  children: React.ReactNode; // With this we can inject server component as well
}

export const Wrapper = ({ children }: WrapperProps) => {
  const { collapsed } = useSidebar((state) => state);
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
