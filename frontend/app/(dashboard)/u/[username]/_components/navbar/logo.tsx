import Image from "next/image";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { WebsiteLogo } from "@/components/logo";

const font = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const Logo = () => {
  return (
    <Link href="/">
      <div className=" text-white flex items-center gap-5">
        <div className=" bg-white rounded-full">
          {/* <WebsiteLogo /> */}
        </div>

        <div className={cn("hidden lg:flex flex-col ", font.className)}>
          <p className="text-2xl font-semibold">StreamHub</p>
          <p className="text-xs font-semibold text-left text-gray-300">
            Let's Create
          </p>
        </div>
      </div>
    </Link>
  );
};
