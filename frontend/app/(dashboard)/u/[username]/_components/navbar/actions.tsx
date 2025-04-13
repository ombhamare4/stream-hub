import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { UserButton } from "@clerk/nextjs";

export const Actions = async () => {
  return (
    <div className="flex justify-end items-center gap-x-2 ">
      <Button size="sm" variant="ghost" className="text-muted" asChild>
        <Link href="/">
          <div className="flex items-center text-white gap-2">
            <LogOut className="h-5 w-5" />
            <p>Exit</p>
          </div>
        </Link>
      </Button>
      <UserButton />
    </div>
  );
};
