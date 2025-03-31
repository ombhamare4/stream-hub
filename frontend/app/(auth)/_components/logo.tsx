import Image from "next/image";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const Logo = () => {
  return (
    <div className="text-white flex flex-col justify-center gap-y-4 items-center">
      <div className="bg-white rounded-full  p-1">
        <Image src="/eyei.svg" alt="logo" width="200" height="200" />
      </div>
      <div className={cn("flex flex-col items-center",font.className)}>
        <p className="text-2xl font-semibold">StreamHub</p>
        <p className="text-sm text-muted-foreground}">
          Let&apos;s Stream
        </p>
      </div>
    </div>
  );
};
