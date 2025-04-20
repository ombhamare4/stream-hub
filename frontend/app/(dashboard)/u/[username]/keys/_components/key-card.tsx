"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import CopyButton from "./copy-button";
import { Button } from "@/components/ui/button";
import { Eye, EyeClosed } from "lucide-react";

interface KeyCardProps {
  value: string | null;
}

export const KeyCard = ({ value }: KeyCardProps) => {
  const [isShow, setIsShow] = useState(false);
  return (
    <>
      <div className="rounded-xl bg-muted p-6">
        <div className="flex flex-wrap space-y-2 lg:flex-nowrap item-center gap-x-10">
          <p className="font-semibold shrink-0">Stream Key</p>
          <div className="space-y-2 w-full">
            <div className="w-full flex items-center gap-x-2">
              <div className="relative w-full flex">
                <Input
                  value={value || "asdasdasdsad"}
                  disabled
                  placeholder="Stream Key"
                  className="bg-black"
                  type={isShow ? "text" : "password"}
                />
                <div className="absolute right-0">
                  <Button onClick={() => setIsShow(!isShow)} variant="link">
                    {isShow ? <EyeClosed /> : <Eye />}
                  </Button>
                </div>
              </div>

              <CopyButton value={value || ""} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
