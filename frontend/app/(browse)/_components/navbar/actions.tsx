import Link from "next/link";
import { currentUser } from "@clerk/nextjs/server";
import { SignInButton, SignOutButton, UserButton } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Clapperboard } from "lucide-react";

export const Actions = async () => {
  const user = await currentUser();
  //   console.log(user);
  return (
    <div className="flex justify-end items-center gap-x-2 ml-4 lg:ml-0">
      {!user && (
        <SignInButton>
          <Button className="cursor-pointer" variant="primary">
            Login
          </Button>
        </SignInButton>
      )}
      {!!user && (
        <div className="flex items-center gap-x-2">
          <Button
            size="sm"
            variant="ghost"
            className="text-muted-foreground hover:text-primary"
            asChild
          >
            <Link href={`/u/${user.username}`}>
              <Clapperboard className="h-5 w-5 lg:mr-2" />
              <span className="hidden lg:block">Dashboard</span>
            </Link>
          </Button>
        </div>
      )}

      <UserButton />
    </div>
  );
};
